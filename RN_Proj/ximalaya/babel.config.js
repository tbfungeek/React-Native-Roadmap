module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',{
        root:['./src'],
        alias:{
          '@/utils':'./src/utils',
          '@/api':'./src/api',
          '@/assets':'./src/assets',
          '@/components':'./src/components',
          '@/configs':'./src/configs',
          '@/model':'./src/model',
          '@/navigators':'./src/navigators',
          '@/screens':'./src/screens'
        }
      }

    ]
  ]
};
