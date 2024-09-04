const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

fetch(url)
  .then((res) => res.json())
  .then(showProduct);

function showProduct(product) {
  document.querySelector(".purchaseBox h2").textContent =
    product.productdisplayname;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img").alt = product.productdisplayname;
  document.querySelector(".purchaseBox p").textContent = product.brandname;
  document.querySelector("dd.name").textContent = product.productdisplayname;
  document.querySelector("dd.brand").textContent = product.brandname;
  document.querySelector("dd.id").textContent = product.id;
  document.querySelector("li.item").textContent = product.productdisplayname;
  document.querySelector("li.cat").textContent = product.category;
}
