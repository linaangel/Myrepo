$(document).foundation();

//Check that all files are loaded and document is ready
$(document).ready(function () {

    weatherLookup();
    //Call this function when button is clicked
    $('#search-button').click(function () {
        //Call custom function to get weather data
        weatherLookup();
    });
});

function weatherLookup() {
    var city = $('#search-input').val(); //Get search-input value

    //If there is no city defined in the function, set Miami as default city
    if (city === "") {
        city = "Miami";
    }
    //API url for current forecast
    var current_base_url = "http://api.openweathermap.org/data/2.5/weather";
    //API url for 12 day forecast
    var array_base_url = "http://api.openweathermap.org/data/2.5/forecast/daily";
    var city_url = "?q=" + city;
    var app_id = "&appid=d644d7926743f4a946de621ad366819f";
    var count = "&cnt=12";
    var units = "&units=imperial";
    var unitsC = "&units=metric";
    //Final API url
    var array_url = array_base_url + city_url + app_id + count + units;
    var current_url = current_base_url + city_url + app_id + units;
    var current_urlC = current_base_url + city_url + app_id + unitsC;

    $.getJSON(current_url, updateCurrentUI);
    $.getJSON(current_urlC, updateCurrentUIC);
    $.getJSON(array_url, makeForecastArrays);
}

function updateCurrentUI(weather) {
    //Get data from API response
    var city = weather.name;
    var country = weather.sys.country;
    var status = weather.weather[0].main;
    var temp = weather.main.temp;
    var hum = weather.main.humidity;
    var wind_speed = weather.wind.speed;
    var max_temp = weather.main.temp_max;
    var min_temp = weather.main.temp_min;

    //Get current date in milliseconds and convert it to string.
    var now = new Date();

    //Get data ready for display
    var location = city + ', ' + country;
    var temperature = temp + 'ºF';
    var date = now.toDateString(); //Convert from milliseconds to string.
    var humidity = hum + '%';
    var wind = wind_speed + ' mph';
    var max = max_temp + 'ºF';
    var min = min_temp + 'ºF';
    var source = 'svg/' + status + '.svg';

    //Use values into the html elements
    $('#location').html(location);
    $('#temperature').html(temperature);
    $('#date').html(date);
    $('#humidity').html(humidity);
    $('#wind').html(wind);
    $('#max').html(max);
    $('#min').html(min);

    $('#weatherbg')
        .removeClass()
        .addClass('row')
        .addClass(status);

    $('.weathericon').attr('src', source);
}

function updateCurrentUIC(weather) {
    //Get data from API
    var temp = weather.main.temp;

    //Get data ready for display
    var tempC = temp + 'ºC';

    //Inject values to the html DOM elements with jQuery.
    $('#tempC').html(tempC);
}

function makeForecastArrays(weather) {
    //Position 0 is the first item in the list
    var temp_min = [];
    var temp_max = [];
    var daysOfWeek = getFutureDaysOfWeek(); //Get next 12 days.

    //Make an array with 12 temp items. One for each day.
    for (var i = 0; i < 12; i++) {
        temp_min.push(weather.list[i].temp.min);
        temp_max.push(weather.list[i].temp.max);
    }

    //Get data ready to be exported to the User Interface as a JSON element
    var forecast = {
        temp_min: temp_min,
        temp_max: temp_max,
        daysOfWeek: daysOfWeek
    };

    //Update User Interface with future data
    updateFutureUI(forecast);

}

function getFutureDaysOfWeek() {
    //Make a list of abbreviated days of the week.
    var weekdays = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
    //Make a variable with the current date in milliseconds
    var now = new Date();
    //Convert the current date from milliseconds to day of the week.
    //It returns a number from 0 to 6; 0 being Sunday and 6 being Saturday
    var today = now.getDay();
    var daysOfWeek = [];

    //Make an array with 12 next days of the week.
    for (var i = 0; i < 12; i++) {
        var j = today + i;
        //If j is under 6 (Saturday) else if it's 7 = 0 (Sunday)
        if (j > 6) {
            j = j - 7;
        }
        //Make currentDay var by getting the element # j from the weekdays array.
        var currentDay = weekdays[j];
        //Add j to the list of days of the week
        daysOfWeek.push(currentDay);
    }

    //Make function return the array with the next 12 days of the week.
    return daysOfWeek;
}

function updateFutureUI(forecast) {
    //Put forecast data into local variables
    var temp_min = forecast.temp_min;
    var temp_max = forecast.temp_max;
    var daysOfWeek = forecast.daysOfWeek;

    //.each is a Jquery function to loop through all items with days class
    $('.days').each(function (index) {
        //Set the text of each DOM element to each daysOfWeek element
        $(this).html(daysOfWeek[index]);
    });

    $('.tempmax').each(function (index) {
        //Get data ready for display
        var tempmax = temp_max[index] + 'ºF';
        //Set the text of each html element to each temp_max element
        $(this).html(tempmax);
    });

    $('.tempmin').each(function (index) {
        //Get data ready for display
        var tempmin = temp_min[index] + 'ºF';
        //Set the text of each html element to each temp_min element
        $(this).html(tempmin);
    });
}