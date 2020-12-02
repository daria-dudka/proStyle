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


  
  let position = window.pageYOffset;

  window.addEventListener('scroll', () => { 

  let scroll = window.pageYOffset; 
  const scrollBtn = document.getElementById('scroll-btn');
  
  scroll < position && window.matchMedia("(max-width: 760px)").matches ? scrollBtn.style.display = 'block' : scrollBtn.style.display = 'none';

  position = scroll;

  });


});

