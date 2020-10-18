//Insert Date
var date = moment().format("LLLL");
console.log(Date);
document.getElementById("currentDay").textContent = date;

//attach a time value to each timebox in order to compare with current time.
var timeblocks = document.querySelectorAll(".time-block");
console.log(timeblocks);

var tbTime = moment()
  .startOf("day")
  .add([1] + 8, "hours")
  .format("LLLL");

console.log(tbTime);

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

$("#hour1 .appointment").val(localStorage.getItem("hour8"));
$("#hour2 .appointment").val(localStorage.getItem("hour9"));
$("#hour3 .appointment").val(localStorage.getItem("hour10"));
$("#hour4 .appointment").val(localStorage.getItem("hour11"));
$("#hour5 .appointment").val(localStorage.getItem("hour12"));
$("#hour6 .appointment").val(localStorage.getItem("hour13"));
$("#hour7 .appointment").val(localStorage.getItem("hour14"));
$("#hour8 .appointment").val(localStorage.getItem("hour15"));
$("#hour9 .appointment").val(localStorage.getItem("hour16"));
$("#hour10 .appointment").val(localStorage.getItem("hour17"));

//Assign readable time id to each timeblocks
