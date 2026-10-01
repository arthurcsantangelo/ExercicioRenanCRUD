import ServiceMarcas from "../service/marcas.js";
class ControllerMarcas {
    buscar(req, res) {
        try {
            const marcas = ServiceMarcas.buscar()
            res.status(200).json(marcas)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }   
    }

    buscarUm(req, res) {
        try {
            const id = req.params.id
            const marca = ServiceMarcas.buscarUm(id)
            res.status(200).json(marca)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    criar(req, res) {
        try {
            const marca = req.body.marca
            ServiceMarcas.criar(marca)
            res.status(201).json({ message: "Marca criada com sucesso" })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    alterar(req, res) {
        try {
            const id = req.params.id
            const marca = req.body.marca
            ServiceMarcas.alterar(id, marca)
            res.status(200).json({ message: "Marca alterada com sucesso" })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    deletar(req, res) {
        try {
            const id = req.params.id
            ServiceMarcas.deletar(id)
            res.status(200).json({ message: "Marca deletada com sucesso" })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default new ControllerMarcas()