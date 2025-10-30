//imports



// objetos/variaveis/debug
 let TxtEspecial = {
    
 };


//codigo 
//const txt1 = document.getElementById( Txt1 )  



export function rdnText(){
    var AlfabetoNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321"
    var palavras = ["Melachi","Corva","Aventureira","Morte","Mesravin"];
    let nome = "";

    for (let i = 0; i < Math.floor(Math.random()* 10+1); i++) {
        nome += AlfabetoNum.charAt(Math.floor(Math.random()* AlfabetoNum.length));
    }

    if (Math.floor(Math.random() * 100) == 1){
        nome = palavras[Math.floor(Math.random()* palavras.length)];
    }
    return nome;
}


export function deQuem(q){
    const sou = document.getElementById(q);
    sou.innerHTML = rdnText();
}