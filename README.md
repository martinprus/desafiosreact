## Entrega proyecto final: React JS

### Alumno: Martín Prus

---

#### Descripción del proyecto

El proyecto final del curso consiste en una pagina de e-commerce navegable y funcional aplicando los conocimientos adquiridos, como pueden ser:

- Componentes
- Eventos y funciones
- Hooks (useState y useEffect)
- Routing (react-dom)
- Context
- Renderizado condicional
- Uso de APIs y bases de datos (Firebase)

---

#### Componentes del sitio

##### Barra de navegación

La imagen que dirije a la página principal y luego la lista de links generada dinamicamente sobre la base de datos de los productos filtrando duplicados. Cada link dirije a la categoría seleccionada usando un _NavLink_ de _react-router-dom_.

También se encuentra el **CartWidget** que utilizando los elementos cargados en el carrito mediante _context_ indica al usuario la cantidad de productos que hay en su carrito de compras.
El mismo también cuenta con un link que dirije al carrito.

##### Principal/Main

La parte mas importante del sitio con las rutas cargadas mediante react-router-dom para que se comporte como una _Single Page Application_.

Las rutas utilizadas son:

- **ItemListContainer** : Muestra todo el catalogo de productos (Items) si no hay ninguna categoria seleccionada ("/") cuando se selecciona alguna categoría filtra los productos y realiza un mapping para mostrar solo que corresponda.
  Cada componente item es generado a partir de la base de datos alojada en firebase.

- **ItemDetailContainer** : Cuando se elije un producto desde ItemListContainer utilizando el boton "Comprar" se abre el detalle del mismo para que el usuario pueda elegir la cantidad a comprar y agregarlo al carrito. Los datos son obtenidos filtrando la base de productos para que muestre solo el _ID_ del producto seleccionado.
  Una vez agregado el producto al carrito el botón de agregar se convierte en un link para que el usuario pueda ir directamente a finalizar la compra, aunque si prefiere puede seguir agregando productos al carrito.

- **Cart** : El carrito es la etapa final del proceso de compra y cumple dos funciones. - Mostrar al cliente todos los productos de su compra, cantidad de cada uno, precio total por producto y monto acumulado. Todas estas operaciones son realizadas en el **CartContext** a medida que se agregan productos y se muestran en esta sección gracias a _useContext_. Cada producto tiene el botón para borrarlo del carrito y también se ofrece la opción de eliminar todos los elementos del mismo. Cuando el carrito esta vacío muestra un mensaje y un link para volver a la página de compra. - Cuando el usuario está conforme con su compra y presiona el botón **"Realizar checkout"** aparece un menú para que cargue sus datos personales y confirme la compra. Una vez realizada esta operación se le muestra una alerta con el numero de ID de su orden y la misma es enviada a la base de datos de firebase a una nueva colección donde se almacenan las ordenes realizadas.

##### Footer

Se utiliza un footer genérico solo a fines estéticos.


#### Resumen

Esta es una breve explicación del proyecto realizado, que es la suma de los desafíos y entregas intermedias que se hicieron aplicando lo visto en clase.