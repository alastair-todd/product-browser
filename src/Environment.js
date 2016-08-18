var _Environments = {
  production: { API_URL: '', GOOGLE_SEARCH_API_KEY: '', GOOGLE_SEARCH_ENGINE_KEY: '', FLICKR_SEARCH_API_KEY: '' },
  staging: { API_URL: '', GOOGLE_SEARCH_API_KEY: '', GOOGLE_SEARCH_ENGINE_KEY: '', FLICKR_SEARCH_API_KEY: '' },
  development: {
    API_URL: 'http://134.213.113.137:9000',
    GOOGLE_SEARCH_API_KEY: 'AIzaSyBQQc_cjX20B6ifevnUUglZWokdR402-Yw',
    GOOGLE_SEARCH_ENGINE_KEY: '007281745744775710442:fvaffsm1ywu',
    FLICKR_SEARCH_API_KEY: 'e0b3b16b6a4729284dc22c2db7c52cf3'
  }
}

function getPlatform () {
  // Insert logic here to get the current platform (e.g. staging, production, etc)
  return 'development'
}

function getEnvironment () {
  let platform = getPlatform()

  // ...now return the correct environment
  return _Environments[platform]
}

var Environment = getEnvironment()
module.exports = Environment
