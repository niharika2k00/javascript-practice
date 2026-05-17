console.log("Welcome to the Javascript World.");

var message;
console.log(message); // undefined
message = "The variable Has been hoisted";

const BoxMainDiv = document.getElementById("container");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");

var effectBox = document.querySelector(".effector");
var inputBox = document.querySelector("#input");

// document.querySelector(".box1", ".box2").style.backgroundColor = "black";

let numberOfChildren = BoxMainDiv.childElementCount;
console.log("Number of Children inside the main box div: ", numberOfChildren); //  OR  .children.length

console.log(
  "Current Node: ",
  effectBox.nodeName,
  "ParentNode: ",
  effectBox.parentNode,
  "Classname extracted using func: ",
  effectBox.className
);

console.log("Child Nodes of Body => ", document.body.childNodes); //  OR  .children        tagName, nodeName used to get the value of the NODE like DIV SPAN LI UL comment.

/*
let text = "";
for (let i = 0; i < collection.length; i++) {
  text += collection[i].tagName + "<br>";
}
document.getElementById("demo").innerHTML = text;
*/

// textContent()

// document.querySelector(".box2").style.backgroundColor = "deeppink";
// console.log(window.getComputedStyle(box2).backgroundColor);

/*
      GET THE COLOR OF AN ELEMENT
    ---------------------------------
    1) If style is INLINE then use     ==>     event.target.style.backgroundColor;
    2) Else from css file      ==>       window.getComputedStyle(box2).backgroundColor
*/

box2.addEventListener("click", function (event) {
  event.target.style.backgroundColor = "#ff595e";
  console.log("Get Box Color from Inline Styling :  ", event.target.style.backgroundColor);
});

//  GRAB the Style
const getColor = (selector) => {
  return window.getComputedStyle(selector).backgroundColor;
};

var color = getColor(box3);
console.log("Color: " + color);

var toggle = (clickedElement, text) => {
  console.log("Initial ", text);

  if (text === "Yeah !") clickedElement.innerHTML = text;
  else clickedElement.innerHTML = "Yeah !";

  console.log("Final ", text);
};

function colorChanger(clickedElement, color) {
  clickedElement.addEventListener("mouseover", function (e) {
    console.log(clickedElement); // e.target
    effectBox.style.backgroundColor = color;

    const text = clickedElement.innerHTML;
    // toggle(clickedElement, text);
  });
}

colorChanger(box1, getColor(box1));
colorChanger(box2, getColor(box2));
colorChanger(box3, getColor(box3));
colorChanger(box4, getColor(box4));

var x = document.getElementById("frm1");
console.log(x.elements[1].value);

var text = "";
var i;
for (i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}

var content;
var HTag = document.createElement("h3"); // Create  <h2> tag </h2>
var display = document.querySelector("#display"); // P Tag

inputBox.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  console.log("Onchange => ", inputBox.value);

  display.innerHTML = "<h2>" + e.target.value + "</h2>"; // `<h2> val </h2>`
  // display.innerText = "<h2>" + e.target.value + "</h2>"; // returns the text content

  // content = document.createTextNode(e.target.value);
  // HTag.appendChild(content);  OR  HTag.innerText = content;
  // display.appendChild(HTag); // Append a NODE as its Child
});

//  Inline ONCHANGE is also applicable.
inputBox.onchange = function () {
  inputBox.value = inputBox.value.toUpperCase();
};

var arrEle = document.getElementsByName("arr");

const submitFunc = () => {
  var formData = {
    name: arrEle[0].value,
    location: arrEle[1].value,
    favouriteColor: arrEle[2].value,
  };
  console.log("Fetched form data: ", formData);
};

const clickFunc = () => {
  window.location = "https://stackoverflow.com/questions/52229901/navigate-to-route-on-button-click";
};

const changeSelect = (selectOption) => {
  var value = selectOption.value;
  console.log(value);
};

function clickEventTrigger() {
  document.getElementById("myCheck").click();
}

//  Remove Nodes  +  Child Node Functionality
function removeFirstFunc() {
  var list = document.getElementById("list");
  console.log(list.children);
  if (list.hasChildNodes()) {
    // list.children[0].remove();
    // list.removeChild(list.children[0]);
    list.removeChild(list.firstElementChild);
  }
}

var paraEle = document.getElementById("para1");
paraEle.classList.add("myStyle");

paraEle.className = "myStyle";

/*
var myImage = new Image(10, 10);
myImage.src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";
// document.body.appendChild(myImage);
document.getElementById("main").appendChild(myImage);

Difference b/w Element vs Node :    https://www.w3schools.com/jsref/prop_node_parentelement.asp

Difference b/w InnerHTML vs InnerText : https://www.w3schools.com/jsref/prop_node_innertext.asp

element.addEventListener(event, function, useCapture) :       useCapture : BOOLEAN : event bubbling / event capturing. Add EVENTS to the Element.


childElementCount  OR  children.length
childNodes
children

firstChild
firstElementChild
*/

// OnChange Event          https://www.w3schools.com/jsref/event_onchange.asp
<input type="text" onchange="myFunction()" />;
object.onchange = function () {};
object.addEventListener("change", () => {});

// OnKeyPress Event
<input type="text" onkeypress="myFunction()" />;
object.onkeypress = function () {};
object.addEventListener("keypress", () => {});

/*
// CURRENT DATE & TIME
let currTime = new Date(Date.now());

currTime.toDateString();        // 'Fri Jan 28 2022'
currTime.toLocaleTimeString()   // '12:24:57 PM'
currTime.toLocaleDateString();  // '1/28/2022'
*/
