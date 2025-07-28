function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nome || nome.length < 3) {
        alert("Por favor, insira um nome v�lido (m�nimo 3 caracteres).");
        return false;
    }

    const regexEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail v�lido.");
        return false;
    }

    alert("Conta criada com sucesso! Verifique seu e-mail.");
    return true;
}
