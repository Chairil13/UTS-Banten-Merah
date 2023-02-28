/* Script start for area Calculate */

/*Calculate area for Rectangle start*/

document.querySelector(".calArea").addEventListener("click", isArea);

function isArea() {
  let length = document.querySelector("#num1").value;
  let breadth = document.querySelector("#num2").value;
  let Area;
  Area = length * breadth;
  document.querySelector(".disArea").textContent = Area;
}
/* Calculate area for Rectangle ends */
