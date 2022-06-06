
alert('Bienvenidos Padawans a su entrenamiento Jedi');


//Simulador Batalla entrenamiento entre Padawans Rojo y Azul

let VidaPadawanRojo = 100;

let VidaPadawanAzul = 100;

let GolpeLigero = 10;

let GolpeFuerte = 30;

let Round = 0


//Funciones //

function CalcularGolpe(){
    return Math.round(Math.random()*(GolpeFuerte-GolpeLigero)+GolpeLigero);
}

function AmbosPadawansViven(){
    return VidaPadawanRojo > 0 && VidaPadawanAzul > 0;
}

function PadawanRojoVivo(){
    return VidaPadawanRojo >0
}

//Funciones //

while(AmbosPadawansViven()){
    Round+=1

    let GolpePadawanRojo = CalcularGolpe()

    let GolpePadawanAzul = CalcularGolpe()

    if (GolpePadawanRojo>GolpePadawanAzul){
        
        //Vida Padawan Azul = Vida Padawan Azul - Golpe Padawan Rojo

        VidaPadawanAzul-=GolpePadawanRojo;

        console.log("Numero De Round: " + Round);
        console.log(`Padawan Rojo golpea a Padawan Azul con una fuerza de ${GolpePadawanRojo}`);
}else{
    
        // Vida Padawan Rojo = Vida Padawan Rojo - Golpe Padawan Azul

        VidaPadawanRojo-=GolpePadawanAzul;
        console.log("Numero De Round: " + Round);
        console.log(`Padawan Azul golpea a Padawan Rojo con una fuerza de ${GolpePadawanAzul}`);

}

        console.log(`Vida Padawan Azul : ${VidaPadawanAzul}`);
        console.log(`Vida Padawan Rojo : ${VidaPadawanRojo}`);

} 

if (PadawanRojoVivo()){
    console.log("The force is strong with Padawan Rojo")
} else {
    console.log("The force is strong with Padawan Azul")
}


