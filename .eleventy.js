const EleventyPluginRss = require('@11ty/eleventy-plugin-rss');
const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyPluginRss);
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: '.11ty-vite', // Default name of the temp folder
    serverOptions: {},
    viteOptions: {
      clearScreen: false, // https://ja.vitejs.dev/config/shared-options.html#clearscreen
      server: {
        mode: 'development',
        middlewareMode: true,
      },
      build: {
        mode: 'production',
      },
    },
  });

  // Copy/pass-through files
  eleventyConfig.addPassthroughCopy('src/assets/css');
  eleventyConfig.addPassthroughCopy('src/assets/js');

  return {
    templateFormats: ['njk', 'html'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'build',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  };
};
