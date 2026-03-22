// Tabs
document.addEventListener("DOMContentLoaded", function () {
  const tabHeadingAll = document.querySelectorAll(
    ".tabs-container .tab-heading",
  );
  const tabContentAll = document.querySelectorAll(
    ".tabs-container .tab-content",
  );

  if (tabHeadingAll.length > 0 && tabContentAll.length > 0) {
    const removeAllActive = () => {
      tabContentAll.forEach((content) => {
        content.classList.remove("active");
      });

      tabHeadingAll.forEach((heading) => {
        heading.classList.remove("active");
      });
    };

    tabHeadingAll.forEach((heading, index) => {
      heading.addEventListener("click", function () {
        removeAllActive();

        if (tabContentAll[index]) {
          tabContentAll[index].classList.add("active");
        }

        heading.classList.add("active");
      });
    });
  }
});

// Slide show
document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".slider .list .item");
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");

  if (items.length > 0 && next && prev) {
    let countItem = items.length;
    let itemActive = 0;

    function showSlider() {
      let itemActiveOld = document.querySelector(".slider .list .item.active");

      if (itemActiveOld) {
        itemActiveOld.classList.remove("active");
      }

      items[itemActive].classList.add("active");

      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click();
      }, 5000);
    }

    next.onclick = function () {
      itemActive++;
      if (itemActive >= countItem) {
        itemActive = 0;
      }
      showSlider();
    };

    prev.onclick = function () {
      itemActive--;
      if (itemActive < 0) {
        itemActive = countItem - 1;
      }
      showSlider();
    };

    let refreshInterval = setInterval(() => {
      next.click();
    }, 5000);
  }
});

// Mobile navigation menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}

// Gallery page
function openModal(imageUrl) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");

  if (modal && modalImg) {
    modal.style.display = "block";
    modalImg.src = imageUrl;
  }
}

function closeModal() {
  var modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "none";
  }
}

function prevImage() {
  var modalImg = document.getElementById("modalImg");
  var images = document.querySelectorAll(".gallery-img");

  if (!modalImg || images.length === 0) return;

  var currentImage = modalImg.src;
  var currentIndex = 0;

  for (var i = 0; i < images.length; i++) {
    if (images[i].src === currentImage) {
      currentIndex = i;
      break;
    }
  }

  var prevIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(images[prevIndex].src);
}

function nextImage() {
  var modalImg = document.getElementById("modalImg");
  var images = document.querySelectorAll(".gallery-img");

  if (!modalImg || images.length === 0) return;

  var currentImage = modalImg.src;
  var currentIndex = 0;

  for (var i = 0; i < images.length; i++) {
    if (images[i].src === currentImage) {
      currentIndex = i;
      break;
    }
  }

  var nextIndex = (currentIndex + 1) % images.length;
  openModal(images[nextIndex].src);
}

// Cookie notice
document.addEventListener("DOMContentLoaded", function () {
  const cookiesModal = document.getElementById("cookies-modal");
  const acceptCookiesBtn = document.getElementById("accept-cookies-btn");

  if (cookiesModal && acceptCookiesBtn) {
    acceptCookiesBtn.addEventListener("click", function () {
      cookiesModal.style.display = "none";
      document.cookie =
        "cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });

    if (!document.cookie.includes("cookiesAccepted=true")) {
      cookiesModal.style.display = "block";
    }
  }
});

// Google reCaptcha
function onSubmit() {
  if (typeof grecaptcha !== "undefined") {
    var response = grecaptcha.getResponse();

    if (response.length === 0) {
      alert("Veuillez vérifier que vous n'êtes pas un robot.");
      return false;
    }
  }

  return true;
}

// FAQ
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  if (faqQuestions.length > 0) {
    faqQuestions.forEach(function (question) {
      question.addEventListener("click", function () {
        const currentItem = this.parentElement;
        const isActive = currentItem.classList.contains("active");

        document.querySelectorAll(".faq-item").forEach(function (item) {
          item.classList.remove("active");
        });

        if (!isActive) {
          currentItem.classList.add("active");
        }
      });
    });
  }
});
