var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")

document.addEventListener('mousemove', function(e){
    crsr.style.left = e.x + 30 +"px"
    crsr.style.top = e.y+"px"
    blur.style.left = e.x - 200 +"px"
    blur.style.top = e.y- 200 +"px"
})

gsap.to("#nav", {
    backgroundColor :"#000",
    height:"120px",
    duration:2,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -15%",
        scrub: 1
    }
    
}) 

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scrollerL:"body",
        start:"top -40%",
        end:"top -100%",
        scrub:4
    }
})

var navh4 = document.querySelectorAll('#nav')
navh4.forEach(function(e){
    e.addEventListener('mouseenter', function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    e.addEventListener('mouseleave', function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})


//This line waits for the HTML content of the page to be fully loaded before executing the JavaScript code inside the function.
document.addEventListener("DOMContentLoaded", function() {

    // creates an array containing the IDs of the h4 tags you want to rotate
    const texts = ["rotatingText", "rotatingText2", "rotatingText3", "rotatingText4", "rotatingText5", "rotatingText6"];

    // variable keeps track of which h4 tag to show. It starts at 1 to initially show the second h4 tag
    let currentIndex = 1;

    // This function is responsible for hiding all h4 tags and showing the current one
    function rotateText() {
        texts.forEach(text => {
            document.getElementById(text).classList.add("hidden");
        });

        // It removes the hidden class from the current h4 tag, making it visible
        document.getElementById(texts[currentIndex]).classList.remove("hidden");

        currentIndex = (currentIndex + 1) % texts.length;
    }

    setInterval(rotateText, 2500);

});

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end: "top 70%",
        scrub: 3
    }
})