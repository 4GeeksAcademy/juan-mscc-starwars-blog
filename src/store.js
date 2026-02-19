export const initialStore=()=>{
  return{
    favourites: [],
    favIcon: 'regular'
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_favourite':

      const favourite = action.payload
      console.log(action.payload)
      return {
        ...store,
        favourites: [...store.favourites, favourite],
        favIcon: 'solid'
      };
    case 'remove_favourite':
      const favouriteToRemove = action.payload

      const updatedFavourites = store.favourites.filter((entity => entity.name != favouriteToRemove.name))

      return {
        ...store,
        favourites: updatedFavourites,
        favIcon: 'regular'
      }
      
    default:
      throw Error('Unknown action.');
  }    
}
