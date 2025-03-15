function breaktext(){
    var h1 = document.querySelector("h1")
    var h1text = h1.textContent
    
    var splittedtext = h1text.split("")
    var halfValue = splittedtext.length/2

    var cullter = ""

    splittedtext.forEach(function (elem,idx){
        if(idx<halfValue){
            cullter += `<span class="A" >${elem}</span>`
        } else{
            cullter += `<span class="b" >${elem}</span>`
        }
    })
    h1.innerHTML = cullter
}

  
breaktext()

gsap.from("h1 .A",{
    y:50,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.12,
})

gsap.from("h1 .b",{
    y:50,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:-0.15,
})