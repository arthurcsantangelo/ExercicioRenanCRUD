import express from 'express'
import router from './src/router/marcas.js'
const app=express()
app.use(express.json())
const port = 3000

app.use("/api", router)

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})