gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".wrapper", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".wrapper").style.transform
    ? "transform"
    : "fixed"*/
});


gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        markers: true,
        start: "50% 50%",
        end: "100% 50%",
        pin: true,
        scrub: 2,
}});
tl.to(".page1 .top", {
    top: "-50%"
},'a')
tl.to(".page1 .bottom", {
    bottom: "-50%"
},'a')
tl.to(".page1 .top h1", {
    top: "70%"
},'a')
tl.to(".page1 .bottom h1", {
    bottom: "70%"
},'a')