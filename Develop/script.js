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
// The first hour (index 0) in hoursArray is hour_9. So the index is the hour - 9 (9-9=0)
var currentHourIndex = currentHour - 9;

$('#currentDay').text(today.format('dddd, MMMM D'))

for (i=0;i<hoursArray.length;i++) {
  // Determine if each time block is in the past, present, or future, and change the classes accordingly
  if (i < currentHourIndex) {
    hoursArray[i].className = 'row time-block past';
  } else if ( i == currentHourIndex) {
    hoursArray[i].className = 'row time-block present';
  } else {
    hoursArray[i].className = 'row time-block future';
  }

  // Display saved descriptions into text boxes
  var localKey = hoursArray[i].id;
  var localKeyExists = (localStorage.getItem(localKey) !== null);
  if (localKeyExists) {
    var localValue = localStorage.getItem(localKey);
    hoursArray[i].querySelector('.description').value = localValue;
  }
}

// Save user input to local storage, the Key being the element ID of the block the user ID clicked the save button for
buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    var parentId = this.parentElement.id;
    var parentEl = document.getElementById(parentId);
    var textBoxValue = parentEl.querySelector(".description").value;
    localStorage.setItem(parentId, textBoxValue);
  });
});