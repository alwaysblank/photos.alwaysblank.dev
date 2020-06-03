class Gallery {
  data() {
    return {
      layout: "layouts/roll.njk",
    };
  }

  template(content, images) {
    return `<div>${content}</div><div>${images}</div>`
  }

  buildImage(data) {
    const cloudinary = require('cloudinary').v2;
    const {public_id, width, height, image_metadata = false, context = false} = data;
    const alt = context && context.custom && context.custom.alt ? context.custom.alt.replace(`"`, `'`) : ``;
    const caption = context && context.custom && context.custom.caption ? context.custom.caption : ``;
    const url = context && context.custom && context.custom.url ? context.custom.url : false;
    const url_text = context && context.custom && context.custom.url_text ? context.custom.url_text : false;
    const ratio = height / width;

    const src = cloudinary.url(public_id, {
      fetch_format: `auto`,
      secure: true,
      quality: `auto:low`,
      transformation: [{ width: 100,}]
    });
    const large = cloudinary.url(public_id, {
      fetch_format: `auto`,
      quality: `auto:best`,
      secure: true,
      transformation: [{ width: 1280,}]
    });
    const srcset = [320, 568, 1280].map(w => {
      const src = cloudinary.url(public_id, {
        fetch_format: `auto`,
        quality: `auto:good`,
        secure: true,
        transformation: [{ width: w,}]
      });
      return `${src} ${w}w`;
    });
    let link = ``;
    if (url) {
      link = `<div>(<a class="text-xs" href="${url}">${url_text}</a>)</div>`;
    }
    // Set some details from EXIF data.
    // Currently not much; hopefully as I learn more about the nitty-gritty of photography this will become more interesting.
    let details = ``;
    if (image_metadata.Model || context.custom.Model) {
      let model = image_metadata.Model || context.custom.Model;
      details = `<div class="bg-fade-gray absolute bottom-0 left-0 right-0 text-xs text-left px-2 pt-1 lowercase">${model}</div>`
    }
    return `<figure class="my-4 text-center"><a class="border-4 border-gray-400 bg-gray-400 block relative" href="${large}" data-lightbox>
              <img class="block max-w-full"
                width="568" 
                height="${Math.round(ratio * 568)}"
                src="${src}" 
                data-srcset="${srcset.join(`, `)}" 
                sizes="(max-width: 568px) 100vw, 568px"
                alt="${alt}"
                loading="lazy" />
                ${details}
                </a>
                ${caption ? `<figcaption class="px-2 py-2 italic">${caption}</figcaption>` : ``}${link}</figure>`;
  }

  render({album, content, page, photos}) {
    const fs = require('fs');
    const cloudinary = require('cloudinary').v2;
    const data_file = `./src${page.filePathStem}.11tydata.json`;

    
    if (photos) {
      return this.template(content, photos
        .sort((a, b) => {
          return (new Date(a.created_at)) < (new Date(b.created_at)) ? -1 : 1;
        })
        .map(this.buildImage).join(``))
    } else {

      return cloudinary.api.resources({ 
        type: 'upload',
        max_results: 100,
        prefix: album,
      })
      .then(res => {
        let ids = res.resources
          .map(asset => asset.public_id);
        return Promise.all(
          ids.map(id => {
            return cloudinary.api.resource(id, {
              image_metadata: true,
            }).then(values => {
              delete values.derived;
              return values;
            });
          }))
          .then(values => {
            fs.writeFile(data_file, JSON.stringify({"photos": values}, null, 2), err => {
              if (err) throw err;
              console.log(`Saved data for ${album}!`);
            });
            return values;
          });
      })
      .then((res) => this.template(content, res.map(this.buildImage).join(``)));
    }
  }
}

module.exports = Gallery;
