const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(".card")
    .forEach(card => {

        const text = card.dataset.name.toLowerCase();

        card.style.display =
            text.includes(value)
            ? "block"
            : "none";
    });
});


async function askAI() {

    const question =
        document.getElementById("question").value;

    const responseDiv =
        document.getElementById("response");

    responseDiv.innerHTML = "Consultando IA...";

    try {

        const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=SUA_API_KEY",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                contents:[
                    {
                        parts:[
                            {
                                text:question
                            }
                        ]
                    }
                ]
            })
        });

        const data = await response.json();

        responseDiv.innerHTML =
        data.candidates[0].content.parts[0].text;

    } catch(error){

        responseDiv.innerHTML =
        "Erro ao consultar a IA.";
    }
}
