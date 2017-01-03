$(document).ready(function(){
  $('#time').text(moment());
  $('#date').text(moment().format('MMM Do YYYY'))
});
