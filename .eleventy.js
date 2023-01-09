module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/chassis/chassis.css");
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