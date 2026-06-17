let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {

    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, indice) => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${tarefa}
            <button onclick="removerTarefa(${indice})">
                ❌
            </button>
        `;

        lista.appendChild(li);
    });
}

function adicionarTarefa() {

    let input = document.getElementById("tarefa");

    if(input.value.trim() === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push(input.value);

    salvarTarefas();
    renderizarTarefas();

    input.value = "";
}

function removerTarefa(indice) {

    tarefas.splice(indice, 1);

    salvarTarefas();
    renderizarTarefas();
}

renderizarTarefas();