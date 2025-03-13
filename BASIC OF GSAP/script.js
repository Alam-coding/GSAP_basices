gsap.from('.box',{
    x:1000,
    duration:2,
    Delay:1,
    rotation:360,
    backgroundColor:"red",
    borderRadius:"50%",
    scale:2,
})
gsap.from('.box1',{
    x:2000,
    y:1000,
    duration:2,
    Delay:1,
    rotation:360,
})
 gsap.from('h1',{
     opacity:0,
     duration:1,
     y:30, 
     Delay:1,
     stagger:1,
   
 })
gsap.to('.box2',{
    x:1200,
    duration:1,
    delay:1,
    rotate:360,
    repeat:-1,
    yoyo:true,

})
  
gsap.to('.boxwa1',{
    x:1000,
    rotate:360,
    duration:1.5,
    delay:1,
})
gsap.to('.boxwa2',{
    x:1000,
   backgroundColor:"red",
    duration:1.5,
    delay:2.5,
})
gsap.to('.boxwa3',{
    x:1000,
    scale:0.4,
    borderRadius:"50%",
    duration:1.5,
    delay:4,
})
 var tal = gsap.timeline()
 tal.from('.boxwa1',{  
     x:1640,
     rotate:360,
     duration:1.5,
     repeat:-1,
     yoyo:true,
})
 tal.to('.boxwa2',{  
    x:1640,
    backgroundColor:"red",
    duration:1.5,
    repeat:-1,
    
 })
 tal.from('.boxwa3',{
     x:1600,
     scale:1.1,
     borderRadius:"50%",
    duration:1.5,
    repeat:-1,
     
 })  
let nav = gsap.timeline()
nav.from('h1',{
     y:-20,
     opacity:0,
     duration:1,
     Delay:0.5,

})
nav.from('h4',{
      y:-20,
     opacity:0,
     duration:1,
     stagger:0.5,

})