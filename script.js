var valorentrada = 200;

function resumen(){
    var cantidad = document.getElementById("cant").value;
    var descuento = document.getElementById("precios").value;
    var preciofinal = cantidad * (valorentrada - (valorentrada * descuento) / 100);
    document.getElementById("totalprice").value = "Total a pagar: " + preciofinal + "$";
}