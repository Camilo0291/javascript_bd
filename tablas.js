const readline = require('readline');

// Crear la interfaz de lectura de consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para mostrar el menú
function mostrarMenu() {
  console.log("Seleccione la tabla a la que desea acceder:");
  console.log("1. Proveedores");
  console.log("2. Usuarios");
  console.log("3. Productos");
  console.log("4. Ventas");
  console.log("5. Compras");
  console.log("6. Roles");
}

// Función para manejar la selección del usuario
function seleccionarTabla(opcion) {
  switch (opcion) {
    case '1':
      console.log("Accediendo a la tabla de Proveedores...");
      // Aquí iría el código para trabajar con la tabla de proveedores
      const Proveedor = require('./proveedor'); // Reemplaza './proveedor' con la ruta real del archivo que contiene la clase Proveedor
      const proveedor1 = new Proveedor(1, "Proveedor Uno", "Calle 123", "123456789", "Peces@example.com", "Categoria 1");
      console.log(proveedor1);
      break;
    case '2':
      console.log("Accediendo a la tabla de Usuarios...");
      // Aquí iría el código para trabajar con la tabla de usuarios
      const Usuarios = require('./usuarios'); // Reemplaza './usuarios' con la ruta real del archivo que contiene la clase Usuarios
      const usuario1 = new Usuarios(1050, "C.C", "Juan", "Velez", "acq@example.com", "empleado");
      console.log(usuario1);
      break;
    case '3':
      console.log("Accediendo a la tabla de Productos...");
      // Aquí iría el código para trabajar con la tabla de productos
      const Producto = require('./producto'); // Reemplaza './producto' con la ruta real del archivo que contiene la clase Producto
      const producto1 = new Producto(1, "Producto 1", "Caracteristicas del producto 1", "Tipo 1", 10.99, 50);
      const producto2 = new Producto(2, "Producto 2", "Caracteristicas del producto 2", "Tipo 2", 20.49, 30);
      console.log(producto1);
      console.log(producto2);
      break;
    case '4':
      console.log("Accediendo a la tabla de Ventas...");
      // Aquí iría el código para trabajar con la tabla de ventas
      const Venta = require('./venta'); // Reemplaza './venta' con la ruta real del archivo que contiene la clase Venta
      const venta1 = new Venta(1, new Date(), "Cliente123", 100.50, "Tarjeta");
      console.log(venta1);
      break;
    case '5':
      console.log("Accediendo a la tabla de Compras...");
      // Aquí iría el código para trabajar con la tabla de compras
      const Compra = require('./compra'); // Reemplaza './compra' con la ruta real del archivo que contiene la clase Compra
      const compra1 = new Compra(1, "Tarjeta", 200.75, "Producto A, Producto B");
      console.log(compra1);
      break;
    case '6':
      console.log("Accediendo a la tabla de Roles...");
      // Aquí iría el código para trabajar con la tabla de roles
      const Rol = require('./rol'); // Reemplaza './rol' con la ruta real del archivo que contiene la clase Rol
      const rol1 = new Rol("ADMIN", "Administrativo");
      console.log(rol1);
      break;
    default:
      console.log("Opción no válida. Por favor seleccione un número del 1 al 6.");
  }
}

// Mostrar el menú inicial
mostrarMenu();

// Esperar la entrada del usuario y manejarla
rl.question('Ingrese el número de la tabla: ', (respuesta) => {
  seleccionarTabla(respuesta);
  rl.close();
});

// tabla proveedores

class Proveedor {
  constructor(id_tributario, nombre_proveedor, direccion_proveedor,
    telefono_proveedor, correo_proveedor, categoria_productos) {
    this.id_tributario = id_tributario;
    this.nombre_proveedor = nombre_proveedor;
    this.direccion_proveedor = direccion_proveedor;
    this.telefono_proveedor = telefono_proveedor;
    this.correo_proveedor = correo_proveedor;
    this.categoria_productos = categoria_productos;
  }
}

const proveedor1 = new Proveedor(1, "Proveedor Uno", "Calle 123", "123456789", "Peces@example.com",
  "Categoria 1");
console.log(proveedor1);

// tabla usuarios

class Usuarios {
  constructor(documento_usuario, tipo_documento_usuario, nombre_usuario,
    apellido_usuario, correo_usuario, rol_usuario) {
    this.documento_usuario = documento_usuario;
    this.tipo_documento_usuario = tipo_documento_usuario;
    this.nombre_usuario = nombre_usuario;
    this.apellido_usuario = apellido_usuario;
    this.correo_usuario = correo_usuario;
    this.rol_usuario = rol_usuario;
  }
}

const usuario1 = new Usuarios(1050, "C.C", "Juan", "Velez", "acq@example.com", "empleado")
console.log(usuario1)

// tabla productos

class Producto {
  constructor(id_producto, nombre_producto, descripcion_producto, tipo_producto, precio_producto,
    unidades_disponibles) {
    this.id_producto = id_producto;
    this.nombre_producto = nombre_producto;
    this.descripcion_producto = descripcion_producto;
    this.tipo_producto = tipo_producto;
    this.precio_producto = precio_producto;
    this.unidades_disponibles = unidades_disponibles;
  }
}

const producto1 = new Producto(1, "Producto 1", "Caracteristicas del producto 1", "Tipo 1", 10.99, 50);
const producto2 = new Producto(2, "Producto 2", "Caracteristicas del producto 2", "Tipo 2", 20.49, 30);
console.log(producto1);
console.log(producto2);

// tabla venta

class Venta {
  constructor(id_venta, fecha_hora_compra, id_cliente, total_venta, metodo_pago_venta) {
    this.id_venta = id_venta;
    this.fecha_hora_compra = fecha_hora_compra;
    this.id_cliente = id_cliente;
    this.total_venta = total_venta;
    this.metodo_pago_venta = metodo_pago_venta;
  }
}

const venta1 = new Venta(1, new Date(), "Cliente123", 100.50, "Tarjeta");
console.log(venta1);

// tabla compra

class Compra {
  constructor(id_compra, metodo_pago_compra, total_compra, productos_comprados) {
    this.id_compra = id_compra;
    this.metodo_pago_compra = metodo_pago_compra;
    this.total_compra = total_compra;
    this.productos_comprados = productos_comprados;
  }
}

const compra1 = new Compra(1, "Tarjeta", 200.75, "Producto A, Producto B");
console.log(compra1);

// tabla rol

class Rol {
  constructor(id_roles, nombre_roles) {
    this.id_roles = id_roles;
    this.nombre_roles = nombre_roles;
  }
}

const rol1 = new Rol("ADMIN", "Administrativo");
console.log(rol1);


