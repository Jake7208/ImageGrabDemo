function loadDom(array) {
  const listElement = document.createElement("section");
  listElement.className = "Gallery_Section";

  const listItems = [];

  array.forEach((image) => {
    const listItem = document.createElement("a");
    listItem.className = "Gallery_Item";
    const imgElement = document.createElement("img");

    imgElement.src = `.././images/${image.genre}/${image.name}`;

    listItem.appendChild(imgElement);
    listElement.appendChild(listItem);

    listItem.addEventListener("click", () => {
      console.log("Image clicked!"); // You can add your custom click event handling here
    });

    listItems.push(listItem);
  });

  const galleryDiv = document.querySelector(".gallery");

  galleryDiv.appendChild(listElement);
}

window.onload = () => {
  // Fetch all images and their data from the /api/getAll endpoint
  fetch("http://localhost:4000/api/getAll")
    .then((response) => response.json())
    .then((objectData) => {
      const imageArray = objectData.allImages; // Extract the array of images from the objectData
      loadDom(imageArray); // Pass the array to the loadDom function
    })
    .catch((error) => {
      console.error(error);
    });
};
