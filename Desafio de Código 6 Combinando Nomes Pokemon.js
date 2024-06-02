function combinandoNomesPokemons(palavra) {
    var palavraPokemon = palavra + "saur";
    return palavraPokemon;
}

var nomeEntrada = prompt("Digite um nome para combinar com 'saur':");

var palavraGerada = combinandoNomesPokemons(nomeEntrada);

console.log(palavraGerada);

// bulba + saur = bulbasaur