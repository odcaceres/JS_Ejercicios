// Ejercicio12 : Estudiar el comportamiento del alcance o contexto funcional

function funcion1(){
    var a = 3;

    function funcion3(){
        var b = 5;

        function funcion5(){
            console.log(a, b);
        }
    }

}

function funccion2(){
    var a = 7;

    function funcion4(){
        console.log(a);
    }
}

