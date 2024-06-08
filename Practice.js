//timeline used for the animation line wise one after one
// stagger  0.1 seconds between when each ".box" element starts animating
// repeat used to animate the object to its place again -1
//yoyo value 'true' is used to to ya object ko return bhi lakar jayaga
// Scrub is used to start animation on scrolleTrigger basis on somoth transition

// properties used in the scrollTrigger Animation
// transform, 
// trigger = which page you want to trigger ,
//  scroller is always 'body' 
//  markers to show the markers in the page, 
// start ,end pin ,scrub



var animation = gsap.timeline();

animation.from("h3", {
  duration: 1,
  y: -40,
  opacity: 0,
});

animation.from("li", {
  duration: 1,
  y: -30,
  opacity: 0,
  stagger: 0.1,
});
animation.to(".section h1", {
  transform: "translateX(-120%)",
  scale:0.3,
  scrollTrigger: {
    trigger: ".section",
    scroller: "body",
    markers: true,
    start: "top 0%",
    pin: true,
    scrub: 5,
  },
});
