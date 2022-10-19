import { Router } from 'express'
import {Request, Response} from 'express'

const router = Router()

//criando a rota HOME
router.get("/",(req:Request,res:Response) =>{
    res.send("ROTA HOME FUNCIONANDO")
})

//criando a rota cachorro
router.get("/cachorro",(req:Request,res:Response) =>{
    res.send("blablabla")
})

//criando a rota gato
router.get("/gato",(req:Request,res:Response) =>{
    res.send("blablablablablabla")
})

//criando a rota peixe
router.get("/peixe",(req:Request,res:Response) =>{
    res.send("blablablablablablablablabla")
})


//exportando o arquivo index.ts
export default router