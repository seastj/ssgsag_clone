window.addEventListener("load", function () {
  const outfocus = document.querySelectorAll(".focus");

  outfocus.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      outfocus.forEach((el) => {
        if (el !== item) {
          el.classList.add("focusleave");
        }
      });
    });
    item.addEventListener("mouseleave", () => {
      outfocus.forEach((el) => {
        el.classList.remove("focusleave");
      });
    });
  });
});
