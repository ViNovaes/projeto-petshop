// Para ativar o menu
type menuOptions = '' | 'all' | 'cachorro' | 'gato' | 'peixe'

export const createMenuObjects = (activeMenu: menuOptions) =>{
    let returnObject = {
        all:false,
        cachorro:false,
        gato:false,
        peixe:false
} 
    if (activeMenu !== ''){
        returnObject[activeMenu] = true
}

    return returnObject
}