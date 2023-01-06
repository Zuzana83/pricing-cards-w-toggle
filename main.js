const pricingToggle = document.getElementById("pricing");
const priceEls = document.querySelectorAll(".price");

const annualPrices = [199.99, 249.99, 399.99];
const monthlyPrices = [19.99, 24.99, 39.99];

function showPrices() {
    if(pricingToggle.checked) {
        console.log("Monthly price")
        priceEls.forEach((el, idx) => {
            el.textContent = monthlyPrices[idx];
        })
    } else {
        console.log("Anually price");
        priceEls.forEach((el, idx) => {
            el.textContent = annualPrices[idx];
        })
    }
 }

showPrices();

pricingToggle.addEventListener("change", () => {
   showPrices();
});