module.exports = {

  directories: {
    src: 'src/',
    featureDirectory: 'src/Feature/',
    projectDirectory: 'src/Project/',
    foundationDirectory: 'src/Foundation/',
    buildDirectory: './build',
    themeBuildDirectory: './build/Website/themes/',
    websiteDirectory: './build/Website/'
  },

  currentWebsite: 'yourprojectname',
  fractalExternalBuildPrefix: '/yourprojectname/',
  autoPrefixerBrowsers: ['last 2 versions', 'ie >= 10', 'Safari >= 9', 'iOS >= 8'],
  bundle: {
    cssBundleName: 'bundle.css',
    jsBundleName: 'bundle.js',
    jsMapName: 'bundle.map.js',
  }
}
