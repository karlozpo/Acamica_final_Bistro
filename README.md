# Proyecto final DWFS Acamica

Este proyecto se trata de una web api realizada en nodejs.

## Tareas pendientes
- [X] Crear tablas y sus relaciones
- [X] Crear estructura del proyecto en nodejs
- [ ] Crear archivo yaml
- [X] Crear modelo usuario
- [X] Crear route usuario
- [X] Crear modelo producto
- [X] Crear route producto
- [X] Crear modelo orden
- [X] Crear route orden
- [X] Verificar archivo postman

# Checklist Acamica
- [X] Condición 1: poder registrar un nuevo usuario.
- [X] Condición 2: un usuario debe poder listar todos los productos disponibles.
- [X] Condición 3: un usuario debe poder generar un nuevo pedido al restaurante con u listado de platos que desea.
- [X]Condición 4: el usuario con roles de administrador debe poder actualizar el estado del pedido.
- [x] Condición 5: un usuario con rol de administrador debe poder realizar las acciones de creación, edición y eliminación de recursos de productos (CRUD de productos).
- [X]Condición 6: un usuario sin roles de administrador no debe poder crear, editar o eliminar un producto, ni editar o eliminar un pedido. Así como no debe poder acceder a informaciones de otros usuarios.


## Instalacion proyecto

### Instalacion NODE modules
Por favor realizar los siguientes pasos para inicializar node en el proyecto

```bash
npm install
```

### Instalacion Base de datos

Correr los siguientes scripts para crear la BD:

```sql
CREATE TABLE(
    id INT NOT NULL AUTO_INCREMENT,
)
```
___
> Ejemplo **texto** resaltado
