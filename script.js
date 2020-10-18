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
  //var currentTime = moment().hours();
  currentTime = 13;
  console.log(timeblockVal);
  console.log(currentTime);

  //comparing the timeblock hour to the current hour
  if (timeblockVal < currentTime) {
    alert("past");
    $(".time-block").css({ backgroundColor: "tan" });
  } else if (timeblockVal > currentTime) {
    $(".time-block").css({ backgroundColor: "rosybrown" });
    alert("future");
  } else {
    alert("present");
    $(".time-block").css({ backgroundColor: "lightseagreen" });
  }
});

// get appointment text entered into textarea and connect it to time id

$(".sbtn").on("click", function () {
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

$("#hour-1 .appointment").val(localStorage.getItem("hour-8"));
$("#hour-2 .appointment").val(localStorage.getItem("hour-9"));
$("#hour-3 .appointment").val(localStorage.getItem("hour-10"));
$("#hour-4 .appointment").val(localStorage.getItem("hour-11"));
$("#hour-5 .appointment").val(localStorage.getItem("hour-12"));
$("#hour-6 .appointment").val(localStorage.getItem("hour-13"));
$("#hour-7 .appointment").val(localStorage.getItem("hour-14"));
$("#hour-8 .appointment").val(localStorage.getItem("hour-15"));
$("#hour-9 .appointment").val(localStorage.getItem("hour-16"));
$("#hour-10 .appointment").val(localStorage.getItem("hour-17"));

//Assign readable time id to each timeblocks
