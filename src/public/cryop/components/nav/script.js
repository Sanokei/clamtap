const nav = document.querySelector("nav");
const supportPageOffset = window.scrollX !== undefined;
const isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

let previousScrollPosition = 0;

const isScrollingDown = () => {
    let scrolledPosition = supportPageOffset
        ? window.scrollY
        : isCSS1Compat
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
    let isScrollDown;

    if (scrolledPosition > previousScrollPosition) {
        isScrollDown = true;
    } else {
        isScrollDown = false;
    }
    previousScrollPosition = scrolledPosition;
    return isScrollDown;
};

const handleNavScroll = () => {
    if (isScrollingDown() && !nav.contains(document.activeElement)) {
        nav.classList.add("scroll-down");
        nav.classList.remove("scroll-up");
    } else {
        nav.classList.add("scroll-up");
        nav.classList.remove("scroll-down");
    }
};

window.addEventListener("scroll", () => {
    handleNavScroll()
});

function hamburgerhelper() {
  let dropdown = document.querySelector("#nav-dropdown-content");
  dropdown.classList.toggle("hidden");
}

window.onclick = (event) => {
  let dropdown = document.querySelector("#nav-dropdown-content");
  if(event.target.matches("#nav-dropdown-btn"))
  {
    if(dropdown.classList.contains('hidden'))
    {
        dropdown.classList.remove('hidden')
    }
  }
}