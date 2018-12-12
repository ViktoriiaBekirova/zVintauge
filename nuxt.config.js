module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vintauge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  css: [
      {src: '~assets/scss/app.scss', lang: 'scss'},
      'swiper/dist/css/swiper.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /*
	 ** Postcss plugins
	*/
    postcss: [
      require('postcss-inline-svg')(),
      require('autoprefixer')({
        browsers: ['last 10 versions', 'ie >= 11']
      })
    ]
  },
  vendor: ['components'],
  plugins: [
    '~plugins/components.js',
    {src: '~plugins/swiper', ssr: false}
  ],
   modules: [
        [
            'nuxt-mq',
            {
                defaultBreakpoint: 'default',
                breakpoints: {
                    mobile: 600,
                    tablet: 768,
                    desktop: Infinity
                }
            }
        ]
   ]
}

