/**
 * Dom
 *      -- Attribute
 *         -- getAttribute
 *         -- setAtrribute
 *         -- hasAttribute
 *         -- RemoveAttribute
 *      -- Create Element From Js and add it to dom
 * ------------------
 * Bom
 *  == Brower Object Model
 *  -- Window
 *  -- location
 *  -- history
 *  -- Navigation
 *  -- screen
 */

// var a1 = document.getElementById("link1");
// var a2 = document.getElementById("link2");
// // get ,, Set
// function getAttr() {
// 	if (a1.hasAttribute("href")) {
// 		a1.removeAttribute("href");
// 	} else {
// 		a1.setAttribute("href", "#new Value");
// 	}
// 	// a1.setAttribute("class", "jsClass");
// }
/** ========= Slider  ========= */
// var img = document.getElementById("img1");
// function show() {
// 	img.setAttribute("src", "./imgs/2.jpg");
// 	// console.log(img.getAttribute("src"));
// }
/**================================== */
/**
 *
 * <div>Hello From JS</div>
 * // append -- node , string
 * appendChild-- node
 */

// var div = document.querySelector(".result");

// var myElement = document.createElement("div");
// var p = document.createElement("p");
// p.innerHTML =
// 	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, sapiente?";
// var myText = document.createTextNode("Hello From JS");

// myElement.append("Hello From Js");

// console.log(myElement);

// myElement.setAttribute("class", "jsClass");
// myElement.setAttribute("id", "div1");

// function addNewElement() {
// 	div.insertBefore(myElement);
// }

//  alert( "Hello" );
// window.alert("Hello");
// console.log(window);
// var myWin;
// function openNewTab() {
// 	myWin = window.open("./about.html", "", "width=200,height=200");
// }
// function closeTab() {
// 	myWin.close();
// }
// function moveToTab() {
// 	myWin.moveTo(300, 300);
// }
// function MoveByTab() {
// 	myWin.moveBy(100, 100);
// }
// function ResizeToTab() {
// 	myWin.resizeTo(300, 300);
// }
// function ResizeByTab() {
// 	myWin.resizeBy(100, 100);
// }
/**
 * setTimeOut
 * SetInterval
 *
 */
// setTimeout(function () {
// 	window.open("./about.html");
// }, 3000);

// var i = 0;
// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 3000);
// var p = document.getElementById("result");
// var myInterval;
// function startCount() {
// 	var i = 0;
// 	myInterval = setInterval(function () {
// 		p.innerHTML = i++;
// 	}, 1000);
// }

// function stopCount() {
// 	clearInterval(myInterval);
// }
