// Modal del carrito
document.addEventListener("DOMContentLoaded", function () {
    let cartItems = document.getElementById("cart-items");
    let closeCartBtn = document.getElementById("closeCart");
    let cartModalElement = document.getElementById("cartModal");
    let cartModal = new bootstrap.Modal(cartModalElement); // Inicializamos el modal

    // Lista de productos con imagen y nombre
    let products = [
        { name: "Reloj Inteligente", price: "$50", image: "Images/reloj1.jpg" },
        { name: "Audífonos Bluetooth", price: "$30", image: "Images/audifonos.jpg" },
        { name: "Laptop Gamer", price: "$1200", image: "Images/laptop.jpg" }
    ];

    // Función para cargar los productos en el carrito
    function loadCart() {
        cartItems.innerHTML = ""; // Limpiar la lista antes de agregar elementos

        if (products.length === 0) {
            cartItems.innerHTML = "<li>No hay productos en el carrito</li>";
            return;
        }

        products.forEach((product, index) => {
            let listItem = document.createElement("li");
            listItem.classList.add("cart-item");
            listItem.innerHTML = `
                <div class="product-info">
                    <img src="${product.image}" alt="${product.name}">
                    <span>${product.name} - ${product.price}</span>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
            `;
            cartItems.appendChild(listItem);
        });
    }

    // Función para eliminar un producto del carrito
    window.removeFromCart = function (index) {
        products.splice(index, 1);
        loadCart(); // Recargar la lista después de eliminar
    };

    // Cargar los productos cuando se abre el carrito
    loadCart();

    // Cerrar el carrito al hacer clic en el botón "Cerrar Carrito"
    closeCartBtn.addEventListener("click", function () {
        cartModal.hide(); // Ocultar el modal correctamente
    });
});


// Detectar cuando el mouse sale del modal y cerrarlo automáticamente
document.getElementById("modalContent").addEventListener("mouseleave", function() {
    let modal = bootstrap.Modal.getInstance(document.getElementById("miModal"));
    if (modal) {
        modal.hide(); // Cierra el modal
    }
});

// Select de "Mi shop"
const miShopSelect = document.getElementById('mi-shop');
miShopSelect.addEventListener('change', (event) => {
    // Lógica para redirigir a la opción seleccionada
    alert(`Redirigir a ${event.target.value}`);
});

// Buscador
const buscarButton = document.getElementById('buscar');
buscarButton.addEventListener('click', () => {
    const categoria = document.getElementById('categoria-select').value;
    const busqueda = document.querySelector('.search-bar input').value;
    // Lógica para realizar la búsqueda
    alert(`Buscar en ${categoria}: ${busqueda}`);
});

