let con =  document.querySelector('.container')
   let icon =  document.querySelector('i')

   con.addEventListener('dblclick',function(){
    icon.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'
    icon.style.opacity = 0.8
    console.log('hello')
    setTimeout(() => {
     icon.style.opacity = 0
    }, 900);
    setTimeout(() => {
      icon.style.transform = 'translate(-50%,-50%) scale(0) rotate(-50deg)'
    }, 1200);
   })