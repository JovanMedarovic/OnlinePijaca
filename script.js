let total = 0;
const totalElement = document.querySelector(".total");

const addToCart = (btn) => {
  const cartElement = document.querySelector(".cart-items");

  const mainItem = btn.closest(".single-item");
  const inputElement = mainItem.querySelector("input");

  const quantity = parseInt(inputElement.value);
  const stringPrice = mainItem.querySelector(".price").innerText;
  const price = parseInt(stringPrice.substring(1));
  const name = mainItem.querySelector("h3").innerText;

  if ( quantity > 0 ) {
    let itemTotal = quantity * price;
    total += itemTotal;
    totalElement.innerHTML = `Total: $${total}`
    cartElement.innerHTML += `<div class="cart-single-item">
                              <h3>${name}</h3>
                              <p>${stringPrice} x ${quantity} = $<span>${itemTotal}</span></p>
                              <button onclick="removeFromCart(this)">Ukloni</button>
                            </div>`;
    btn.setAttribute("disabled", "true");
    btn.innerText = "Dodato";
    inputElement.setAttribute("disabled", "true");
  } else {
    console.error("Uneti kolicinu vecu od nule!");
  }
}

const removeFromCart = (btn) => {
  const mainElement = btn.closest(".cart-single-item");
  const vegetables = document.querySelectorAll(".single-item");
  const price = parseInt(mainElement.querySelector("span").innerText);
  const name = mainElement.querySelector("h3").innerText;
  mainElement.remove();
  total -= price;
  totalElement.innerHTML = `Total: $${total}`
  
  vegetables.forEach((singeVegeItem) => {
    const itemName = singeVegeItem.querySelector("h3").innerText;
    if(itemName === name) {
      singeVegeItem.querySelector("input").value = 0;
      singeVegeItem.querySelector("input").removeAttribute("disabled");
      singeVegeItem.querySelector("button").innerText = "Dodaj";
      singeVegeItem.querySelector("button").removeAttribute("disabled");
    }
  });
}