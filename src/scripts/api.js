// api.js

// Objeto que contiene todas las operaciones CRUD
export const productAPI = {
  // URL base del servidor
  URL: "http://localhost:3000/products",

  // Función para mostrar todos los productos en la tabla
  async showProducts() {
    const products = await fetch(this.URL).then((response) => response.json());
    products.forEach((product) => {
      document.querySelector("#productsTableBody").innerHTML += `
        <tr>
          <td>${product.id}</td>
          <td>${product.productName}</td>
          <td>$${product.price.toFixed(1)}</td>
          <td>
            <button class="edit-btn" data-id="${product.id}" data-name="${
        product.productName
      }" data-price="${product.price}">Editar</button>
            <button class="delete-btn" data-id="${product.id}">Eliminar</button>
          </td>
        </tr>
      `;
    });
  },

  // Función para agregar un nuevo producto al servidor
  async addProduct() {
    await fetch(this.URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productName: document.querySelector("#product").value,
        price: parseFloat(document.querySelector("#priceProduct").value),
      }),
    });

    document.querySelector("#productsTableBody").innerHTML = "";
    this.showProducts();
    document.querySelector("#productForm").reset();
  },

  // Función para eliminar un producto del servidor por ID
  async deleteProduct(id) {
    await fetch(`${this.URL}/${id}`, {
      method: "DELETE",
    });

    document.querySelector("#productsTableBody").innerHTML = "";
    this.showProducts();
  },

  // Función para preparar el formulario para editar un producto existente
  async editProduct(button) {
    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = button.dataset.price;

    const form = document.getElementById("productForm");

    document.getElementById("product").value = name;
    document.getElementById("priceProduct").value = price;
    form.dataset.editingId = id;

    form.querySelector('button[type="submit"]').textContent = "Actualizar";
  },

  // Función para actualizar un producto existente en el servidor
  async updateProduct() {
    const id = document.querySelector("#productForm").dataset.editingId;
    const name = document.querySelector("#product").value;
    const price = parseFloat(document.querySelector("#priceProduct").value);

    await fetch(`${this.URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productName: name, price }),
    });

    document.querySelector("#productsTableBody").innerHTML = "";
    this.showProducts();
    document.querySelector("#productForm").reset();
  },
};
