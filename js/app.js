function actualizarHora() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let AMoPM = horas >= 12 ? "PM" : "AM";
    
    horas = horas % 12;
    horas = horas ? horas : 12;

    
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    

    let horaCompleta = horas + ":" + minutos + ":" + segundos + " " + AMoPM;
    document.getElementById("reloj").innerHTML = horaCompleta;
    
    let dia = fecha.getDay();
    let diaSemana;
    
    switch (dia) {
      case 0:
        diaSemana = "Domingo";
        break;
      case 1:
        diaSemana = "Lunes";
        break;
      case 2:
        diaSemana = "Martes";
        break;
      case 3:
        diaSemana = "Miércoles";
        break;
      case 4:
        diaSemana = "Jueves";
        break;
      case 5:
        diaSemana = "Viernes";
        break;
      case 6:
        diaSemana = "Sábado";
        break;
    }
    
    let mes = fecha.toLocaleString('es', { month: 'long' });
    let año = fecha.getFullYear();
    let fechaCompleta = diaSemana + " " + fecha.getDate() + " de " + mes + " de " + año;
    document.getElementById("fecha").innerHTML = fechaCompleta;
    
  }

  
  setInterval(actualizarHora, 1000);
