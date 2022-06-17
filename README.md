<p align='left'>
    <img src='https://saasradar.b-cdn.net/wp-content/uploads/2022/03/api_rest.png' </img>
</p>

# REST API - Technical


## Objetivos del Proyecto

- Construir una API utlizando NodeJS.


## Comenzando

 1. Clonar el repo al local
 2. En el path del proyecto ejecutar `npm i`
 3. El proyecto se ejecuta en el puerto 3000 por default
 4. Para correr el servidor ejecutar `npm start`

 ## Postman
 1. Importar template de las rutas `RestApiRequest.postman_collection.json`
 2. Testear las rutas con los templates

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

## Enunciado

API Test: Diseño de un REST API en node que consuma algún servicio de internet tipo: JSONPlaceholder - Fake online REST API for developers o ABM de una DB interna (sqlite es suficiente)

  - Listar jugadores de la DB `mock`
  - Agregar / Eliminar jugadores
  - Editar jugadores

#### Base de datos

Para este proyecto se emula una DB en memoria

#### Backend

Se desarrolla un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /__:
  - Home con mensaje generico todo OK
- [ ] __GET /users__:
  - Obtener un listado de usuarios desde API externa `JSONPlaceholder`
- [ ] __GET /api/players__:
  - Obtener un listado de los jugadores desde la DB.
- [ ] __GET /api/players/{idPlayer}__:
  - Obtener el detalle de un jugador en particular
  - Debe traer solo los datos pedidos en la ruta de detalle del jugador
- [ ] __PUT /api/players/{idPlayer}__:
  - Debe recibir un objeto para editar los valores del jugador
- [ ] __POST /api/players__:
  - Debe recibir un objeto mediante el cual se creara el jugador, emula un formulario controlado
- [ ] __DELETE /api/players/{idPlayer}__:
  - Elimina de la DB el jugador cuyo ID coincida 

