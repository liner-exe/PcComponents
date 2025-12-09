import { CatalogController } from "../catalog/catalog.controller.js";
import { CartController } from "../cart/cart.controller.js";
import { burgerMenu } from "../components/burger-menu.js";

document.addEventListener("DOMContentLoaded", () => {
    CatalogController.init();
    CartController.init();

    burgerMenu();
});

const filtersToggleBtn = document.querySelector('.filters-toggle-button');
const filters = document.querySelector('.filters');

filtersToggleBtn?.addEventListener('click', () => {
    filters.classList.toggle('active');
    filtersToggleBtn.textContent = filters.classList.contains('active')
        ? 'Скрыть фильтры'
        : 'Показать фильтры';
});