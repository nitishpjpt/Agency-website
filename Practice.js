var animation = gsap.timeline();
//timeline used for the animation line wise one after one
// stagger  0.1 seconds between when each ".box" element starts animating
// repeat used to animate the object to its place again -1
//yoyo value 'true' is used to to ya object ko return bhi lakar jayaga
// Scrub is used to start animation on scrolleTrigger basis

animation.from("h2", {
     y:-30,
     duration:1,
     delay:0.3,
     opacity:0
})
animation.from('.navbar' , {
     y:-30,
     duration:0.1,
     opacity:0,
});
animation.from('li' , {
     y:-30,
     duration:1,
     opacity:0,
     stagger:0.1
});
animation.from('h1' , {
     y:-30,
     duration:1,
     opacity:0,
     scale:0.3,
     color:'red'
})
animation.from('.page-2', {
     y:-30,
     duration:1.2,
     delay:1,
     scale:0.3,
     scrollTrigger:{
          trigger: '.page-2 .box',
          scroller:"body",
          markers:true,
          start: "top 60%",
          end: "top 30%",
         
     }
})