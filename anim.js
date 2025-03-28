const width = window.innerWidth;
const height = window.innerHeight;
console.log(`Langas: ${width}x${height}`);
window.addEventListener("scroll", () => {
  const yOffset = window.scrollY / 5;
  console.log(yOffset);

  // LG ekranui
  if (width > 992) {
    if (yOffset > 135) {
      document.querySelector(".button-2").style.display = "block";

      const x = (yOffset - 135) * 2 + 62;
      if (x <= 130) {
        document.querySelector(".button-2").style.top = `${x}px`;
      } else {
        document.querySelector(".button-2").style.top = "130px";
      }
    } else {
      document.querySelector(".button-2").style.display = "none";
    }
    document.querySelector(".s1img").style.left = `${yOffset / 1.5 - 250}px`;
    document.querySelector(".s2img").style.left = `${-(yOffset / 1.5) + 100}px`;
    document.querySelector(".s4-img2").style.left = `${(yOffset - 390) / 0.7}px`;
    document.querySelector(".scrollBg").style.backgroundPosition = `calc(50% + ${50 - yOffset}px) 50%`;
    // document.querySelector(".s4-img1").style.transform = `rotate(${(yOffset - 450) / 7}deg)`;
    // document.querySelector(".s4-img2").style.paddingLeft = `${200-(yOffset - 400)}px`;
  }

  // SM ekranui
  else {
    // if (yOffset > 107) {
    //   document.querySelector(".button-2").style.display = "block";
    //   const x = (yOffset - 107) * 2 + 52;
    //   if (x <= 120) {
    //     document.querySelector(".button-2").style.top = `${x}px`;
    //   } else {
    //     document.querySelector(".button-2").style.top = "120px";
    //   }
    // } else {
    //   document.querySelector(".button-2").style.display = "none";
    // }
    document.querySelector(".s1img").style.left = `${yOffset / 2 - 150}px`;
    document.querySelector(".s2img").style.left = `${-(yOffset / 2) + 100}px`;
    document.querySelector(".scrollBg").style.backgroundPosition = `calc(50% + ${-40 - yOffset}px) 50%`;
    document.querySelector(".s4-img2").style.left = `${(yOffset - 520) / 0.7}px`;
  }
});
