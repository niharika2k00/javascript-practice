/*             List of Polyfills
            ------------------------

    1) For Each
    2) Filter
    3) Map
    4) Reduce
    5) Bind
    6) SetTimeOut
    7) SetInterval 
*/

const arr = ["Charles", "Lucifer", "Harry", "Jack"];

// (val , idx , arr)
function display(x, idx, arr) {
  console.log(x, idx, arr);
}

// _________________________________________________________
//                  FOR EACH LOOP  Polyfill
// _________________________________________________________
Array.prototype.customForEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

//  this refers to arr array , callBack func refers to the display func.
arr.customForEach(display);
// arr.forEach(display);     // In Build

// _________________________________________________________
//                  FILTER Polyfill
// _________________________________________________________
Array.prototype.customFilter = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].length > 5) callBack(this[i], i);
  }
};

arr.customFilter(display);

// _________________________________________________________
//                   MAP Polyfill   (store in arr and return)
// _________________________________________________________
var numArr = [1, 2, 3, 4];

var display1 = (ele) => {
  return ele * ele;
};

Array.prototype.customMap = function (callBack) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callBack(this[i]));
  }

  return res;
};

console.log(numArr.customMap(display1));

// _________________________________________________________
//                  REDUCE  Polyfill
// _________________________________________________________

//  (total , curr , idx , arr)
var add = (accumulator, currVal, idx, arr) => {
  accumulator += currVal;
  return accumulator;
};

Array.prototype.customReduce = function (callBack, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callBack(accumulator, this[i], i, this);
  }
  return accumulator;
};

console.log(numArr.customReduce(add, 0));

// _________________________________________________________
//                  BIND  Polyfill
// _________________________________________________________
asdfaf;

// _________________________________________________________
//                  SET-TIME-OUT  Polyfill
// _________________________________________________________
// requestIdleCallback will wait for the main thread to be idle before executing the callback.

function customSetTimeOut(callBack, delay) {
  var startTime = Date.now();

  function check() {
    if (Date.now() > startTime + delay) {
      callBack();
    } else requestIdleCallback(check);
  }
  requestIdleCallback(check);
}

customSetTimeOut(() => {
  console.log("CallBack func inside setTimeOut executed");
}, 2000);

// _________________________________________________________
//                  SET-TINTERVAL  Polyfill
// _________________________________________________________
function customSetInterval(callBack, time) {
  callBack();

  setTimeout(callBack, time);
}

customSetInterval(() => {
  console.log("Inside SetInterval !");
}, 2000);

// https://dev.to/abhishekraj272/js-polyfills-asked-in-interviews-19b3
// https://dev.to/umerjaved178/polyfills-for-foreach-map-filter-reduce-in-javascript-1h13
// https://medium.com/clarusway/making-a-todo-list-with-html-css-and-javascript-154839b770b6
