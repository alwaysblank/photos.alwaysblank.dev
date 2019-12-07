let plugins = [
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer'),
];

if (process.env.NODE_ENV !== 'development') {
  plugins.push(require('@fullhuman/postcss-purgecss')({

      // Specify the paths to all of the template files in your project
      content: [
          './src/**/*.njk',
          './src/**/*.js',
      ],

      // Include any special characters you're using in this regular expression
      // defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      extractors: [
          {
            extractor: class TailwindCSS {
              static extract(content) {
                return content.match(/[\w-/:]+(?<!:)/g) || [];
              }
            },
            extensions: ['md', 'njk', 'js']
          }
      ],
      rejected: true,
  }));
}

module.exports = { plugins };