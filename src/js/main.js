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

  let position = $(window).scrollTop() + "px";

  $(window).on('scroll', function() {
    let scroll = $(window).scrollTop() + "px";
    const scrollBtn = document.getElementById('scroll-btn');
    const width = $(window).width();

    if (scroll < position && width < 760) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
    position = scroll;
  });

  
//   let position = window.pageYOffset;

//   window.addEventListener('scroll', () => { 

//   let scroll = window.pageYOffset; 
//   const scrollBtn = document.getElementById('scroll-btn');
  
//   scroll < position ? scrollBtn.style.display = 'block' : scrollBtn.style.display = 'none';

//   position = scroll;

// });


});

