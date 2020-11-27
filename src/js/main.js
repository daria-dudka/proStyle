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

});
