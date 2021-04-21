let currentDateObj = moment();
$("#currentDay").text(currentDateObj.format("dddd MMMM YYYY"));

let schedule = {
  dateTime: currentDateObj,
  task: {
    9: "9am task",
    10: "10am task",
    11: "11am task",
    12: "12pm task",
    13: "1pm task",
    14: "2pm task",
    15: "3pm task",
    16: "4pm task",
    17: "5pm task",
  },
};

//We only set it when schedule isnt created or it needs to be updated
//localStorage.setItem("schedule", JSON.stringify(schedule));

function checkDateAndTime() {
  debugger;
  let storedDate = JSON.parse(localStorage.getItem("schedule"));

  //There is nothing in local storage there for no schedule to get and check
  if (!storedDate) {
    return;
  }

  // ISSUE: currentDateObj and stored.dateTime return two different types.
}
/*check state of current time function

from local storage get the date that was previously saved and check if it 
matches current date

IF it does match current date then check what the current hour it is
and run appropriate classes to row (past, present, future)


IF it doesn't match current date then clear all the tasks (another function) and 
clear local storage date value and make it the current date

*/

checkDateAndTime();
