# Sistema de gestión de partidos de fútbol 

## Tecnologias:
#### Backend:
- Python
- Flask
- Mysql
- DDD

#### Backend:
- Next.js
- TypeScript
- React-Context
- Material-UI

#### Contenedores:
- Docker

#Contexto
Se solicito realizar un sistema de gestión de partidos de fútbol con amigos.
En el cual se debia poder realizar las siguientes acciones:

- Ingresar/editar/eliminar/listar equipos
- Ingresar/Editar/eliminar/listar jugadores de equipo
- Ingresar/Editar/eliminar/listar resultado_de_partidos

- Reporte de partidos
- Reporte de equipos
- Envio de Email para notificar los partidos que se juegan
- Persistencia en base de datos (MYSQL)

Para ello se abordo a resolver la problematica, se decididio dividir el proyecto en 3 partes.
### Front-End
Para la parte visual, se desarrollo una aplicacion Web, desarrollada en Next.js Utilizando Typescript, Axios, Material UI y React-Context. 
(No se va entrar en detalle de como esta contruido la aplicacion). 

### Back-End
Como la aplicacion requeria poder persistir informacion, se opto por desarrollar una API-REST utilizando Python y Flask, utilizando los patrones de diseño  DDD Y Hexagona.

#### Stack
Para facilitar el despliegue del sistema de gestion, se opto por utilizar Docker. 
El cual facilita realizar los depligues de la aplicacion en diferentes tipos de entorno.
Servidores de produccion, pre-produccion y en ambientes locales para desarrollo.
Permitiendo de esta forma, realizar los despliegues de la aplicacion de forma sencilla. 


## Estructura de Back-End
Para el desarrollo del backend, se utilizo una aqutiectura llamado DDD (domain-driven design).
Es un enfoque para el desarrollo de software con necesidades complejas mediante una profunda conexión entre la implementación y los conceptos del modelo y núcleo del negocio.
El DDD no es una tecnología ni una metodología, este provee una estructura de prácticas y terminologías para tomar decisiones de diseño que enfoquen y aceleren el manejo de dominios complejos en los proyectos de software.
Ventajas de usar domain-driven design:

·        Comunicación efectiva entre expertos del dominio y expertos técnicos a través de Ubiquitous Language.
·        Foco en el desarrollo de un área dividida del dominio (subdominio) a través de Bounded Context’s.
·        El software es más cercano al dominio, y por lo tanto es más cercano al cliente.
·        Código bien organizado, permitiendo el testing de las distintas partes del dominio de manera aisladas.

Para ello se opto por realizar la siguiente estrcutura de carpetas.

```bash
├── src
│   ├── apps
│   ├── contexts
└── test
    ├── apps
    └── contexts
```


Actualmente la carpeta test, no existe, pero la arquitectura fue planeado para que sea 100% testeable, realizando UnitTesting, Integration Testing y EndToEnd Testing.

En el cual dentro de la carpeta Apps, se van a poder realizar test de caja negra o E2E (end to end) en el cual, se va querer probar una funcionalidad de la aplicacion desde el punto mas externo sin conocer la implementacion que hay por detras.
Mientras que en la carpeta Context, se va a pdoer realizar test unitarios, o test de integracion. 

#### Bounded Context
dentro de la carpeta src/context, agregamos nuestro bounded context en el cual va a tener todos los modelos de nuestra aplicacion.
```
├── src
│   ├── apps
│   ├── contexts
│   │   ├── footballs
│   │   │   ├── matchResults
│   │   │   ├── players
│   │   │   ├── shared
│   │   │   └── teams
│   │   └── shared
│   │       └── infraastructure
```

A esto tambien existe una carpeta Shared, en el cual se va a encontrar ciertos elementos que se comparten entre los diferntes dominio.


```
├── footballs
│   ├── matchResults
│   │   ├── applications
│   │   ├── domain
│   │   └── infraestructure
│   │       └── persistence

```

Internamente cada Modelo, va a tener implementando una arquitectura Hexagonal, el cual va a contener las siguientes 3 capaz. 
- Infraestructura
- Aplicacion
- Dominio.


![Arch Hexagonal](https://miro.medium.com/max/1400/1*yR4C1B-YfMh5zqpbHzTyag.png "Arch Hexagonal")

En la capa de infrastrctura se encuentra todo lo relacionado a persistencia, en este caso la implmentacion de base de datos.

En la capa de aplicacion se encuentra todos nustros casos de uso, como crear un Jugador, Eliminar, Buscar, Etc.

Mientras en que nuestro dominio, se encuentra Nuestras entidades.

Utilizando esta arquitectura, el codigo se hace mas escalable y propenso a los cambios, ya que 
solo las capas mas externa, puede conocer a sus capas mas interna.
De tal forma de que si en algun momento hay que modificar uan capa mas externa, la capa interna no deberia por que enterarse de dicha modificacion.

Ejemplo, si en algun momendo hay que modificar como se guarda los datos, ya sea por base de datos, txt, etc.
Mis casos de uso o mi dominio no deberia por que enterarse.


##### Apps
```
├── apps
│   └── footballs
│       └── backend
│           ├── controller
│           ├── dependency_injection
│           └── routers
```


Dentro de la carpeta apps, se va a encontrar todo lo relacionado al servidor http, aplicaciones y los controladores.
Dentro de la carpeta router, se encuentra todos nustros EP (End-Point).
Hay una carpeta tambien, de inejeccion de depedencia, el cual instancia difernte Objetos y se lo pasa a los controller para poder funcionar correctamente.

En esta carpeta, es donde se hace la injeccion de las implementaciones como Mysql, Persistencia de datos en archivos, o el servicio de notificacion que haya. (Email, Whatsapp, Slack, etc)

En resumen.
Utilizando esta arquitectura se puede escalar rapidamente, ser 100% testeable, ser propenso a los cambios .
