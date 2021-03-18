module.exports = { 
  style: {
   postcss: { // https://github.com/gsoft-inc/craco/blob/master/recipes/add-postcss-features/craco.config.js
      env: {
        stage: 2,
        features: {
          'nesting-rules': true,
          'custom-selectors': true,
          'custom-media-queries': true,
        },
      }
    }
  }
};