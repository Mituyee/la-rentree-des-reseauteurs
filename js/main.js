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
