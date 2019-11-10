class Test {
  data() {
    return {
      layout: "layouts/roll.njk",
    };
  }

  render({album, content}) {
    const cloudinary = require('cloudinary').v2;

    return cloudinary.api.resources({ 
      type: 'upload', 
      prefix: album 
    }).then((res) => `<div>${content}</div><div>${res.resources.map((image) => {
      const src = cloudinary.url(image.public_id, {
        transformation: [{ width: 100,}]
      });
      const srcset = [320, 640, 1280].map(w => {
        const src = cloudinary.url(image.public_id, {
          transformation: [{ width: w,}]
        });
        return `${src} ${w}w`;
      })
      return `<img class="border-4 border-gray-400 my-4" src="${src}" srcset="${srcset.join(`, `)}" sizes="(max-width: 640px) 100vw, 640px" />`;
    }).join(``)}</div>`);
  }
}

module.exports = Test;