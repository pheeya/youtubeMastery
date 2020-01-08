// Set the date we're counting down to
var countDownDate = new Date().setHours(24)
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").getElementsByClassName("holder")[0].innerHTML=days;
  document.getElementById("hours").getElementsByClassName("holder")[0].innerHTML=hours;
  document.getElementById("minutes").getElementsByClassName("holder")[0].innerHTML=minutes;
  document.getElementById("seconds").getElementsByClassName("holder")[0].innerHTML=seconds;


  // If the count down is finished, write some text
  if (distance < 0) {
    countDownDate = new Date().setHours(24);
  }
}, 0.02);