
//page 1 gsap
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        // markers: true,
        start: "50% 50%",
        end: "150% 50%",
        pin: true,
        scrub: 1,
}});
tl.to(".page1 .top", {
    top: "-50%",
    // opacity: 0
},'a')
.to(".page1 .bottom", {
  bottom: "-50%",
  // opacity: 0
  
},'a')
.to(".page1 .top h1", {
    y: "45%",
    // opacity: 0
},'a')
.to(".page1 .bottom h1", {
    y: "-45%",
    // opacity: 0
}, 'a') 

gsap.from(".page1 .center img", {
    opacity: 0,
    scale: 0,
    duration: 4,
    scrollTrigger: {
        trigger: ".page1 .top h1",
        // markers: true,
        start: "40% 50%",
        end: "160% 50%",
        scrub: 3
    }
})

//about section
var t2 = gsap.timeline();
t2.from(".about h1", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".marquee-container-2",
    // markers: true,
    start: "100% 30%",
    end: "70% 50%",
    scrub: 2,
  },
});
t2.from(".about #p1", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".marquee-container-2",
    //   markers: true,
      start: "120% 20%",
      end: "70% 50%",
      scrub: 2,
    },
  });
  t2.from(".about #p2", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".marquee-container-2",
    //   markers: true,
      start: "140% 0%",
      end: "70% 50%",
      scrub: 2,
    },
  });
  t2.from(".about #p3", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".marquee-container-2",
    //   markers: true,
      start: "160% -20%",
      end: "70% 50%",
      scrub: 2,
    },
  });
 


//page4
gsap.from(".page4 .heading2 h1", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page3 .about #p3",
    //   markers: true,
      start: "70% 50%",
      end: "50% 50%",
      scrub: 2,
    },
  });

gsap.from(".page4 .skills .sub-heading1, #i1, #i2, #i3, #i4, #i5, #i6 ", {
    y: 100,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".page3 .about #p3",
    //   markers: true,
      start: "110% 10%",
      scrub: 3,
    },
  });

  gsap.from(".page4 .skills .sub-heading2, #i7, #i8, #i9, #i10, #i11", {
    y: 100,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".page3 .about #p3",
    //   markers: true,
      start: "130% -10%",
      scrub: 3,
    },
  });

  gsap.from(".page4 .skills .sub-heading3, #i12, #i13", {
    y: 100,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".page3 .about #p3",
    //   markers: true,
      start: "150% -30%",
      scrub: 3,
    },
  });

//cursor

// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//     let x = e.pageX;
//     let y = e.pageY;

//     cursor.style.top = y + "px";
//     cursor.style.left = x + "px";
//     cursor.style.display = "block";
// });

// document.addEventListener("mouseout", () => {
//     cursor.style.display = "none";

// })

//swiper
var mySwiper = new Swiper('.swiper-container', {
  // loop: true,
  speed: 1000,
  autoplay: {
      delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: "10",
      stretch: 100,
      depth: 200,
      modifier: 1,
      slideShadows: false,
  },


})

//swiper animation

gsap.from(".page5 h1, h2, .ss1, .ss2, .ss3, .ss4, .ss5", {
    y: 100,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".page4 .phase2",
    //   markers: true,
      start: "100% 20%",
      end: "100% 100%",
      scrub: 3,
    },
  });