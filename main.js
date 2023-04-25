const d = document;


d.addEventListener("DOMContentLoaded", () => {

  const greetContainer = () => {
    const greetContent = d.querySelector("main");
    greetContent.innerHTML = `
    <div class="container greetings-container">
    <div class="content content-greetings">
      <img src="./images/illustration-thank-you.svg" alt="greetings">
      <div class="score-selected">
        <p id="score-text">You selected ${ratingNumber} out of 5</p>
      </div>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating.<br/>
        if you ever need more support, don't hesitate to <br/>
        get in touch!
      </p>
    </div>
  </div>
    `
  }

  let ratingNumber = null;
  let ratingBtns = document.querySelectorAll(".ratingBtns");
  ratingBtns.forEach((element) => {
    element.addEventListener("click", function (e) {
      let addRating = document.querySelector(".active");
      if (!this.classList.contains("active")) {
        this.classList.add("active");
        ratingNumber = [parseInt(e.target.id)];
      }
      if (addRating) {
        addRating.classList.remove("active");
      }
    });
  });

  const greetButton = document.getElementById("greetButton");
  if (greetButton) {
    greetButton.addEventListener("click", (e) => {
      if (ratingNumber) {
        greetContainer();
        e.preventDefault();
      } else {
        e.preventDefault();
      }
    });
  }
});
