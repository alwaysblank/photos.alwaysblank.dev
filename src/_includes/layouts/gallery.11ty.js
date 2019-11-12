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
    const {public_id, context = false} = data;
    const alt = context && context.custom && context.custom.alt ? context.custom.alt : ``;
    const caption = context && context.custom && context.custom.caption ? context.custom.caption : ``;

    const src = cloudinary.url(public_id, {
      secure: true,
      transformation: [{ width: 100,}]
    });
    const large = cloudinary.url(public_id, {
      secure: true,
      transformation: [{ width: 1280,}]
    });
    const srcset = [320, 640, 1280].map(w => {
      const src = cloudinary.url(public_id, {
        secure: true,
        transformation: [{ width: w,}]
      });
      return `${src} ${w}w`;
    });
    return `<figure class="my-4 "><a class="border-4 border-gray-400 block" href="${large}" data-lightbox>
              <img class="block" 
                src="${src}" 
                srcset="${srcset.join(`, `)}" 
                sizes="(max-width: 640px) 100vw, 640px"
                alt="${alt}" /></a>
                ${caption ? `<figcaption class="px-2 py-2 italic text-center">${caption}</figcaption>` : ``}</figure>`;
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
            return cloudinary.api.resource(id);
          }))
          .then(values => {
            fs.writeFile(data_file, JSON.stringify({"photos": values}, null, 2), err => console.log(err));
            return values;
          });
      })
      .then((res) => this.template(content, res.map(this.buildImage).join(``)));
    }
  }
}

module.exports = Gallery;