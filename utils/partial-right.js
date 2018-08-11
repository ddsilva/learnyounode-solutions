module.exports = (fn, ...rightArgs) => (
  (...originalArgs) => (
    fn.call(null, ...originalArgs, ...rightArgs)
  )
);
