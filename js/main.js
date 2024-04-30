// tabs

const tabHeadingAll = document.querySelectorAll(".tabs-container .tab-heading");
const tabContentAll = document.querySelectorAll(".tabs-container .tab-content");

const removeAllActive = () => {
  tabContentAll.forEach((c) => {
    c.classList.remove("active");
  });

  tabHeadingAll.forEach((h) => {
    h.classList.remove("active");
  });
};

tabHeadingAll.forEach((h, i) => {
  h.addEventListener("click", () => {
    removeAllActive();
    tabContentAll[i].classList.add("active");
    h.classList.add("active");
  });
});
// end of tabs

// slide show
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
//event prev click
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};
// auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 5000);
function showSlider() {
  // remove item active old
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  itemActiveOld.classList.remove("active");

  // active new item
  items[itemActive].classList.add("active");

  // clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

// end of slide show

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// end of mobile navigation menu

// Gallery page

// Open the modal with the clicked image
function openModal(imageUrl) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageUrl;
}

// Close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function prevImage() {
  var currentImage = document.getElementById("modalImg").src;
  var images = document.querySelectorAll(".gallery-img");
  var currentIndex;
  for (var i = 0; i < images.length; i++) {
    if (images[i].src === currentImage) {
      currentIndex = i;
      break;
    }
  }
  var prevIndex = (currentIndex - 1 + images.length) % images.length;
  if (images[prevIndex]) {
    openModal(images[prevIndex].src);
  } else {
    console.error("Previous image not found.");
  }
}

// Navigate to the next image
function nextImage() {
  var currentImage = document.getElementById("modalImg").src;
  var images = document.querySelectorAll(".gallery-img");
  var currentIndex;
  for (var i = 0; i < images.length; i++) {
    if (images[i].src === currentImage) {
      currentIndex = i;
      break;
    }
  }
  var nextIndex = (currentIndex + 1) % images.length;
  if (images[nextIndex]) {
    openModal(images[nextIndex].src);
  }
}

// Listen for left and right arrow key press
document.addEventListener("DOMContentLoaded", function () {
  const cookiesModal = document.getElementById("cookies-modal");
  const acceptCookiesBtn = document.getElementById("accept-cookies-btn");

  //End of gallary pages

  //Cookie notice

  acceptCookiesBtn.addEventListener("click", function () {
    cookiesModal.style.display = "none";
    // Set a cookie to remember that the user has accepted the cookies notice
    document.cookie =
      "cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  });

  // Check if the user has previously accepted the cookies notice
  if (!document.cookie.includes("cookiesAccepted=true")) {
    cookiesModal.style.display = "block";
  }
});

// End of cookie notice

//Google reCaptcha

function onSubmit(token) {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    // reCAPTCHA not verified, handle accordingly
    alert("Please verify that you are not a robot.");
    return false;
  } else {
    // reCAPTCHA verified, proceed with form submission
    document.getElementById("subscription-form").submit();
    return true;
  }
}

//End of google reCaptcha

// Form submission form

// Function to handle form submission
function submitForm() {
  // Get the value of the email input field
  var email = document.getElementById("emailInput").value;

  // Perform any validation if needed
  if (!isValidEmail(email)) {
    alert("Veuillez entrer une adresse e-mail valide.");
    return;
  }

  // You can perform additional actions here, such as sending the form data to a server
  // For now, let's just log the email to the console
  console.log("Email submitted:", email);

  // Optionally, you can reset the form fields after submission
  document.getElementById("emailInput").value = "";
}

// Function to validate email format
function isValidEmail(email) {
  // A basic email validation using a regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add event listener to the Participer button
document.getElementById("submitButton").addEventListener("click", function () {
  submitForm();
});

// End of form submission form
