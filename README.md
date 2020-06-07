# Proyecto final DWFS Acamica

Creado en NodeJs. El proyecto Delilah Restó es una API backend. El la cual permite agregar Usuarios, Productos y Ordenes(Pedidos) para un restaurante.

## Desarrollado por:
Carlos Posada\
Carlosposadat@gmail.com

## Instalación proyecto

# Instalacion proyecto

### Instalacion NODE modules
Por favor realizar los siguientes pasos para inicializar node en el proyecto para instalar las dependencias requeridas.

```bash
npm install
```

### Instalacion Base de datos

Correr el siguiente script en tu base de datos SQL, este se encuentra que estan en la carpeta:
```
scripts\createdatabase.sql
```
Este contiene ademas de creacion de tablas, la creación por defecto de un usuario de administración de la plataforma.

los datos de este usuario son:

```
Usuario: super-admin
Contraseña: admin123
```
Este script ya tiene por defecto creados los estados de orden:

```sql
VALUES('Nuevo'),('Confirmado'),('Cancelado'),('Preparando'),('Enviando'),('Entregado')
```
y las formas de pago:

```sql
VALUES('Credito'),('Debito'),('Efectivo')
```

# Configuración de Base de datos
Cuando este terminada la instalacion de la base de datos debe ingresar a:
```
config\configDB.js
```
En esta ubicacion se encuentra configurado por defecto el servidor de pruebas, pero puedes ingresar tu datos para cambiarlos de la siguiente manera :

```js
const bd_name= 'tu_database'; // nombre de tu base de datos;
const bd_user= 'tu_usuario'; // nombre de tu usuario;
const bd_password= 'tu_password'; // contraseña de tu usuario;
const bd_host= 'tudominio.com'; // Hosting;
const bd_port= '3306'; // Numero de Puerto;
```


### Ejecución del servidor
Para inicializar el servidor solo debes correr en tu terminal:

```bash
node index.js
```

### Test Api
Para hacer pruebas de la api, puedes usar Postman con el archivo que se encuentra en
```
scripts/DelilaBistro_final.postman_collection.json
```
en este se muestra la estructura correcta para cada peticion a la API.

**En el archivo de postman se encuentra**
1. Usuarios
 - Crear usuario 
 - Login
 - Ver todos usuarios (solo quien sea superadmin)

2. Productos
 - Crear producto (solo quien sea superadmin)
 - Editar producto (solo quien sea superadmin)
 - Eliminar producto (solo quien sea superadmin)
 - Ver todos los productos.
 - Ver producto por ID.
 
3. Ordenes
- Ingresar orden
- Editar estado de la orden (solo quien sea superadmin)
- Ver orden por Id (solo quien sea superadmin)
- Ver todas las ordenes (solo quien sea superadmin)

Eso es todo.

# Checklist Acamica

Si eres evaluador de Acamica en este proyecto se valido el siguiente Checklist:

- [X] Condición 1: poder registrar un nuevo usuario.
- [X] Condición 2: un usuario debe poder listar todos los productos disponibles.
- [X] Condición 3: un usuario debe poder generar un nuevo pedido al restaurante con u listado de platos que desea.
- [X] Condición 4: el usuario con roles de administrador debe poder actualizar el estado del pedido.
- [X] Condición 5: un usuario con rol de administrador debe poder realizar las acciones de creación, edición y eliminación de recursos de productos (CRUD de productos).
- [X] Condición 6: un usuario sin roles de administrador no debe poder crear, editar o eliminar un producto, ni editar o eliminar un pedido. Así como no debe poder acceder a informaciones de otros usuarios.

GRACIAS!

Si tienen alguna duda pueden escribir a:\
**carlosposadat@gmail.com**