module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
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