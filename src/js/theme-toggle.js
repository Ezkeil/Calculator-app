class Toggle {
  constructor(theme_1, theme_2, theme_3, handle) {
    this.theme_1 = theme_1;
    this.theme_2 = theme_2;
    this.theme_3 = theme_3;
    this.handle = handle;
    this.theme = document.querySelector("body");
  }
  slide(position, duration = 500) {
    this.handle.style.transition = `transform ${duration}ms`;
    this.handle.style.transform = `translateX(${position}px)`;
    this.theme.style.transition = `background-color ${duration}ms`;
  }
  slideTo1() {
    this.theme_1.addEventListener("click", () => {
      this.slide(0);
      this.theme.setAttribute("class", "theme-1");
    });
  }
  slideTo2() {
    this.theme_2.addEventListener("click", () => {
      this.slide(35);
      this.theme.setAttribute("class", "theme-2");
    });
  }
  slideTo3() {
    this.theme_3.addEventListener("click", () => {
      this.slide(74);
      this.theme.setAttribute("class", "theme-3");
    });
  }
}

const theme_1 = document.querySelector("#theme-1");
const theme_2 = document.querySelector("#theme-2");
const theme_3 = document.querySelector("#theme-3");
const handle = document.querySelector(".theme-toggle-handle");
const themeSelector = new Toggle(theme_1, theme_2, theme_3, handle);
themeSelector.slideTo1();
themeSelector.slideTo2();
themeSelector.slideTo3();
