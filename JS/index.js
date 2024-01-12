// * Route - Frontend
// * Bootstrap Exam
// * Bootstrap Portfolio
// * Bootstrap + HTML + CSS
// * 10/01/2023
// * Mostafa Badr >> LinkedIn: https://www.linkedin.com/in/mostafa-badr-610b64208
// * Mostafa Badr >> GitHub: https://github.com/MostafaBadr7

//................................. Global varaibles ...............................
//.................................. Login validation ..............................
//................................ To show validation msg t user ....................

function alertMsg(msg) {
  warningBoxMsg.innerHTML = msg;
  warningBox.classList.add("display");
  setTimeout(() => {
    warningBox.classList.remove("display");
    warningBoxMsg.innerHTML = "";
  }, "3000");
}

const tabEl = document.querySelector('button[data-bs-toggle="tab"]');
tabEl.addEventListener("shown.bs.tab", (event) => {
  event.target; // newly activated tab
  event.relatedTarget; // previous active tab
});
const myCarouselEl = document.querySelector("#myCarousel");
const carousel = bootstrap.Carousel.getInstance(myCarouselEl); // Retrieve a Carousel instance

myCarouselEl.addEventListener("slid.bs.carousel", (event) => {
  carousel.to("2"); // Will slide to the slide 2 as soon as the transition to slide 1 is finished
});

carousel.to("1"); // Will start sliding to the slide 1 and returns to the caller
carousel.to("2"); // !! Will be ignored, as the transition to the slide 1 is not finished !!
