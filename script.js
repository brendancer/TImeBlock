//Insert Date
var date = moment().format("LLLL");
console.log(Date);
document.getElementById("currentDay").textContent = date;

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

// //load the saved data from local storage

// function restore() {
//   var oldappt = localStorage.getItem("appt");
//   if (appt != null)
//     document.getElementById("savedAppt").innerHTML = "Don't Forget" + oldappt;
//   console.log(oldappt);
// }
