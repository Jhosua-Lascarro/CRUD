// main.js

import { productAPI } from "./api";

// Evento para manejar el envío del formulario de productos
document.querySelector("#productForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = document.querySelector("#productForm");
  if (form.dataset.editingId) {
    // Si estamos editando, actualizar el producto
    productAPI.updateProduct();
    // Resetear el estado del formulario
    delete form.dataset.editingId;
    form.querySelector('button[type="submit"]').textContent = "Enviar";
  } else {
    // Si no estamos editando, agregar nuevo producto
    productAPI.addProduct();
  }
});

// Inicialización de la aplicación al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  productAPI.showProducts();
});

// Evento para manejar la eliminación de productos
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.preventDefault();
    productAPI.deleteProduct(e.target.dataset.id);
  }
});

// Evento para manejar la edición de productos
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    e.preventDefault();
    productAPI.editProduct(e.target);
  }
});
