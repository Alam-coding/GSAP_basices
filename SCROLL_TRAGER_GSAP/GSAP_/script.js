gsap.to("#page2 h1",{
      scale:0.1,
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:'body',
        markers:true,
        start:'top 0%',
        end:'top -150%',
        scrub:true,
        pin:true,
    }
})