function askRolyfeAI() {

    const question =
        document.getElementById("aiQuestion").value;

    let response = "";

    if(question === ""){
        response = "Please enter a question.";
    } else {

        response =
        "RO'Lyfe AI received your question:\n\n" +
        question +
        "\n\nFuture versions will analyze this using AI.";

    }

    document.getElementById("aiAnswer").innerText = response;

}
