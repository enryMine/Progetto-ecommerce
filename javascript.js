const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => nav.classList.toggle("active"));
function scrollToTop() {
  window.scrollTo(0, 0);
}

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

function Aggiungialcarrello(o) {
  var quantita = document.getElementById("quantita").value;
  var carrello = document.getElementById("carrello").innerHTML;
  var totale = parseInt(carrello) + parseInt(quantita);
  document.getElementById("carrello").innerHTML = totale;
}

function calculateTotal() {
  var priceElement = document.querySelector(".card-text.price");
  var quantityElement = document.querySelector(".form-control.quantity");
  var subtotalElement = document.getElementById("subtotal");
  var shippingCostElement = document.getElementById("shippingCost");
  var totalAmountElement = document.getElementById("totalAmount");

  if (priceElement && quantityElement && subtotalElement && shippingCostElement && totalAmountElement) {
    var priceString = priceElement.textContent;
    var price = parseFloat(priceString.replace(/[^0-9.,]/g, "").replace(",", "."));
    var quantity = parseInt(quantityElement.value);
    var total = price * quantity;

    var totalElement = quantityElement.parentNode.nextElementSibling;
    totalElement.textContent = "Totale: €" + total.toFixed(2);

    subtotalElement.textContent = "€" + total.toFixed(2);

    var shippingCost = 2.0; // Inserisci il valore effettivo dei costi di spedizione
    shippingCostElement.textContent = "€" + shippingCost.toFixed(2);

    var totalAmount = total + shippingCost;
    totalAmountElement.textContent = "€" + totalAmount.toFixed(2);
  }
};

function removeProduct(event) {
  var card = event.target.closest(".card");
  card.remove();

  var subtotalElement = document.getElementById("subtotal");
  var shippingCostElement = document.getElementById("shippingCost");
  var totalAmountElement = document.getElementById("totalAmount");

  if (subtotalElement && shippingCostElement && totalAmountElement) {
    subtotalElement.innerHTML = "€0,00";
    shippingCostElement.innerHTML = "€0,00";
    totalAmountElement.innerHTML = "€0,00";
  }
};
