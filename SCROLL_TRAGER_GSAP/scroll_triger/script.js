gsap.from('.page1 .box',{
    scale: 0,
    Delay: 1,
    duration: 2,
    rotate: 360,
})
gsap.from('.page2 h1',{
    opacity: 0,
    x: 500,
    duration: 2,
    scrollTrigger: {
        trigger: '.page2 h1',
        scroller:'body',
        markers: true,
        start: 'top 50%',
    }
})
gsap.from('.page2 h2',{
    opacity: 0,
    x: -500,
    duration: 2,
    scrollTrigger: {
        trigger: '.page2 h1',
        scroller:'body',
        markers: true,
        start: 'top 50%',
    }
})
gsap.from('.page2 .h1',{
    opacity:0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: '.page2 h1',
        scroller:'body',
        markers: true,
        start: 'top 50%',
    }
})
gsap.from('.page2 .h2',{
    opacity:0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: '.page2 h2',
        scroller:'body',
        markers: true,
        start: 'top 50%',
    }
})
gsap.from('.page2 .box',{
    opacity:0,
    duration: 2,
    rotate: 360,
    yoyo: true,
    repeat: 2,
x: 500,

    scrollTrigger: {
        trigger: '.page2 .box',
        scroller:'body',
        markers: true,
        start: 'top 50%',
    }
})
gsap.from('.page3 .box',{
    opacity:0,
    scale: 0,
    duration: 1,
    rotate: 720,
    scrollTrigger: {
        trigger: '.page3 .box',
        scroller:'body',
        markers: true,
        start: 'top 60%',

        scrub: ture,
    }
})