const container = document.querySelector(".container");

const rowsNum = 5;

function randomImage() {
  for (let i = 1; i < rowsNum + 1; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = rowsNum; j < rowsNum + 3; j++) {
      const image = document.createElement("img");
      image.src = ` https://picsum.photos/300?random=${i * j}`;
      row.appendChild(image);
    }

    container.appendChild(row);
  }
}

randomImage();
