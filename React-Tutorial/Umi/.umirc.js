// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  /*routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/hello',
          component: './hello',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],*/
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'Umi',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
