function showMore() {
  const moreProjectElemRef =
    document.querySelector<HTMLDivElement>("#more-projects");

  if (moreProjectElemRef) {
    moreProjectElemRef.style.display = "flex";
  } else {
    console.error("Elemento #more-projects no encontrado");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const moreProjectLinkElemRef =
    document.querySelector<HTMLLinkElement>("#show-more-btn");
  if (moreProjectLinkElemRef) {
    moreProjectLinkElemRef.addEventListener("click", () => {
      showMore();
      moreProjectLinkElemRef.remove();
    });
  }
});
