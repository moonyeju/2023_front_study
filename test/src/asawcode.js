function asawcode() {
  let result = 0;
  async function test() {
    await Timer((result += 10), 1000);
    await Timer((result += 10), 1000);
    await Timer((result += 10), 1000);
    await Timer((result += 10), 1000);
  }

  function Timer(num, time) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log(num);
        resolve();
      }, time);
    });
  }
  test();
}

export default asawcode;
