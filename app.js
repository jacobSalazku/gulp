let title = document.querySelector('.h1');
let color = "black";
   
title.addEventListener('click',function(){

    if (color === 'green' ||color === 'black' ) {
        title.style.color = 'red';
        color = 'red';
      } else {
        title.style.color = 'green';
        color = 'green';
      }
})