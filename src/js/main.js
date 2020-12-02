$(function() {

  $('input').styler();



  function toggle() {
    const formPhone = document.getElementById('form__phone');
    if(this.checked)
    formPhone.style.display = 'block';
    else
    formPhone.style.display = 'none'
  };
  document.getElementById('checkbox_phone').onchange = toggle
  ;


  
  $(window).on('mousewheel', function(event) {
    const scrollBtn = document.getElementById('scroll-btn');
    const width = $(window).width();
    if (event.originalEvent.wheelDelta >= 0 && width <= 760 ) {
      scrollBtn.style.display = 'block';
    }
    else {
      scrollBtn.style.display = 'none';
    }
    });

});

