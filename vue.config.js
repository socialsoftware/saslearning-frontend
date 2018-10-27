module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/scss/main.scss";`
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8081'
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
