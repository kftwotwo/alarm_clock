var Alarm = require('./../js/script.js').alarmModule;

var analogTime = null,
        date = null,
        time = null,
        alarms = [];

var update = function() {
  time = moment();
  date.text(time.format('dddd, MMMM Do YYYY'));
  analogTime.text(time.format( 'h:mm:ss a'));
  alarms.forEach(function(alarm,index) {
    console.log("stuff going on: " + alarm._d);
    if (alarm.get('hours') == time.get('hours') && (alarm.get('minutes') == time.get('minutes'))) {
      alarms.splice(index,1);
      console.log("hello");
    }
  });
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
    alarms.push(timeAtSet);
    $('#setted').text(timeAtSet.format( 'h:mm a'));
    console.log(alarms);

  });
});
