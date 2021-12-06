let input = document.getElementById('input-numb');

function izracunaj(broj){
    input.value += broj;
}

function rezultat(){

    try{
        input.value=eval(input.value);
    }
    catch(err){
        alert('Nevalidna matematicka funkcija!')
    }
}

function clr(){
    input.value = "";
}
function del(){
    input.value=input.value.slice(0, -1);
}