module.exports = function(api) {
  api.cache(true);
  return {
    plugins: ['relay'],
    presets: ['babel-preset-expo'],
  };
};
