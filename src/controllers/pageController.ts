import {Request, Response} from 'express'
import {createMenuObjects } from '../helpers/createMenuObjects'

export const home = (req:Request, res:Response) => {
    res.render('pages/pages',{
        menu:createMenuObjects('all'),
        banner:{
            title: "Todos os animais",
            background: 'allanimals.jpg'

        }
    })
}

export const cachorro = (req:Request, res:Response) => {
    res.render('pages/pages',{
        menu:createMenuObjects('cachorro'),
        banner:{
            title: 'Todos os cachorros',
            background: 'banner_dog.jpg'

        }
    })
}


export const gato = (req:Request, res:Response) => {
    res.render('pages/pages',{
        menu:createMenuObjects('gato'),
        banner:{
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'

        }
    })
}

export const peixe = (req:Request, res:Response) => {
    res.render('pages/pages',{
        menu:createMenuObjects('peixe'),
        banner:{
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'

        }
    })
}