function promisecode() {
  let result = 0;
  function Timer(num, time) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log(num);
        resolve();
      }, time);
    });
  }

  Timer((result += 10), 1000)
    .then(() => {
      return Timer((result += 10), 1000);
    })
    .then(() => {
      return Timer((result += 10), 1000);
    })
    .then(() => {
      return Timer((result += 10), 1000);
    })
    .then(() => {});
}
export default promisecode;
