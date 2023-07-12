/**
 * Events
 *  - add Attribute on the element
 *  - attach function
 *  - addEventLisener
 * =Object
 *  -- get
 *  -- set 
 *     -- Dot Notation 
 *     -- subscript notation
 * == Dom Tree
 * -- Dom Object
 * /**==================================
 * Dom --> Document Object Model
 * ----------------------------------
 *1- How to select Element From Dom
    1- getElementById() --> return Element
    1- querySelector() --> return Element
    2- getElementsByClassName() --> return Collection
    3- getElementsByTagName() --> return Collection
    4- getElementsByName() --> return Collection
    4- querySelectorAll() --> return Collection
    ------------------------------------------------
    -- How To change Content
    ------------------------------------------------
    == innerText
    == innerHTML
    == textConent (search)
    ------------------------------
    == to get any value from any input
     -- input.value // get 
     == input.value = new Value
     == input.checked
     -------------------- To Change Style ----------------------
     1- Style Object
     2- className ,, override
     3- classList
        --.add()
        -- remove()
        -- toggle()
 * ================================= */

// function showMessage() {
// 	console.log("Btn Clicked");
// }

/**================= Object --------
 * ---------------------------------
 *  Properties : Key:Value
 *  Methods
 *  ================ */

// var student = {
// 	fname: "mona",
// 	lname: "ali",
// 	age: 30,
// 	address: "Benha",
// 	colors: ["red", "green", "blue"],
// };
// var student = {
// 	fname: "Mohamed",
// 	lname: "Ahmed",
// 	age: 10,
// 	show: false,
// 	address: {
// 		city: "Benha",
// 		street: "Saad Street",
// 		code: "123",
// 	},
// 	colors: ["red", "green", "blue"],
// 	// method
// 	display: function () {
// 		console.log(student.fname + " : " + student.age);
// 	},
// };

// student.display;
// student.display();

// student.fname; // property
// student.display(); // method
// console.log(student.display);
// student.display();
// let str = "Hello From iti ";

// console.log( str.length );

// str.indexOf()// method

// console.log(student["address"].city);
// var colors = student.colors;
// console.log(colors[0]);
// console.log(student.colors[0]);
//get
/**
 * Dot Notation
 * Subscript Notation
 *
 */
// set
// student["fname"] = "new Name";
// var fname = student.fname;
// var fname = student["fname"];
// var age = student["age"];
// console.log(fname);
// set
// student.fname = "Hoda"; //override

// student.age = 40;
// student.show = true; // add
// console.log(student);
// console.log(student.fname);
// console.log(student.age);

// console.log(student.show);

function changeContent() {
	var p = document.querySelector(".change").firstElementChild;
	var h1 = document.querySelector("h1:first-child");
	// set
	// console.log(h1);
	// console.log(p.innerText);
	// p.innerHTML = h1.innerHTML;
	// p.innerText = "<h1>Hello Angular Track</h1>";
	// p.innerHTML = "<h1>Hello Angular Track</h1>";
}

function changeStyle() {
	var p = document.querySelector(".change").firstElementChild;
	// p.style.backgroundColor = "pink";
	// p.style.color = "#fff";
	// p.style.padding = "30px";
	// console.log(p.className); // get
	// // set
	// p.className = "jsClass";
	p.classList.toggle("jsClass");
	console.log(p.classList);
}

// var showName = function () {
// 	var input = document.getElementById("input1");
// 	var result = document.getElementById("result");
// 	result.innerHTML = input.value;
// };
// console.log(document.body);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// var p = document.getElementById("btn1");

// console.log(p);
// var div = document.getElementById("myDiv");
// console.log(div.firstChild);
// var element = document.querySelector("p.content");

// console.log(element);
// function Show() {
// 	for (var i = 0; i < elements.length; i++) {
// 		if (elements[i].checked) {
// 			console.log(elements[i].value);
// 		}
// 	}
// }
