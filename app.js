document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const encriptarButton = document.getElementById("encriptarButton");
  const desencriptarButton = document.getElementById("desencriptarButton");
  const initialFlexDiv = document.querySelector(".initialFlex");
  const newFlexDiv = document.querySelector(".newFlex");
  const resultDiv = document.getElementById("result");
  const textarea = document.getElementById("textarea");

  // Expresión regular para validar solo letras minúsculas y espacios
  const validacionRegex = /^[a-z\s]+$/;

  // Función para encriptar usada con expresiones regulares y el modificador
  // g (global)
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

  // Validar el contenido del textarea
  function validarTexto(text) {
    return validacionRegex.test(text);
  }

  // Evento para el botón Encriptar
  encriptarButton.addEventListener("click", (e) => {
    e.preventDefault();
    const textareaValor = textarea.value;

    if (validarTexto(textareaValor)) {
      const textoEncriptado = encriptar(textareaValor);
      mostrarResultado(textoEncriptado);
    } else {
      alert("El texto contiene mayúsculas o caracteres especiales no permitidos.");
    }
  });

  // Evento para el botón Desencriptar
  desencriptarButton.addEventListener("click", (e) => {
    e.preventDefault();
    const textareaValue = textarea.value;

    if (validarTexto(textareaValue)) {
      const textoDesencriptado = desencriptar(textareaValue);
      mostrarResultado(textoDesencriptado);
    } else {
      alert("El texto contiene mayúsculas o caracteres especiales no permitidos.");
    }
  });

  // Función para mostrar el resultado y cambiar la vista
  function mostrarResultado(text) {
    resultDiv.textContent = text;
    initialFlexDiv.style.display = "none";
    newFlexDiv.style.display = "flex";
  }

  // Función para mostrar el toast
  function mostrarToast(message) {
    const notifications = document.querySelector(".notifications");
    const toast = document.createElement("div");
    toast.className = "toast";

    toast.innerHTML = `
          <i class="fa-solid fa-circle-check"></i>
          <div class="content">
              <div class="title">Copiado</div>
              <span>${message}</span>
          </div>
          <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
      `;

    notifications.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");
    }, 10);

    // Ocultar el toast después de 1.5 segundos
    setTimeout(() => {
      toast.classList.remove("show");
      toast.classList.add("hide");

      // Eliminar el toast después de la animación
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 1500);
  }

  // Funcionalidad del botón copiar
  const copyButton = document.getElementById("copyButton");
  copyButton.addEventListener("click", function () {
    const textToCopy = resultDiv.textContent;
    navigator.clipboard.writeText(textToCopy).then(
      function () {
        mostrarToast("Texto copiado al portapapeles");
      },
      function (err) {
        console.error("Error al copiar el texto: ", err);
      }
    );
  });
});
