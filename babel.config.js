module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@schemas': './src/schemas',
        '@controllers': './src/controllers'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
