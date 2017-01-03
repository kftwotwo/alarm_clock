$(document).ready(function(){
  $('#pretty-time').text(moment().format('h:mm a'));
  $('#date').text(moment().format('MMM Do YYYY'))
  $('#setted').text(moment().startOf('').fromNow('#set-alarm'))
});
