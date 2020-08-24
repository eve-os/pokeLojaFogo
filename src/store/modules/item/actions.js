export function addItem(pokemon){
    return {
        type: 'ADD_ITEM',
        pokemon
    }
}

export function removeItem(name){
    return {
        type: 'REMOVE_ITEM',
        name
    }
}

export function updateAmountItem(name, amount) {
    return{
        type: 'UPDATE_ITEM',
        name,
        amount
    }
}

export function resetItem(name){
    return {
        type: 'RESET_ITEM',
        name
    }
}