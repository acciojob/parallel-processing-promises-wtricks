//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", () => {
  output.innerHTML = ''; // Clear previous images

  const downloadPromises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image.url;

      img.onload = () => {
        output.appendChild(img);
        resolve();
      };

      img.onerror = () => {
        reject(`Failed to load image's URL: ${image.url}`);
      };
    });
  });

  Promise.all(downloadPromises)
    .then(() => {
      console.log("All images downloaded successfully.");
    })
    .catch(error => {
      console.error(error);
    });
});
