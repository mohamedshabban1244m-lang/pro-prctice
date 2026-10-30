
let buttons = document.querySelectorAll(".tst");

let cartItem = document.getElementById("cart-item");
let totalSummary = document.getElementById("total-summary");
let cartCount = document.getElementById("cart-count");

let count = 0;
let total = 0;


buttons.forEach(function (button) {

    button.onclick = function () {

        let card = button.parentElement;
        let price = Number(card.querySelector(".price").innerText);

        if (button.innerText === "Add to Cart") {

            count++;
            total += price;

            button.innerText = "Remove";

            button.classList.remove("btn-primary");
            button.classList.add("btn-success");

        } else {

            count--;
            total -= price;

            button.innerText = "Add to Cart";

            button.classList.remove("btn-success");
            button.classList.add("btn-primary");

        }

        cartItem.innerText = count;
        cartCount.innerText = count;
        totalSummary.innerText = total;

    };

});
