// Tu API Key de Gemini (solo para pruebas locales)
const GEMINI_API_KEY = "AIzaSyApvAc-IWUY4BMqIFGqKdrVMN8LCL4FRRM";

const analizarBtn = document.getElementById("analizarBtn");
const resultadoEl = document.getElementById("resultado");
const urlInput = document.getElementById("urlInput");

analizarBtn.addEventListener("click", async () => {
  const url = urlInput.value.trim();
  if (!url) {
    alert("Por favor ingresa un link válido");
    return;
  }

  resultadoEl.textContent = "Analizando…";

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GEMINI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gemini-1.5",
        input: [
          {
            role: "user",
            content: `Analiza esta página web: ${url}.
1) Qué contiene
2) Resumen
3) Tópicos principales
4) Elementos claves
5) Observaciones técnicas`
          }
        ]
      })
    });

    const data = await response.json();

    // Mostrar toda la respuesta si falla
    console.log(data);

    let
