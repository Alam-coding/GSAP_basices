var menu = document.querySelector('i')
var close = document.querySelector('.full i')

var time =gsap.timeline()
time.to(".full",{
    right:"0",
    duration:0.8,
})
time.from('.full h4',{
    x:150,
    duration:0.1,
    stagger:0.2,
    opacity:0,
    scurb:true,
})
time.from('.full i',{
    opacity:0
})
time.pause()

menu.addEventListener("click",function(){
     time.play()
    
})
close.addEventListener("click",function(){
       time.reverse()
})