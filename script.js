
function loadingAnimation(){
    var t1 = gsap.timeline();
    t1.from(".line h1 , .line h2", {
      y: 150,
      stagger: 0.2,
      duration: 0.6,
      delay: 0.5,
    });
    t1.from("#line1-part1, .line h2", {
      opacity: 0,
      onStart: function () {
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function () {
          if (grow < 100) {
            h5timer.innerHTML = grow++;
          } else {
            h5timer.innerHTML = grow;
          }
        }, 35);
      },
    });
    t1.to("#loader", {
      opacity: 0,
      duration: 0.2,
      delay: 4,
    });
    t1.from("#page1",{
        delay:0.2,
        y:1600,
        opacity:0,
        duration:0.5,
        ease:Power4
    })
    t1.to("#loader",{
        display:"none"
    });
    t1.from(".hero h1, #hero3 h2 , #hero3 h3  " , {
      y:136,
      stagger: 0.2,
      duration: 0.6,
      delay: 0.5,
    })
    


}
loadingAnimation()


function cursorAnimation(){
  document.addEventListener("mousemove",function(dets){
    gsap.to("#curs",{
      left:dets.x,
      top:dets.y
    })
  })
  
  
  Shery.makeMagnet("#nav-part2 h4" , {
   
  });
}
cursorAnimation()
   



























