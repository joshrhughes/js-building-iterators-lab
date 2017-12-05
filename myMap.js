// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {

//  CODE INSIDE HERE   //

// need it to pass through each value of the array with a for loop. 
// need for it to return the new value and place it in an array
//I need to creat that new array...
	
//Place new array outside of forloop 
	var newArr = [];
	// console.log("the forloop is about to begin");
	for (var i = 0; i < arr.length; i++) {
  		// console.log("running the loop for index: " + i);
  		// console.log("old item: " + arr[i]);
  		// console.log("new item: " + callback(arr[i],i,arr));
  		//callback(arr[i],i,arr);
  		newArr.push(callback(arr[i],i,arr));
	}
	// console.log("the forloop has ended");
	// console.log(newArr);
	return newArr;

}


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
