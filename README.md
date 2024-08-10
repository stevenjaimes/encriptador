# 🛡️ Encriptador: Tu herramienta de Encriptación personal

## 📋 Tabla de contenido

1. 📜 [Introduction](#Descripción)
2. 🔋  [Catacterísticas](#Características)
3. 🛠️ [Tecnologías utilizada](#TecnologíasUtilizadas)
4. 🔧 [Clona el repositorio](#Clona)
5. 📷 [Capturas de pantalla](#Capturas)
6. 🚀 [Como se usa](#Uso)
7. 🌠 [Funciones de Javascript](#Funciones)
8. 🤝 [Contribución](#Contribución)
9. 📜 [Licencia](#Licencia)
10. 🌐 [Contacto](#Contacto)

## 📜 Descripción

Encriptado es una herramienta simple pero poderosa para encriptar y desencriptar mensajes, diseñada para proteger tu información confidencial. 


## 🚀 Características

Encriptación segura utilizando algoritmos robustos.
Desencriptación fácil para recuperar tus mensajes.
Interfaz amigable y fácil de usar.


## 🛠️ Tecnologías Utilizadas

Lenguaje: Javascript

Estilos: CSS

Versionado: Git


## 🔧 Clona el repositorio

 ```bash
   git clone https://github.com/stevenjaimes/encriptador.git
   cd encriptador
   ```


## 📷 Capturas de Pantalla

### ¡Mira cómo luce! 👇

<div align="center">
  <h2 align="center">Encriptado</h2>
  <img src="/assets/pantallazo1.png" alt="Seguridad encriptado en acción" width="100%"/>
  <h2 align="center">Desencriptador</h2>
  <img src="/assets/pantallazo2.png" alt="Interfaz Seguridad Encriptado" width="100%"/>
  <h2 align="center">Diseño Responsivo</h2>
  <img src="/assets/pantallazo3.png" alt="Interfaz Seguridad Encriptado" width="100%"/>
</div>


## 🚀 Uso

### Encriptar un mensaje:

Escribe o carga tu mensaje en el campo de texto.

Haz clic en "Encriptar".

¡Listo! Tu mensaje ahora está seguro.

### Desencriptar un mensaje:

Copia el mensaje encriptado.

Pegalo en la caja de texto

Da click en "Desencriptar" para ver el mensaje original.

## 🌠 Funciones de Javascript Utilizadas

### Funciones para encriptar y desencriptar texto usando expresiones regulares
```javascript
function encriptar(text) {
    return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }

  // Función para desencriptar usada con expresiones regulares y el modificador
  // g (global)
  function desencriptar(text) {
    return text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }
```

### Funciones para validar los datos usando regex
```javascript
const validacionRegex = /^[a-z\s]+$/;
 // Validar el contenido del textarea
  function validarTexto(text) {
    return validacionRegex.test(text);
  }
```

## 🧑‍💻 Contribución

Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o enviar un pull request.

Haz un fork del proyecto.

Crea una nueva rama (git checkout -b mi-nueva-rama).

Realiza tus cambios.

Envía un pull request.


## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.


## 🌐 Contacto

Nombre: Henry Steeven Jaimes Bastos

Correo: hensteve250@gmail.com

LinkedIn: linkedin.com/in/steven-jaimes-0767a2205/

GitHub: github.com/stevenjaimes

