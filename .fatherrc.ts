
const type = process.env.BUILD_TYPE

let config = {}

if(type === 'lib') {
  config = {
    esm: false,
    cjs: 'babel',
    extraBabelPlugins: [
      [
        'babel-plugin-import',
        {
          libraryName: 'lodash-es',
          libraryDirectory: '',
          camel2DashComponentName: false, // default: true
        },
        'lodash-es',
      ],
    ],
  }
}else {
  config = {
    esm: {
      type: "babel",
      importLibToEs: true 
    },
    cjs: false,
    extraBabelPlugins: [
      [
        'babel-plugin-import',
        {
          libraryName: 'lodash-es',
          libraryDirectory: '',
          camel2DashComponentName: false, // default: true
        },
        'lodash-es',
      ]
    ],
  }
}

export default config 
