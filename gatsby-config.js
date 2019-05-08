module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-startgatsby"
    }
  ],
  plugins: [
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["gatsby-theme-startgatsby"]
      }
    }
  ]
};
