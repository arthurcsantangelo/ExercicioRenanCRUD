const marcas = [
    { marca: "jontex" },
    { marca: "prudence" },
    { marca: "olla" },
    { marca: "Blowtex" },
    { marca: "hot flowers" }
]
 class Marcas {
  buscar() {
        return marcas
    }

    buscarUm (id) {
        return marcas[id]
    }

    criar (marca) {
        marcas.push({ marca })
    }

    alterar (id, marca) {
        marcas[id] = { marca }
    }
 
    deletar (id) {
        marcas.splice(id, 1)
    }
}

export default new Marcas()