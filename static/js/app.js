// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each ufo report object
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each ufo report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = tbody.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = tbody.append("td");
//     cell.text(value);
//   });
// });

// Refactor to use Arrow Functions!
data.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// Getting a reference to the date filter button with the id 'filter-btn'
var filterButton = d3.select("#filter-btn");

// Select the input element on the page with the id property 'datetime'
var inputField = d3.select("#datetime");

// Create a custom function to return data that matches the date
function dateFilter(ufo) {
	return ufo.datetime == inputField;
}

// Create a function to filter data once we click on the filter button
filterButton.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Call the custom function with filter()
	var filteredData = tableData.filter(dateFilter);

	// Get the value property of the input element
	// var inputValue = inputElement.property("value");

	// Display the results
	console.log(filteredData);

	// append to table only filtered data
	// newData.forEach((ufoReport) => {
	//   var row = tbody.append("tr");
	//   Object.entries(ufoReport).forEach(([key, value]) => {
	//     var cell = tbody.append("td");
	//     cell.text(value);
	//   });
	// });
});

// // output filtered dates to tbody
// var output = d3.select("tbody");




