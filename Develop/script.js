var hour_9 = document.getElementById('hour-9');
var hour_10 = document.getElementById('hour-10');
var hour_11 = document.getElementById('hour-11');
var hour_12 = document.getElementById('hour-12');
var hour_1 = document.getElementById('hour-1');
var hour_2 = document.getElementById('hour-2');
var hour_3 = document.getElementById('hour-3');
var hour_4 = document.getElementById('hour-4');
var hour_5 = document.getElementById('hour-5');
var buttons = document.querySelectorAll('.btn');
var hoursArray = [hour_9, hour_10, hour_11, hour_12, hour_1, hour_2, hour_3, hour_4, hour_5];
var today = dayjs();
var currentHour = today.hour();
var currentHourIndex = currentHour - 9;

$('#currentDay').text(today.format('dddd, MMMM D'))

for (i=0;i<hoursArray.length;i++) {
  if (i < currentHourIndex) {
    hoursArray[i].className = 'row time-block past';
  } else if ( i == currentHourIndex) {
    hoursArray[i].className = 'row time-block present';
  } else {
    hoursArray[i].className = 'row time-block future';
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", function(e) {
    console.log(e.target.parentElement.id);
  });
});



// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?