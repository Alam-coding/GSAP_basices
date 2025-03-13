gsap.from('.page .box',{
scale:0,
opacity:0,
duration:1,
  scrollTrigger:{
    trigger:'.page .box',
    start:'top 80%',
    end:'top 20%',
    scrub:5,
    markers:true,
    pin:true,
  }
});