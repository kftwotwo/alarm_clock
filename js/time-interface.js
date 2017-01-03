var Alarm = require('./../js/script.js').alarmModule;


var analogTime = null,
        date = null,
        time = null,
        alarms = [];

var update = function() {
  time = moment();
  date.html(time.format('dddd, MMMM Do YYYY'));
  analogTime.html(time.format( 'h:mm:ss a'));
};

$(document).ready(function(){

  analogTime = $('#pretty-time');
   date = $('#date');
   update();
   setInterval(update, 1000);


  $('#alarmset').submit(function(event) {
    event.preventDefault();
    var hours = $('#hours').val();
    var minutes = $('#tens-mins').val() + $('#single-mins').val();
    var timeAtSet = moment().set({'hour': hours, 'minute': minutes});
    $('#setted').text(timeAtSet);
  });
});
