


let ingresarNumero = parseFloat(prompt("ingresá un número para llegar al 49"));

for (let i = 1; i <= 10; i++) {
        let resultado = ingresarNumero * i ;
        alert(ingresarNumero +" X "+ i +" = "+ resultado); 

        if (resultado == 49) {
            alert("¡Bien ahí!"); 
            break;  
        }
        
    }

   
    
    