$(function() {

  $('input').styler();

  function toggle() {
    const formPhone = document.getElementById('form__phone');
    if(this.checked)
    formPhone.style.display = 'block';
    else
    formPhone.style.display = 'none'
      }
  document.getElementById('checkbox_phone').onchange = toggle;

  $(window).scroll(function (event) {
    const reservationBtn = document.getElementById('reservation-btn');
    const top = $(window).scrollTop();
     if(top >2000){
      reservationBtn.style.display = 'block';
     } else {
      reservationBtn.style.display = 'none'
     }
  });

});

