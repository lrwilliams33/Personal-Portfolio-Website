document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementsByClassName("collapse");

  function buttonCollapse () {
    // Remove active class and hide content for all buttons
    let allButtons = document.getElementsByClassName("collapse");
    for (let i = 0; i < allButtons.length; i++) {
      let button = allButtons[i];
      if (button != this) {
        button.classList.remove("active");
        let content = button.nextElementSibling;
        content.style.display = "none";
      }
      
    }

    // Toggle active class and show/hide content for the clicked button
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }

  btn[0].addEventListener("click", buttonCollapse);
  btn[1].addEventListener("click", buttonCollapse);
  btn[2].addEventListener("click", buttonCollapse);
});

function clearInput() {

  setTimeout(function () {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }, 1000);
}

function copyText(textToCopy) {
  navigator.clipboard.writeText(textToCopy)
}


document.addEventListener("DOMContentLoaded", () => {
  const scrollUp = document.querySelector(".scroll-up");
  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  const about = document.querySelector("#about-btn");
  const aboutSection = document.querySelector("#about-section");
  const aboutSectionPos = aboutSection.offsetTop;
  about.addEventListener("click", () => {
    window.scrollTo({
      top: aboutSectionPos - 100,
      left: 0,
      behavior: "smooth",
    });
  });

  const skills = document.querySelector("#skills-btn");
  const skillsSection = document.querySelector("#skills-section");
  const skillsSectionPos = skillsSection.offsetTop;
  skills.addEventListener("click", () => {
    window.scrollTo({
      top: skillsSectionPos - 100,
      left: 0,
      behavior: "smooth",
    });
  });

  const work = document.querySelector("#work-btn");
  const workSection = document.querySelector("#work-section");
  const workSectionPos = workSection.offsetTop;
  work.addEventListener("click", () => {
    window.scrollTo({
      top: workSectionPos - 100,
      left: 0,
      behavior: "smooth",
    });
  });

  const projects = document.querySelector("#projects-btn");
  const projectsSection = document.querySelector("#projects-section");
  const projectsSectionPos = projectsSection.offsetTop;
  projects.addEventListener("click", () => {
    window.scrollTo({
      top: projectsSectionPos - 100,
      left: 0,
      behavior: "smooth",
    });
  });

  const contact = document.querySelector("#contact-btn");
  const contactSection = document.querySelector("#contact-section");
  const contactSectionPos = contactSection.offsetTop;
  contact.addEventListener("click", () => {
    window.scrollTo({
      top: contactSectionPos - 100,
      left: 0,
      behavior: "smooth",
    });
  });
});