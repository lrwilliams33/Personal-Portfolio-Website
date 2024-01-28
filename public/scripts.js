// let btn = document.getElementsByClassName("collapse");
         
//         btn[0].addEventListener("click", function () {
//             this.classList.toggle("active");
//             let content = this.nextElementSibling;
//             if (content.style.display === "block") {
//                 content.style.display = "none";
//             } else {
//                 content.style.display = "block";
//             }
//         });

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

    // Toggle "active" class and show/hide content for the clicked button
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


