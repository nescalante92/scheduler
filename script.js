$(document).ready(function () {

})
var currentDay = moment();

$("#currentDay").text(currentDay.format("[Today is ]dddd, MMMM Do, YYYY"));
/*toString() returns string object value*/
console.log(currentDay.toString());

var nine = 9;
var ten = 10;
var eleven = 11;
var twelve = 12;
var thirteen = 13;
var fourteen = 14;
var fifthteen = 15;
var sixteen = 16;
var seventeen = 17;
var eighteen = 18;
var nineteen = 19;
var twenty = 20;
var twentyOne = 21;
var twentyTwo = 22;
var twentyThree = 23;
var twentyFour = 24;

var currentTime = moment().format("H");
console.log(currentTime);

//If statement for 9AM
if (currentDay === nine) {
    $(".9AM").addClass("present");
} else if (currentDay > nine) {
    $(".9AM").addClass("past");
} else if (currentDay < nine) {
    $(".9AM").addClass("future");
}

//If statement for 10AM
if (currentDay === ten) {
    $(".10AM").addClass("present");
} else if (currentDay > ten) {
    $(".10AM").addClass("past");
} else if (currentDay < ten) {
    $(".10AM").addClass("future");
}

//If statement for 11AM
if (currentDay === eleven) {
    $(".11AM").addClass("present");
} else if (currentDay > eleven) {
    $(".11AM").addClass("past");
} else if (currentDay < eleven) {
    $(".11AM").addClass("future");
}

//If statement for 12PM
if (currentDay === twelve) {
    $(".12PM").addClass("present");
} else if (currentDay > twelve) {
    $(".12PM").addClass("past");
} else if (currentDay < twelve) {
    $(".12PM").addClass("future");
}

//If statement for 1PM
if (currentDay === thirteen) {
    $(".13PM").addClass("present");
} else if (currentDay > thirteen) {
    $(".13PM").addClass("past");
} else if (currentDay < thirteen) {
    $(".13PM").addClass("future");
}

//If statement for 2PM
if (currentDay === fourteen) {
    $(".14PM").addClass("present");
} else if (currentDay > fourteen) {
    $(".14PM").addClass("past");
} else if (currentDay < fourteen) {
    $(".14PM").addClass("future");
}

//If statement for 3PM
if (currentDay === fifthteen) {
    $(".15PM").addClass("present");
} else if (currentDay > fifthteen) {
    $(".15PM").addClass("past");
} else if (currentDay < fifthteen) {
    $(".15PM").addClass("future");
}

//If statement for 4PM
if (currentDay === sixteen) {
    $(".16PM").addClass("present");
} else if (currentDay > sixthteen) {
    $(".16PM").addClass("past");
} else if (currentDay < sixthteen) {
    $(".16PM").addClass("future");
}

//If statement for 5PM
if (currentDay === seventeen) {
    $(".17PM").addClass("present");
} else if (currentDay > seventeen) {
    $(".17PM").addClass("past");
} else if (currentDay < seventeen) {
    $(".17PM").addClass("future");
}

//If statement for 6PM
if (currentDay === eighteen) {
    $(".18PM").addClass("present");
} else if (currentDay > eighteen) {
    $(".18PM").addClass("past");
} else if (currentDay < eighteen) {
    $(".18PM").addClass("future");
}

//If statement for 7PM
if (currentDay === nineteen) {
    $(".19PM").addClass("present");
} else if (currentDay > nineteen) {
    $(".19PM").addClass("past");
} else if (currentDay < nineteen) {
    $(".19PM").addClass("future");
}

//If statement for 8PM
if (currentDay === twenty) {
    $(".20PM").addClass("present");
} else if (currentDay > twenty) {
    $(".20PM").addClass("past");
} else if (currentDay < twenty) {
    $(".20PM").addClass("future");
}

//If statement for 9PM
if (currentDay === twentyOne) {
    $(".21PM").addClass("present");
} else if (currentDay > twentyOne) {
    $(".21PM").addClass("past");
} else if (currentDay < twentyOne) {
    $(".21PM").addClass("future");
}

//If statement for 10PM
if (currentDay === twentyTwo) {
    $(".22PM").addClass("present");
} else if (currentDay > twentyTwo) {
    $(".22PM").addClass("past");
} else if (currentDay < twentyTwo) {
    $(".22PM").addClass("future");
}

//If statement for 11PM
if (currentDay === twentyThree) {
    $(".23PM").addClass("present");
} else if (currentDay > twentyThree) {
    $(".23PM").addClass("past");
} else if (currentDay < twentyThree) {
    $(".23PM").addClass("future");
}

//If statement for 12PM
if (currentDay === twentyFour) {
    $(".24PM").addClass("present");
} else if (currentDay > twentyFour) {
    $(".24PM").addClass("past");
} else if (currentDay < twentyFour) {
    $(".24PM").addClass("future");
}





























