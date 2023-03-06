module.exports = {
    // ...other configuration options...
  
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/pages/index.js',
        },
      ]
    }
  }