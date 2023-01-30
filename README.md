# Frontend-Rental-Series

## Poyecto Frontend Rental Series

El objetivo de este proyecto es crear la parte visual o fronted para una aplicacion de alquiler de series, donde el usuario debera ser capaz de registrarse y poder salir de la aplicacion, cuando lo desee (login/logout) y a la vez podra acceder a todos los productos que ofrece la aplicacion.

Una vez dentro de la aplicacion el usuario tendra a la disposicion una barra de busqueda en la cual podra buscar el producto que desea por el nombre o titulo.

Habra un apartado (boton de alquiler) para que cuando el usuario le de "click" pueda rentar el producto que desea.
Todo ello sera de manera visual desde el navegador.

## Descripcion

La aplicacion tendra como requisitos las siguientes vsitas:

- Vista Home/Principal
<img width="958" alt="Home" src="https://user-images.githubusercontent.com/118383591/215563161-bd8012d0-041d-4236-9f57-13687c00119c.png">

- Vista Login/Logout
- Vista Registro de usuarios


## Tecnologías

En este proyecto se han implementado las siguiente tecnologias:

- React 
Es una librería open source de JavaScript para desarrollar interfaces de usuario. Fue lanzada en el año 2013 y desarrollada por Facebook, quienes también la mantienen actualmente junto a una comunidad de desarrolladores independientes y compañías.

Al tratarse de una librería, React necesita ser acompañado de otras librerías para completar las necesidades de desarrollo de
nuestra aplicación web tales como:
1- @reduxjs/toolkit                                                              2- axios
3- dayjs                                                                         4- react
5- react-dom                                                                     6- react-jwt
7- react-redux                                                                   8- react-router-dom
9- redux-persist                                                                10- redux-thunk
11- @types/react                                                                12- @types/react-dom
13- @vitejs/plugin-react                                                        14- vite

Una de sus características más importantes es la utilización del Virtual DOM para manejar los componentes.

El DOM virtual (VDOM) es un concepto de programación donde una representación ideal o “virtual” de la IU se mantiene en memoria y en sincronía con el DOM “real”, mediante una biblioteca como ReactDOM.
Este proceso se conoce como reconciliación.

- Redux 
Es una herramienta para la gestión de estado en apps Javascript que nació en 2015 de la mano de @dan_abramov.
Se define como un contenedor predecible del estado de aplicaciones en JavaScript.

Nos sirve para disponer del estado de la aplicación de forma transversal desde todos los componentes que lo necesiten, sin importar la jerarquía que estos tengan entre ellos.

Aunque suele asociarse a React, lo cierto es que es una librería agnóstica.
Redux es un patrón de arquitectura de datos que nos ayuda a administrar los datos de la aplicación.
En resumen, Redux es una colección de buenas prácticas y patrones para manejar el estado de forma aislada, segura y sencilla.
