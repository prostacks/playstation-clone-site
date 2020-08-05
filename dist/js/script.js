const bars = document.querySelectorAll(".bottomBar");
const gradients = document.querySelectorAll(".gradient");
const imgs = document.querySelectorAll(".bgImg");
const searchBtn = document.querySelectorAll(".search");
const overlay = document.querySelector("#overlay");
const searchBox = document.querySelector(".searchBox");
const subLinks = document.querySelectorAll(".subLinks");
const subMenus = document.querySelectorAll(".subMenus");
const mediaQuery1 = window.matchMedia("(max-width: 792px)");
const mediaQuery2 = window.matchMedia("(max-width: 650px)");
const openBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
const mobileNavBar = document.querySelector("#mobileNav");
const navWindow = document.querySelector("#mainNav");
const subMenuHeader = document.querySelectorAll(".menuHeader");

const options = {
  root: null,
  rootMargin: "100px",
  threshold: 0,
};
const scaleOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting || mediaQuery1.matches) {
      return;
    }
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, options);

const scaleObserver = new IntersectionObserver((entries, scaleObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("scale");
    scaleObserver.unobserve(entry.target);
  });
}, scaleOptions);

bars.forEach((bar) => {
  observer.observe(bar);
});

gradients.forEach((gradient) => {
  observer.observe(gradient);
});

imgs.forEach((img) => {
  scaleObserver.observe(img);
});

let searchMenu = (e) => {
  e.preventDefault();
  searchBox.classList.add("scale");
  overlay.classList.add("show");
};

let removeMenu = () => {
  searchBox.classList.remove("scale");
  overlay.classList.remove("show");
};

let linkClick = (e) => {
  switch (true) {
    case e.target === subLinks[0]:
      showSubMenu(subMenus[0], subLinks[0]);
      break;
    case e.target === subLinks[1]:
      showSubMenu(subMenus[1], subLinks[1]);
      break;
    case e.target === subLinks[2]:
      showSubMenu(subMenus[2], subLinks[2]);
      break;
    case e.target === subLinks[3]:
      showSubMenu(subMenus[3], subLinks[3]);
      break;
    case e.target === subLinks[4]:
      showSubMenu(subMenus[4], subLinks[4]);
      break;
    case e.target === subLinks[5]:
      showSubMenu(subMenus[5], subLinks[5]);
      break;
    default:
      return;
  }
};

let showSubMenu = (menu, link) => {
  for (let i = 0; i < subMenus.length; i++) {
    if (subMenus[i] === menu) {
      continue;
    }
    subMenus[i].classList.remove("show");
    subLinks[i].classList.remove("current");
    subLinks[i].parentElement.classList.remove("current");
  }
  menu.classList.toggle("show");
  link.classList.toggle("current");
  if (mediaQuery2.matches) {
    link.parentElement.classList.toggle("current");
  }
};

let openNavMenu = () => {
  navWindow.classList.add("open");
  mobileNavBar.classList.add("open");
  openBtn.style.visibility = "hidden";
  closeBtn.style.visibility = "visible";
};

let closeNavMenu = () => {
  navWindow.classList.remove("open");
  mobileNavBar.classList.remove("open");
  closeBtn.style.visibility = "hidden";
  openBtn.style.visibility = "visible";
  for (let i = 0; i < subMenus.length; i++) {
    subMenus[i].classList.remove("show");
    subLinks[i].classList.remove("current");
    subLinks[i].parentElement.classList.remove("current");
  }
};

function mobileSubClose() {
  for (let i = 0; i < subMenus.length; i++) {
    subMenus[i].classList.remove("show");
    subLinks[i].classList.remove("current");
    subLinks[i].parentElement.classList.remove("current");
  }
}

// Event Handlers
overlay.onclick = removeMenu;
openBtn.onclick = openNavMenu;
closeBtn.onclick = closeNavMenu;

subLinks.forEach((subLink) => {
  subLink.onclick = linkClick;
});

subMenuHeader.forEach((header) => {
  header.onclick = mobileSubClose;
});

searchBtn.forEach((search) => {
  search.onclick = searchMenu;
});
