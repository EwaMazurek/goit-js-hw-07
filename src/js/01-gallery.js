import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach(galleryItem => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("gallery__item");
  gallery.appendChild(imgContainer);

  const imgMiniature = document.createElement("img");
  imgMiniature.classList.add("gallery__image");
  imgMiniature.setAttribute("src", galleryItem.preview);
  imgMiniature.setAttribute("alt", galleryItem.description);
  imgMiniature.dataset.source = galleryItem.original;

  const image = document.createElement("a");
  image.classList.add("gallery__link");
  image.setAttribute("href", galleryItem.original);

  imgContainer.appendChild(image);
  image.appendChild(imgMiniature);
});

function handleClick(e) {
  e.preventDefault();

  if (e.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
      onShow: () => {
        gallery.addEventListener("keydown", e => {
          if (e.code === "Escape") {
            instance.close();
          }
        });
      },
    });

    instance.show();
  }
}
gallery.addEventListener("click", handleClick);

console.log(galleryItems);
