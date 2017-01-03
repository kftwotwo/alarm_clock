(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// function Alarm(currentTime) {
//   this.time = currentTime;
// }
//
// Alarm.prototype.set = function() {
//
// };
//
// exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){

var Alarm = require('./../js/script.js').alarmModule;


var analogTime = null,
        date = null,
        time = null,
        alarms = [];

var update = function() {
  time = moment();
  date.text(time.format('dddd, MMMM Do YYYY'));
  analogTime.text(time.format( 'h:mm:ss a'));
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

},{"./../js/script.js":1}]},{},[2]);
