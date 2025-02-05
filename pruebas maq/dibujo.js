let currentMoney = 0;
let selectedProduct = null;

function insertMoney() {
    const paymentAmount = parseFloat(document.getElementById('payment-amount').value);
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }
    currentMoney += paymentAmount;
    document.getElementById('message').textContent = `Dinero insertado: $${currentMoney.toFixed(2)}`;
}

function selectProduct(product, price) {
    selectedProduct = { product, price };
    document.getElementById('message').textContent = `Ha seleccionado: ${product} - $${price}. Ingrese el dinero necesario.`;
    if (currentMoney >= price) {
        const change = (currentMoney - price).toFixed(2);
        document.getElementById('message').textContent = `Producto: ${product}. Precio: $${price}. Cambio: $${change}. Gracias por su compra.`;
        currentMoney = 0; // Resetear el dinero insertado después de la compra
    } else {
        const remainingAmount = (price - currentMoney).toFixed(2);
        document.getElementById('message').textContent = `Dinero insuficiente. Necesita: $${remainingAmount} más para comprar ${product}.`;
    }
}

function returnMoney() {
    if (currentMoney > 0) {
        alert(`Devolviendo dinero: $${currentMoney.toFixed(2)}`);
        currentMoney = 0;
        document.getElementById('message').textContent = 'Dinero devuelto. Seleccione un producto';
    } else {
        alert("No hay dinero para devolver.");
    }
}
