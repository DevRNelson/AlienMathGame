function movement(){

    const box1 = document.querySelector('#box1');
    const box2 = document.querySelector('#box2');
    const box3 = document.querySelector('#box3');
    const box4 = document.querySelector('#box4');
   
  
    let move = 0;
  
    setInterval(() => {
      move+=10;
      box1.style.marginTop = `${move}px`;
    }, 1000); 
  
    setInterval(() => {
      move+=5;
      box2.style.marginTop = `${move}px`;
    }, 2000); 
  
    setInterval(() => {
      move+=10;
      box3.style.marginTop = `${move}px`;
    }, 2500); 
  
    setInterval(() => {
      move+=5;
      box4.style.marginTop = `${move}px`;
    }, 3000);  
  
  
  
    let keymove=0;
    let i = 10
    const cannon = document.querySelector('#answer');
    const bullet = document.querySelector('#bullet');
    let keycode=i || i.keycode;
  
   window.addEventListener('keydown',function(event)
   {
  
       
  
       console.log(event);
      
       switch (event.key)
       {
           case 'ArrowLeft' :
            keymove = keymove - 15;
            cannon.style.marginLeft = `${keymove}px`;
                
           break;
           case 'ArrowRight' : 
           keymove = keymove + 15;
           cannon.style.marginLeft = `${keymove}px`;
                
        }
    });
  
  }
  
  movement();

function fire(event) {
    if(event.key === "ArrowUp"){
        event.preventDefault()
        shoot()
    }
}

window.addEventListener("keydown", fire)


  function shoot(){
    let shoot = createBullet()
    bulletfly(bullet)

  }


  function createBullet(){
      let xPosition = parseInt(window.getComputedStyle(shooter).getPropertyValue('left'));
      let yPosition = parseInt(window.getComputedStyle(shooter).getPropertyValue('top'));
      let newBullet = document.createElement(`img`);
      bullet.src = 'PICS/laser.png';
      newBullet.classlist.add('bullet');
      newBullet.style.left  = `${xPosition}px`;
      newBullet.style.top  = `${yPosition - 10}px`;
      return newBullet
  }


  function bulletfly(bullet) {
      let bulletinterval = setinterval(()=> {
          let xPosition = parseInt(bullet.style.up)
          if (yPosition === 340) {
              bullet.remove()
          } else {
              bullet.style.up = `${yPosition + 5}px`
          }
      }, 10) 
  }


  