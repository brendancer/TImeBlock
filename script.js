//Insert Date
var date = moment().format("LLLL");
console.log(Date);
document.getElementById("currentDay").textContent = date;

//determining if timeblock is past present or future-------------------------------------------------------------------

//iterating through the timeblocks
$(".time-block").each(function () {
  // splitting the id so that an integer can be attached to the id
  var timeblockVal = parseInt($(this).attr("id").split("-")[1]);

  //obtaining current time from moment
  var currentTime = moment().hours();

  console.log(timeblockVal);
  console.log(currentTime);

  //comparing the timeblock hour to the current hour
  if (timeblockVal < currentTime) {
    ppf = "past";
    $(this).addClass("past").removeClass("present").removeClass("future");
    console.log(ppf);
  } else if (timeblockVal > currentTime) {
    ppf = "future";
    $(this).addClass("future").removeClass("present").removeClass("past");

    console.log(ppf);
  } else {
    ppf = "present";
    $(this).addClass("present").removeClass("past").removeClass("future");
    console.log(ppf);
  }
});

// get appointment text entered into textarea and connect it to time id

$(".saveBtn").on("click", function () {
  var appt = $(this).siblings(".appointment").val();
  console.log(appt);
  var time = $(this).parent().attr("id");

  console.log(time);
  //add to local storage
  if (appt != "") {
    localStorage.setItem(time, appt);
    console.log(appt);
  }
});

//load saved data back from local storage back into new timeblocks

$("#hour-8 .appointment").val(localStorage.getItem("hour-8"));
$("#hour-9 .appointment").val(localStorage.getItem("hour-9"));
$("#hour-10 .appointment").val(localStorage.getItem("hour-10"));
$("#hour-11 .appointment").val(localStorage.getItem("hour-11"));
$("#hour-12 .appointment").val(localStorage.getItem("hour-12"));
$("#hour-13 .appointment").val(localStorage.getItem("hour-13"));
$("#hour-14 .appointment").val(localStorage.getItem("hour-14"));
$("#hour-15 .appointment").val(localStorage.getItem("hour-15"));
$("#hour-16 .appointment").val(localStorage.getItem("hour-16"));
$("#hour-17 .appointment").val(localStorage.getItem("hour-17"));

//clear button
$("#clrBtn").on("click", function () {
  window.localStorage.clear();
  window.location.reload();
});
