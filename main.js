var costoLlamada, costoMinuto, tiempo;

costoMinuto = prompt("Por favor, ingresa el pago por minuto");
tiempo = prompt("Por favor, ingresa los minutos de llamada");


costoLlamada = parseFloat(costoMinuto) * parseFloat(tiempo);


alert(costoLlamada);