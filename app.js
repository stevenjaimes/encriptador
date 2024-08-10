document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const encriptarButton = document.getElementById("encriptarButton");
  const desencriptarButton = document.getElementById("desencriptarButton");
  const initialFlexDiv = document.querySelector(".initialFlex");
  const newFlexDiv = document.querySelector(".newFlex");
  const resultDiv = document.getElementById("result");

  // Función para encriptar
  function encriptar(text) {
    return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }

  // Función para desencriptar
  function desencriptar(text) {
    return text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }

  // Evento para el botón Encriptar
  encriptarButton.addEventListener("click", (e) => {
    e.preventDefault();
    const textareaValor = document.getElementById("textarea").value;
    const textoEncriptado = encriptar(textareaValor);
    mostrarResultado(textoEncriptado);
  });

  // Evento para el botón Desencriptar
  desencriptarButton.addEventListener("click", (e) => {
    e.preventDefault();
    const textareaValue = document.getElementById("textarea").value;
    const textoDesencriptado = desencriptar(textareaValue);
    mostrarResultado(textoDesencriptado);
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
