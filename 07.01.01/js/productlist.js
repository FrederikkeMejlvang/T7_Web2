const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
window.addEventListener("DOMContentLoaded", init);

const url = "https://kea-alt-del.dk/t7/api/products?category=" + category;

function init() {
  fetch(url)
    .then((res) => res.json())
    .then(showProducts);
}

function showProducts(products) {
  document.querySelector("h2").textContent = category;
  //looper og kalder showProduct
  products.forEach(showProduct);
}
function showProduct(product) {
  // console.log("showproduct");
  // ang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;

  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(
    "p.subtle"
  ).textContent = `${product.articletype}, ${product.brandname}`;
  copy.querySelector("p.price").textContent = `DKK ${product.price},-`;
  copy.querySelector("a").href = `product.html?id${product.id}`;
  // hvis produktet er udsolgt
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  //hvis produktet er på tilbud
  if (product.dicounted) {
    copy.querySelector("article").classList.add("onSale");
  }
  copy
    .querySelector(".read_more")
    .setAttribute("href", `product.html?id=${product.id}`);
  //append til DOM
  document.querySelector("main").appendChild(copy);
}
