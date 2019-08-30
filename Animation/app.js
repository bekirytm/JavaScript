

    // window.onload = function() {
    //     let start = Date.now();
    
    //     let timer = setInterval(function() {
    //       let timePassed = Date.now() - start;
    
    //       train.style.left = timePassed / 5 + 'px';
    
    //       if (timePassed > 6300) clearInterval(timer);
    
    //     }, 20);
        
    //   }

const reload = document.querySelector("#yenile");
reload.addEventListener("click",reloading);

function reloading(){
  window.location.reload();
}




    window.onload = function() {
        let start = Date.now();
        let sayi = 0;

        let timer = setInterval(function() {
          let timePassed = Date.now() - start;
          console.log(timePassed);
          train.style.left = timePassed / 5 + 'px';


          if (timePassed > 7000){
            clearInterval(timer);
            train.setAttribute("style","display:none");
            train2.setAttribute("style","display:block");
            timePassed = 0;
    
            // train.style.right = timePassed / 5 + 'px';
            let second = setInterval(function(){
              timePassed -= 20;
              console.log(timePassed);
              train2.style.left = timePassed / 5 + 'px';
              if(timePassed < -7000){
                clearInterval(second);
              }
            },20);

            clearInterval(timer);
          }
          
    
        }, 20);
        
      }









