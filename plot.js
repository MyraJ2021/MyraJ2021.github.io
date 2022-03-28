//console.log(cityGrowths);

//Sort cities by population growth. Use the sort()method to call an anonymous function
        //This will sort objects by the Increase_from_2016 property (reverse for descending order)
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

//Select only top five cities by population growth using slice()
var topFiveCities = sortedCities.slice(0,5);

//Create an array for city names and for corresponding population growths
    //These arrays will be the x and y axis data for the Plotly chart
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
    //Note: parseInt()method above explicitly casts strings from ciGrowths data as numbers

//Render arrays in Plotly
var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: {title: "City" },
  yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);