// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Create a buildTable function to build data from data.js
function buildTable(data) {
	data.forEach((ufoReport) => {
	  var row = tbody.append("tr");
	  Object.entries(ufoReport).forEach(([key, value]) => {
	    var cell = tbody.append("td");
	    cell.text(value);
	  });
	});
};

// Build the table for the first time on page load
buildTable(tableData);

// Getting a reference for each filter button with the button id 
var dateBtn = d3.select("#date-btn");
var cityBtn = d3.select("#city-btn");
var stateBtn = d3.select("#state-btn");
var countryBtn = d3.select("#country-btn");
var shapeBtn = d3.select("#shape-btn");

// Create a function to filter data once we click on the filter button
dateBtn.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Select the raw input element and get the raw HTML node
	var inputField = d3.select("#input-value");

	// Get the value property of the input element
	var inputValue = inputField.property("value");

	// Console.log the inputValue
	console.log(inputValue);

	// Call the custom function with filter()
	var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

	// Display the filtered data results
	console.log(filteredData);

	// Remove all the pre-existing data from the table
	tbody.selectAll("*").remove();

	// Build the table again using filtered data
	buildTable(filteredData);
});

// Create a function to filter data by city
cityBtn.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Get input values
	var inputField = d3.select("#input-value");
	var inputValue = inputField.property("value");
	console.log(inputValue);

	// function with filter() to get filtered data
	var filteredData = tableData.filter(ufo => ufo.city === inputValue);
	console.log(filteredData);

	// Remove all the pre-existing data from the table
	tbody.selectAll("*").remove();

	// Build the table again using filtered data
	buildTable(filteredData);
});

// Create a function to filter data by state
stateBtn.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Get input values
	var inputField = d3.select("#input-value");
	var inputValue = inputField.property("value");
	console.log(inputValue);

	// function with filter() to get filtered data
	var filteredData = tableData.filter(ufo => ufo.state === inputValue);
	console.log(filteredData);

	// Remove all the pre-existing data from the table
	tbody.selectAll("*").remove();

	// Build the table again using filtered data
	buildTable(filteredData);
});

// Create a function to filter data by country
countryBtn.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Get input values
	var inputField = d3.select("#input-value");
	var inputValue = inputField.property("value");
	console.log(inputValue);

	// function with filter() to get filtered data
	var filteredData = tableData.filter(ufo => ufo.country === inputValue);
	console.log(filteredData);

	// Remove all the pre-existing data from the table
	tbody.selectAll("*").remove();

	// Build the table again using filtered data
	buildTable(filteredData);
});

// Create a function to filter data by shape
shapeBtn.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Get input values
	var inputField = d3.select("#input-value");
	var inputValue = inputField.property("value");
	console.log(inputValue);

	// function with filter() to get filtered data
	var filteredData = tableData.filter(ufo => ufo.shape === inputValue);
	console.log(filteredData);

	// Remove all the pre-existing data from the table
	tbody.selectAll("*").remove();

	// Build the table again using filtered data
	buildTable(filteredData);
});
