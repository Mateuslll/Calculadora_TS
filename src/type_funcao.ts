function mudarParaMaiusculo(name:string){
    let firstLetter = name.charAt(0).toUpperCase; // pegando o primeiro caractere na posição inicial
    return firstLetter+name.substring(1);
}
