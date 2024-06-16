const container = document.querySelector(".container");

const rowsNum = 5;

randomImage();

function randomImage() {
  for (let i = 0; i < rowsNum; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 3; j++) {
      const image = document.createElement("img");
      image.src = ` https://picsum.photos/300?random=${i}${j}}`;
      row.appendChild(image);
    }

    container.appendChild(row);
  }
}
