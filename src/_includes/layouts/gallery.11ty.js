class Test {
  data() {
    return {
      layout: "layouts/roll.njk",
    };
  }

  template(content, images) {
    return `<div>${content}</div><div>${images}</div>`
  }

  buildImage(image) {
    const cloudinary = require('cloudinary').v2;

    const src = cloudinary.url(image, {
      secure: true,
      transformation: [{ width: 100,}]
    });
    const srcset = [320, 640, 1280].map(w => {
      const src = cloudinary.url(image, {
        secure: true,
        transformation: [{ width: w,}]
      });
      return `${src} ${w}w`;
    });
    return `<img class="border-4 border-gray-400 my-4" 
              src="${src}" 
              srcset="${srcset.join(`, `)}" 
              sizes="(max-width: 640px) 100vw, 640px" />`;
  }

  render({album, content, page, photos}) {
    const fs = require('fs');
    const cloudinary = require('cloudinary').v2;
    const data_file = `./src${page.filePathStem}.11tydata.json`;
    
    if (photos) {
      console.log('loaded from cache');
      return this.template(content, photos.map(this.buildImage).join(``))
    } else {
      console.log('getting from cloludinary');
      return cloudinary.api.resources({ 
        type: 'upload', 
        prefix: album 
      })
      .then(res => {

        fs.writeFile(data_file, JSON.stringify({"photos": res.resources.map(asset => asset.public_id)}), err => console.log(err));
        return res;
      })
      .then((res) => this.template(content, res.resources.map(asset => asset.public_id).map(this.buildImage).join(``)));
    }
  }
}

module.exports = Test;