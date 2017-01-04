(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var analogTime = null,
        date = null,
        time = null,
        audioElement= null,
        alarms = [];

var update = function() {
  time = moment();
  date.text(time.format('dddd, MMMM Do YYYY'));
  analogTime.text(time.format( 'h:mm:ss a'));
  alarms.forEach(function(alarm,index) {
    if (alarm.get('hours') == time.get('hours') && (alarm.get('minutes') == time.get('minutes'))) {
      alarms.splice(index,1);
      playSound();
    }
  });
};
function playSound(){
  audioElement;
  if(!audioElement) {
    audioElement = document.createElement('audio');
    audioElement.innerHTML = '<source src="' + 'Ringing-clock.mp3'+ '" type="audio/mpeg" />'
  }
  audioElement.play();
}

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

  });
});

},{}]},{},[1]);
