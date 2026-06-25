async function askAI() {

    const question =
        document.getElementById("question").value.trim();

    const responseDiv =
        document.getElementById("response");

    if (!question) {
        responseDiv.innerHTML =
            "Digite uma pergunta.";
        return;
    }

    responseDiv.innerHTML =
        "Consultando IA...";

    try {

        const response = await fetch(
            "https://SEU-BACKEND.onrender.com/api/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question
                })
            }
        );

        const data = await response.json();

        responseDiv.innerHTML = data.answer;

    } catch (error) {

        console.error(error);

        responseDiv.innerHTML =
            "Erro ao consultar a IA.";
    }
}
