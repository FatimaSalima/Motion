let btn =document.querySelector(".header-btn")
btn.addEventListener("click", () =>  {
    document.querySelector(".header-square")
        .style.display = "block"
})


let closeBtn = document.querySelector(".header-close-btn")
closeBtn.addEventListener("click", () =>{
    document.querySelector(".header-square")
        .style.display = "none"
})

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 360,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});