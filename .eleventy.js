module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/static");
  eleventyConfig.setBrowserSyncConfig({
		files: './dist/assets/**/*.css'
	});
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts"
    }
  }
};