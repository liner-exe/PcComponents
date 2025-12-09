import { CartPageController } from "../cart/cart.page.controller.js";

document.addEventListener("DOMContentLoaded", () => {
    CartPageController.init();
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

function showMessageBox(title, text) {
    document.getElementById('messageTitle').textContent = title;
    document.getElementById('messageText').textContent = text;
    document.getElementById('messageBox').classList.add('show');
}

function hideMessageBox() {
    document.getElementById('messageBox').classList.remove('show');
}

document.getElementById('checkout').addEventListener('click', () => {
    const total = document.getElementById('cartTotal');

    if (Number(total.textContent) === 0) {
        showMessageBox("Ошибка", "Корзина пуста");
        return;
    }

    showMessageBox(
        "Заказ оформлен!",
        `Ваш заказ на сумму ${total.textContent} успешно передан в обработку. Спасибо за покупку!`
    );
});