import Marca from '../model/marcas.js'
 
class ServiceMarca {
  Buscar() {
    return marca.Buscar()
  }
 
  BuscarUm(id) {
    if (id === undefined || isNaN(id)) {
      throw new Error('Favor informar somente números')
    }
 
    const marca = Marca.BuscarUm(id)
    if (marca === undefined) {
      throw new Error('Marca não encontrada')
    }
 
    return marca
  }
 
  Criar(marca) {
    if (!marca) {
      throw new Error('Favor informar a marca')
    }
 
    Marca.Criar(marca)
  }
 
  Alterar(id, marca) {
    if (id === undefined || isNaN(id) || !marca) {
      throw new Error('Favor informar todos os dados')
    }
 
    if (Marca.BuscarUm(id) === undefined) {
      throw new Error('Marca não encontrada')
    }
 
    Marca.Alterar(id, marca)
  }
 
  Delete(id) {
    if (id === undefined || isNaN(id)) {
      throw new Error('Favor informar o Id corretamente')
    }
 
    if (Marca.BuscarUm(id) === undefined) {
      throw new Error('Marca não encontrada')
    }
 
    Marca.Delete(id)
  }
}
 
export default new ServiceMarca()
 
 