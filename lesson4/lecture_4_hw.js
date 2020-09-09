// 1 задание

// setInterval
const printNumbers = (from, to) => {
  let current = from;

  let timerId = setInterval(function () {
      console.log(current);
      if (current == to) {
          clearInterval(timerId);
      }
      current++;
  }, 1000);

}


// setTimeout
const printNumbers2 = (from, to) => {
  let current = from;

  setTimeout(function go() {
      console.log(current);
      if (current < to) {
          setTimeout(go, 1000);
      }
      current++;
  }, 1000);
}

// 2 задание
const displayTime = () => {
  console.clear();
  var now = new Date();
  console.log(now.toLocaleTimeString());
  setTimeout(displayTime, 1000);
}
displayTime();

// 3 задание
const debounce = (f, ms) => {

  let isCooldown = false;

  return function () {
      if (isCooldown) return;

      f.apply(this, arguments);

      isCooldown = true;

      setTimeout(() => isCooldown = false, ms);
  };

}

let f = debounce(alert, 1000);

// 4 задание
const throttle = (f, ms) => {

  let isThrottled = false,
      savedArgs,
      savedThis;

  function wrapper() {

      if (isThrottled) {
          savedArgs = arguments;
          savedThis = this;
          return;
      }

      f.apply(this, arguments);

      isThrottled = true;

      setTimeout(function () {
          isThrottled = false;
          if (savedArgs) {
              wrapper.apply(savedThis, savedArgs);
              savedArgs = savedThis = null;
          }
      }, ms);
  }

  return wrapper;
}

let f1000 = throttle(f, 1000);


