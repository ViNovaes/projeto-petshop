import { Router } from 'express'
import {Request, Response} from 'express'

import * as pageController from '../controllers/pageController'
import * as souchrController from '../controllers/sourchController'

const router = Router()

//criando a rota HOME
router.get("/", pageController.home)

//criando a rota cachorro
router.get("/cachorro", pageController.cachorro)

//criando a rota gato
router.get("/gato", pageController.gato)

//criando a rota peixe
router.get("/peixe",pageController.peixe)

//rota para pesquisa
router.get ('/sourch', souchrController.sourch)


//exportando o arquivo index.ts
export default router