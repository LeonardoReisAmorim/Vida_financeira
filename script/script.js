function enviar(){
    salario = document.getElementById("salario").value; 
    let gastos_necessarios = 0.5;
    let gastos_pessoais_e_lazer = 0.3;
    let reserva = 0.2;
    if(salario == ""){
        alert("preeencha os dados");
    }else{
        gastos_necessarios = salario * gastos_necessarios;
        gastos_pessoais_e_lazer = salario * gastos_pessoais_e_lazer;
        reserva = salario * reserva;
        if(isNaN(gastos_necessarios) || isNaN(gastos_pessoais_e_lazer) || isNaN(reserva)){
            alert("digite seu salario novamente");
        }else{
            document.getElementById("gastos_necessarios").innerHTML = gastos_necessarios;

            document.getElementById("gastos_pessoais_e_lazer").innerHTML = gastos_pessoais_e_lazer;

            document.getElementById("reserva").innerHTML = reserva;
        }
        
        
    }
}

