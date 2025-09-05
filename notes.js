// const btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", function (e) {
//   console.log(e);
// });

// // btn1.onmouseenter = () => {
// //   console.log("stop touching me");
// // };

// window.addEventListener("keydown", function (e) {
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("UP!");
//       break;
//     case "ArrowDown":
//       console.log("DOWN!");
//       break;
//     default:
//       console.log("IGNORED");
//   }
// });

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#list");

input.addEventListener("input", () => {
  console.log(input.value);
});

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const catName = input.value;
//   const newLI = document.createElement("li");
//   newLI.innerText = catName;
//   list.append(newLI);
//   input.value = "";
// });

// const form = document.querySelector("form");
// const qtyInput = document.querySelector("#qty");
// const productInput = document.querySelector("#product");
// const ul = document.querySelector("ul");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const newLI = document.createElement("li");
//   newLI.innerText = `${productInput.value} - ${qtyInput.value}`;
//   ul.append(newLI);

//   productInput.value = "";
//   qtyInput.value = "";
// });
