$(document).ready(function(){
  $('#characterLeft').text('200 characters left');
  $('#message').keydown(function() {
    var max = 200;
    var len = $(this).val().length;
    if (len >= max) {
      $('#characterLeft').text('You have reached the message limit.');
      $('#characterLeft').addClass('red');
      $('#btnSubmit').addClass('disabled');
    }
    else {
      var ch = max - len;
      $('#characterLeft').text(ch + ' characters left');
      $('btnSubmit').removeClass('disabled');
      $('#characterLeft').removeClass('red');
    }
  });
  $('#envelope').click(function(){
    $("form-area").show() /*need to change the display here somehow*/
  });
});
