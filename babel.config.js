module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "react-native-reanimated/plugin",
        {
          relativeSourceLocation: true,
        },
      ],
      [
        "module-resolver",
        {
          alias: {
            components: "./components",
            screens: "./screens/",
            models: "./models/",
            utils: "./utils/",
          },
        },
      ],
    ],
  };
};
