$(document).ready(function(){
  $('#pretty-time').text(moment().format('h:mm a'));
  $('#date').text(moment().format('MMM Do YYYY'));
  $('#setted').text(moment());

$("#alarmset").click(function() {
  var hours = $('#hours').val();
  var minutes = $('#tens-mins').val() + $('#single-mins').val();
  var timeAtSet = moment().set({'hour': hours});
});
});
// minute
