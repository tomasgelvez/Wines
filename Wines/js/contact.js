
document.getElementById("formulario-reserva").addEventListener("submit", function(e){
    const getTitular = $("#titularReserva").val();
    const getEmail = $("#emailIngresado").val();
    const getInvitado1 = $("#invitado1").val();
    const getInvitado2 = $("#invitado2").val();
    const getInvitado3 = $("#invitado3").val();
    const getInvitado4 = $("#invitado4").val();
    const getDate = $("#date").val();
    e.preventDefault();

    console.log(getTitular)
    console.log(getEmail)
    console.log(getInvitado1)
    console.log(getInvitado2)
    console.log(getInvitado3)
    console.log(getInvitado4)
    console.log(getDate)
})