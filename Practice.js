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

//cursor animation
const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
const img = document.querySelector("#img");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

img.addEventListener("mousemove", () => {
  cursor.innerHTML = `View More`;
  gsap.to(cursor, {
    scale: 2,
    backgroundColor: "rgba(255, 0, 0, 0.347)",
  });
});

img.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fffff8",
  });
});
