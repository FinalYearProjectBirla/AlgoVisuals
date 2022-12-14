// let arrayA = [1, 22, 3, 44, 4, 57, 6, 7, 89, 9, 12, 34, 2, 4, 5, 6, 7, 8, 9];

// let input_values = document.getElementById("input-numbers");
// let arrayValues = [];
// let finalArray = [];
// input_values.addEventListener("change", function (e) {
//   arrayValues += e.target.value;
// });
// let submitButton = document.getElementById("submit");
// console.log(submitButton);
// submitButton.addEventListener("click", function (e) {
//   finalArray = arrayValues.split(",").map(function (item) {
//     return parseInt(item, 10);
//   });

//   maxRange = finalArray.size;
//   numOfBars = finalArray.size;
//   // console.log(finalArray);

//   renderBars(finalArray);
//   arrayValues = [];
// });

// let remove_button = document.getElementById("remove");
// remove_button.addEventListener("click", function (e) {
//   if (finalArray.length != 0) {
//     for (let i = 0; i < finalArray.length; i++) {
//       const element = bars_container.firstElementChild;

//       element.remove();
//     }
//   }
//   input_values.value = null;
// });

// let randomize_array = document.getElementById("randomize_array_btn");
// let sort_btn = document.getElementById("sort_btn");
// let bars_container = document.getElementById("bars_container");
// let select_algo = document.getElementById("algo");
// let speed = document.getElementById("speed");
// // let slider = document.getElementById("slider");
// let minRange = 1;
// let maxRange = arrayA.length;
// let numOfBars = arrayA.length;
// let heightFactor = 4;
// let speedFactor = 100;

// speed.addEventListener("change", (e) => {
//   speedFactor = parseInt(e.target.value);
// });

// let algotouse = "";

// select_algo.addEventListener("change", function () {
//   algotouse = select_algo.value;
// });

// document.addEventListener("DOMContentLoaded", function () {
//   renderBars(finalArray);
// });

// function renderBars(array) {
//   for (let i = 0; i < array.length; i++) {
//     let bar = document.createElement("div");
//     bar.classList.add("bar");
//     bar.style.height = array[i] * heightFactor + "px";
//     console.log(bar.style.height);
//     // bar.innerHTML = array[i];
//     bars_container.appendChild(bar);
//   }
// }

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function bubbleSort(array) {
//   let bars = document.getElementsByClassName("bar");
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         for (let k = 0; k < bars.length; k++) {
//           if (k !== j && k !== j + 1) {
//             bars[k].style.backgroundColor = "black";
//           }
//         }
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//         // bar.innerHTML = array[i];
//         bars[j].style.height = array[j] * heightFactor + "px";
//         bars[j].style.backgroundColor = "lightgreen";
//         //bars[j].innerText = array[j];
//         bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
//         bars[j + 1].style.backgroundColor = "lightgreen";
//         //bars[j + 1].innerText = array[j + 1];
//         await sleep(speedFactor);
//       }
//     }
//     await sleep(speedFactor);
//   }
//   return array;
// }

// sort_btn.addEventListener("click", function () {
//   switch (algotouse) {
//     case "bubble":
//       console.log(arrayA);
//       bubbleSort(finalArray);
//       break;

//     default:
//       bubbleSort(finalArray);
//       break;
//   }
// });
