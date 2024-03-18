
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function mostrarMenu() {
  console.log("Seleccione la tabla a la que desea acceder:");
  console.log("1. Proveedores");
  console.log("2. Usuarios");
  console.log("3. Productos");
  console.log("4. Ventas");
  console.log("5. Compras");
  console.log("6. Roles");
}

function seleccionarTabla(opcion) {
  switch (opcion) {
    case '1':
      console.log("Accediendo a la tabla de Proveedores...");
      const Proveedor = require('./proveedor'); 
      const proveedor1 = new Proveedor(1, "Proveedor Uno", "Calle 123", "123456789", "Peces@example.com", "Categoria 1");
      console.log(proveedor1);
      break;
    case '2':
      console.log("Accediendo a la tabla de Usuarios...");
      const Usuarios = require('./usuarios'); 
      const usuario1 = new Usuarios(1050, "C.C", "Juan", "Velez", "acq@example.com", "empleado");
      console.log(usuario1);
      break;
    case '3':
      console.log("Accediendo a la tabla de Productos...");
      const Producto = require('./producto');
      const producto1 = new Producto(1, "Producto 1", "Caracteristicas del producto 1", "Tipo 1", 10.99, 50);
      const producto2 = new Producto(2, "Producto 2", "Caracteristicas del producto 2", "Tipo 2", 20.49, 30);
      console.log(producto1);
      console.log(producto2);
      break;
    case '4':
      console.log("Accediendo a la tabla de Ventas...");
      const Venta = require('./venta'); 
      const venta1 = new Venta(1, new Date(), "Cliente123", 100.50, "Tarjeta");
      console.log(venta1);
      break;
    case '5':
      console.log("Accediendo a la tabla de Compras...");
      const Compra = require('./compra'); 
      const compra1 = new Compra(1, "Tarjeta", 200.75, "Producto A, Producto B");
      console.log(compra1);
      break;
    case '6':
      console.log("Accediendo a la tabla de Roles...");
      const Rol = require('./rol'); 
      const rol1 = new Rol("ADMIN", "Administrativo");
      console.log(rol1);
      break;
    default:
      console.log("Opción no válida. Por favor seleccione un número del 1 al 6.");
  }
}

mostrarMenu();

rl.question('Ingrese el número de la tabla: ', (respuesta) => {
  seleccionarTabla(respuesta);
  rl.close();
});