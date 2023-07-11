/**
 * communicatio with user
 *    = propmet --, alert , confirm
 * == Ternary Operator
 *
 * Functions
 *    -- Built in Functions
 *       -- parseIn(), Number()
 *    -- User defined Function
 *         - function statement
 *         - function expression
 * String Object
 * Array
 * -----------------------------------
 * Math
 * -----------------------------------
 * Date Object (self study)
 */

// var num1 = prompt("Enter Num1");
// console.log(parseInt(num1) + 10);
// alert("Item Deleted");
// var result = confirm("Are You sure you want to delete this item ?");
// if (result) {
// 	document.writeln("Item Delete successfully");
// } else {
// 	document.writeln("Operation Canceld");
// }
/**Ternary Operator */

// (result)
// 	? document.writeln("Item Delete successfully")
// 	: document.writeln("Operation Canceld");

// (condition)?// true://false
/** Functions */

/** user defined function */

// console.log(fname); // error
// var fname = "mona";
// console.log(fname);
// add(5, 6);
// function add(x, y) {
// 	console.log("X : ", x);
// 	console.log("Y : ", y);
// 	console.log(x + y);
// 	console.log("===========");
// }

// // arguments
// var result = add(2, 6);
// console.log(result);

/** Function expression */

// add();
// add(4, 5);

// var add = function (x, y) {
// 	console.log(x + y);
// };

// var result = add(2, 3); //
// console.log(result);
/**  */
// var myNum = parseInt("10");
// console.log(myNum);
// var a = 3;
// var b = 4;
// var result = a + b;
// console.log(result);
// // 10 line
// var a = 5;
// var b = 6;
// var result = a + b;
// console.log(result);
// var a = 60;
// var b = 63;
// var result = a + b;
// console.log(result);
/** ================
 * String Object
 * ================
 * 1- length
 * -----------------
 * == charAt() -->
 * == indexOf() -->
 * == lastIndexOf() -->
 * == split("")
 * == concat()
 * == startWith()
 * == endsWith()
 * == includes()
 * == toUpperCase()
 * == toLowerCase()
 *
 * ======================= */
// var str = "ITI , Benha";
// var myStr = "Hello";
// var result = str.toLowerCase();
// console.log(result);
// var result = str.split(";");
// console.log(result[0].split("="));
// var result = str.charAt();
// console.log(result);
// /** loop */
// for (var i = 0; i < str.length; i++) {
// 	console.log(i + " : " + str[i]);
// }
/**============ Array=============
 * -------------------------------
 * 1-length
 * ---------------
 * == push -->
 * == unshift
 * == pop
 * == shift
 * == reverse
 * == join
 *  ============================= */
// var str = "Alaa"; // aala
// var result = str.split("");
// console.log(result.reverse().join(""));
// var arr = ["mona", 11, true];
// var result = arr.join(";");
// console.log(result);
// arr.unshift("hoda");
// arr.unshift("alaa");
// arr.unshift([1, 2, 3]);
// arr.push("hoda");
// arr.push("ali");
// arr.push(55);
// arr.push([1, 2, 4]);
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[0]); //  get

// for (var i = 0; i < arr.length; i++) {
// 	console.log(i, arr[i]);
// }
/**
 * Math
 * -----------------
 * PI -->
 * ----------------
 * == sqrt
 * == pow
 * == sign --> positive --> 1
 *         --> negative --> -1
 *         --> 0 --> 0
 *
 * == round()
 * == floor()
 * == ceil()
 * == random()
 * == min
 * == max
 */

// console.log(Math.floor(Math.random() * 10));
// console.log(Math.max(10, 20, 1, 30, 50));
/** Data Self study */

// var myDate = new Date();

/**
 * sun 0
 * mon 1
 * thu 2
 * --------------
 * jun ==> 0
 *
 */
// console.log(myDate.getMonth());
/** =============================================
 *  == any task written by functions
 * -----------------------------------------------
 *  == var arr = ["mona","ali","alaa","hoda","ahmed","Fathy"]
 *  == return two random elements from the array ==> [mona,ali]
 * ------------------------------------------
 * 2- take an string from the user , and a character
 *    "this is javascript" , i
 *
 * return [2,5,15]
 * ------------------------------------------
 * 3- take 5 element from the user and push them into an array (10,3,6,9,12)
 *
 *  1- sort ascend 3,6,9,10,12
 *  2- sort descend 12,10,9,6,3
 *  3- sum      -- X
 * ---------------------------------------------
 *4- take string from the user , count (e) in the string
  -- ahmed --> 1
  -- sara --> 0
  -- Aliieee --> 3
 *
 * =========== */
