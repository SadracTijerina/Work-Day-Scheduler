let currentDateObj = moment();
$("#currentDay").text(currentDateObj.format("dddd MMMM YYYY"));

let schedule = {
  dateTime: currentDateObj.format("dddd MMMM YYYY"),
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

$(".saveBtn").click(function () {
  debugger;
  buttonClickedId = $(this).parent().attr("id");
  console.log(buttonClickedId);

  //TODO: How to get the text of the textarea.
  console.log($(this).parent().children()[1]);
});

function updateLocalStorage() {
  localStorage.clear();
  localStorage.setItem("schedule", JSON.stringify(schedule));
}

function checkDateAndTime() {
  let storedDate = JSON.parse(localStorage.getItem("schedule"));

  //There is nothing in local storage there for no schedule to get and check
  if (!storedDate) {
    updateLocalStorage();
    return;
  }

  if (storedDate.dateTime == currentDateObj.format("dddd MMMM YYYY")) {
    let presentHour = parseInt(currentDateObj.format("H"));

    for (i = 9; i <= 17; i++) {
      if (i == presentHour) {
        $("#hour-" + i).addClass("present");
      } else if (i < presentHour) {
        $("#hour-" + i).addClass("past");
      } else if (i > presentHour) {
        $("#hour-" + i).addClass("future");
      }
    }
  } else {
    updateLocalStorage();
  }
}

//Checks time and date every hour, we call it once though so it loads probably when first opened
checkDateAndTime();
setInterval(function () {
  checkDateAndTime();
}, 3600000);
