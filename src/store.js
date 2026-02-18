export const initialStore=()=>{
  return{
    favourites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_favourite':

      const favourite = action.payload

      return {
        ...store,
        favourites: [...store.favourites, favourite]
      };
    default:
      throw Error('Unknown action.');
  }    
}
