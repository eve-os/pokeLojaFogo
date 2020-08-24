import produce from 'immer';

export default function item(state = [], action){
    switch (action.type) {
        case 'ADD_ITEM':
            return produce(state, draft => {
                const pokemonIndex = draft.findIndex(pokemon => pokemon.name === action.pokemon.name);

                if (pokemonIndex >= 0) {
                    draft[pokemonIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.pokemon,
                        amount: 1,
                    })
                }
            });

        case 'REMOVE_ITEM':
            return produce(state, draft => {
                const pokemonIndex = draft.findIndex(pokemon => pokemon.name === action.name);
                if (pokemonIndex >= 0) {
                    draft.splice(pokemonIndex, 1);
                }
            });
        
            case 'UPDATE_ITEM': {

                if(action.amount <= 0){
                    return state;
                }
                return produce(state, draft => {
                    const pokemonIndex = draft.findIndex(pokemon => pokemon.name === action.name);
                    if(pokemonIndex >=0){
                        draft[pokemonIndex].amount = Number(action.amount);
                    }
                })
            }

            case 'RESET_ITEM': {
                if (action.type === 'RESET_ITEM') {
                  state = []
                }
                return state;
            }

        default:
            return state;
    }
}
