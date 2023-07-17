/**
 * Window
 * History
 * Location
 * screen --> self study
 * Navigator
 */
/**
 * 1- add attribute on element
 * 2- add function on element
 * 3- addEventLisener
 */

// get ,,, set

// var successFun = function (x) {
// 	console.log(x.coords.longitude);
// 	console.log(x.coords.latitude);
// 	console.log("success");
// };

// var errorFun = function () {
// 	console.log("Error");
// };
// function execute() {
// 	navigator.geolocation.getCurrentPosition(successFun, errorFun);
// 	// console.log(navigator.geolocation);
// 	// history.forward();
// 	// location.reload();
// 	// location.replace("https://www.google.com.eg/");
// 	// get
// 	// location.pathname = "/about.html";
// 	// location.assign("https://www.google.com.eg/");
// }

// function display(x) {
// 	// console.log(params.fname.x);
// 	console.log("Display");
// }

// display({ fname: { x: 20, y: 30 } });
/**====================================== */

// var btn = document.getElementById("btn");
// var p = document.getElementById("result");

// function changeStyle(x) {
// 	p.style.backgroundColor = "red";
// }

// function changeContent() {
// 	p.innerHTML = "Hello Angular";
// }
// function display() {
// 	console.log("Mohamed");
// }
// btn.addEventListener("click", changeStyle);
// btn.addEventListener("click", changeContent);

// setTimeout(function () {
// 	btn.style.opacity = 0.1;
// 	btn.removeEventListener("click", changeStyle);
// }, 3000);
// btn.onclick = changeContent;
// btn.onclick = changeStyle;
// btn.ondblclick = changeContent;

/** StopPropagation */
var input = document.getElementById("input1");
var show = document.getElementById("show");
var errorMsg = document.getElementById("errorMessage");
input.addEventListener("focus", function () {
	input.style.border = "2px solid blue";
});
input.addEventListener("blur", function () {
	input.style.border = "2px solid orange";
});
input.addEventListener("input", function (e) {
	if (e.target.value.length >= 3) {
		input.style.border = "2px solid green";
		errorMsg.style.display = "none";
	} else {
		input.style.border = "2px solid red";
		errorMsg.style.display = "block";
	}
});
