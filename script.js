window.addEventListener('DOMContentLoaded', () => {
  
  const buttons = document.querySelectorAll('.button-circle');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(button => button.classList.remove('active'));
      this.classList.add('active');
      colorTextAndButton(this);
      setImage(this);
    });
  });
  
  function colorTextAndButton(param) {
    const text = document.querySelector('.price');
    const button = document.querySelector('.button');
    const color = param.dataset.color;
    text.style.color = color;
    button.style.background = color;
    document.body.style.background = color;
  }
  
  function setImage(param) {
    const image = document.querySelector('.image');
    const dataImage = param.dataset.image;
    image.setAttribute('src', 'images/' + dataImage);
  }
  
});