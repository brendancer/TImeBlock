//Insert Date
var date = moment().format("LLLL");
console.log(Date);
document.getElementById("currentDay").textContent = date;

// get appointment text entered into textarea and connect it to time id

var savebtn = document.getElementsByClassName("sbtn");
savebtn.addEventListener("click", saveAppt);
function saveAppt() {
  var appt = this.appointment.value;
  console.log(appt);
  var id = document.getElementsByClassName(appointment).parentElement.id;
  time = id;
  console.log(time);
  //add to local storage
  if (appt != "") {
    localStorage.setItem(time, appt);
    console.log(appt);
  }
}

//load the saved data from local storage

function restore() {
  var oldappt = localStorage.getItem("appt");
  if (appt != null)
    document.getElementById("savedAppt").innerHTML = "Don't Forget" + oldappt;
  console.log(oldappt);
}

//save info in local Storage
//on refresh of page , retrieve and print local storage
