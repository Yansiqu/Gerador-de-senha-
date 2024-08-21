document.getElementById("meuBotao").addEventListener("click", function() {
    alert("Botão clicado!");
});
document.getElementById("meuBotao").addEventListener("click", function() {
    const senha = gerarSenha(12); 
    document.getElementById("senhaGerada").value = senha;
});

function gerarSenha(tamanho) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }
    return senha;
}
