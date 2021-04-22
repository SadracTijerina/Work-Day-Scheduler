//initalizing global variables
var currentDateObj = moment();
$("#currentDay").text(currentDateObj.format("dddd MMMM YYYY"));

var schedule = {
  dateTime: currentDateObj.format("dddd MMMM YYYY"),
  task: {
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
  },
};

//when save button is clicked we send schedule to local storage
$(".saveBtn").click(function () {
  //debugger;
  let time = $(this).parent().attr("id");
  let task = $("#" + time).children()[1].value;

  time = parseInt(time.replace("hour-", ""));

  schedule.task[time] = task;

  updateLocalStorage();
});

//This updates local storage
function updateLocalStorage() {
  localStorage.clear();
  localStorage.setItem("schedule", JSON.stringify(schedule));
}

//This updates checks local storage data with current date and updates UI
function checkDateAndTime() {
  localStorageSchedule = JSON.parse(localStorage.getItem("schedule"));

  if (!localStorageSchedule) {
    updateLocalStorage();
  } else {
    schedule = localStorageSchedule;
  }

  if (schedule.dateTime == currentDateObj.format("dddd MMMM YYYY")) {
    let presentHour = parseInt(currentDateObj.format("H"));

    for (i = 9; i <= 17; i++) {
      if (i == presentHour) {
        $("#hour-" + i).addClass("present");
      } else if (i < presentHour) {
        $("#hour-" + i).addClass("past");
      } else if (i > presentHour) {
        $("#hour-" + i).addClass("future");
      }

      $("#hour-" + i)
        .children()[1]
        .append(schedule.task[i]);
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
