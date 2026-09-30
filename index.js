
import router from './src/router/pessoa.js'
const app=express()
app.use(express.json())
const port = 3000

app.use("/api", router)









app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})