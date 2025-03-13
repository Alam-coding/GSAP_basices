var main = document.querySelector('#main')
var cursor = document.querySelector('.cursor')
var imgdiv = document.querySelector('.image')
let img = document.querySelector('.image img')
var cursorin = document.querySelector('.cursorinner')
main.addEventListener('mousemove', function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.1,  
    })
})
imgdiv.addEventListener('mouseenter', function () {  
    cursor.innerHTML = 'view'
    img.style.scale='1.1'
    gsap.to(cursor,{
    scale:4,
    backgroundColor: '#ffffff9A',
   })
})
imgdiv.addEventListener('mouseleave', function () {  
    cursor.innerHTML = ''
    img.style.scale='1'
    gsap.to(cursor,{
     scale:1,
     backgroundColor: '',
    })
 })
 

