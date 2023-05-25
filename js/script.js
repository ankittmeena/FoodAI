
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close the mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Sticky header

window.addEventListener("scroll", function () {
  if (window.scrollY >= 720) {
    this.document.body.classList.add("sticky");
  } else {
    this.document.body.classList.remove("sticky");
  }
});

var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('full-name').value;

    if(name.length==0){
        nameError.innerHTML="*Invalid Name";
        return false;
    }
    return true;
}

function validateEmail(){
    var email=document.getElementById('email').value;

    if(email.length==0){
        emailError.innerHTML="*Invalid Email";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML='Invalid Email';
        return false;
    }
    return true;
}

function validateForm(){
    if (!validateName() ||!validateEmail()) {
        submitError.style.display='block';
        submitError.innerHTML='*Please fix the Error to Submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}
