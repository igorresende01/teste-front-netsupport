$(document).ready(function () {
	$(".inputStyle input").on("focus", function () {
		$(this).addClass("focus");
	});

	$(".inputStyle input").on("blur", function () {
		if ($(this).val() == "") {
			$(this).removeClass("focus");
		}
	});
});

function verificarSenha() {
	const inputSenha = document.getElementById("senha").value;

	if (inputSenha === 'pinguim') {
		alert("Bem-vindo!");
	} else {
		alert("Ops ... Senha Incorreta! \n\nDica: Começa com P, vive em ambiente gelado!");
	}
}