CREATE DATABASE master_delilaBistro;
USE master_delilaBistro;

-- Creacion tabla de usuarios
CREATE TABLE usuarios(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    esAdmin BOOLEAN NOT NULL
);

-- Crear usuario super admin
INSERT INTO usuarios(
    usuario,
    nombre,
    correo,
    telefono,
    direccion,
    contrasena,
    esAdmin
)
VALUES(
    'super-admin',
    'administrador',
    'admin@admin.com',
    '5555555',
    'Adress 000 No 00-00',
    'admin123',
    TRUE
);
-- Creacion tabla de Forma de pago
CREATE TABLE formaPago(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipoDePago VARCHAR(255) NOT NULL
);
-- Insertar Formas de pago en tabla de Forma de pago
INSERT INTO formaPago(tipoDePago)
VALUES('Credito'),('Debito'),('Efectivo');

-- Creacion tabla de Estados de los pedidos
CREATE TABLE estadoPedido(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(255) NOT NULL
);

-- Insertar estados en tabla de estado de los pedidos
INSERT INTO estadoPedido(estado)
VALUES('Nuevo'),('Confirmado'),('Cancelado'),('Preparando'),('Enviando'),('Entregado');

-- Creacion tabla de Productos
CREATE TABLE productos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombreProducto VARCHAR(255) NOT NULL,
    precio INT NOT NULL,
    imagenUrl VARCHAR(255) NOT NULL
);

-- Creacion ordenes
CREATE TABLE ordenes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT,
    idFormaPago INT,
    idEstado INT,
    FOREIGN KEY(idUsuario) REFERENCES usuarios(id),
    FOREIGN KEY(idFormaPago) REFERENCES formaPago(id),
    FOREIGN KEY(idEstado) REFERENCES estadoPedido(id),
    horaCreacion DATE NOT NULL,
    fechaCreacion DATE NOT NULL,
    fechaActualizacion DATE NOT NULL
);

-- Creacion ordenes por producto
CREATE TABLE ordenes_producto(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idOrden INT,
    idProducto INT,
    FOREIGN KEY(idOrden) REFERENCES ordenes(id),
    FOREIGN KEY(idProducto) REFERENCES productos(id),
    cantidadProductos INT
);
