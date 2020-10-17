// Insert Date
var date = moment().format("LLLL");
console.log(Date);
document.getElementById("currentDay").textContent = date;

function saveAppt() {
  $("button").click(function () {
    var appt = $.trim($("#appointment").val());
    if (appt != "") {
      localStorage.setItem("time", appt);
      console.log(appt);
    }
  });

  function restore() {
    var oldappt = localStorage.getItem("appt");
    if (appt != null)
      document.getElementById("savedAppt").innerHTML = "Don't Forget" + oldappt;
    console.log(oldappt);
  }

  //save info in local Storage
  //on refresh of page , retrieve and print local storage
}
