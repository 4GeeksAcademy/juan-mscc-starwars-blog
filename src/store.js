export const initialStore=()=>{
  return{
    favourites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_favourite':

      const favourite = action.payload
      console.log(action.payload)
      return {
        ...store,
        favourites: [...store.favourites, favourite]
      };
    case 'remove_favourite':
      const favouriteToRemove = action.payload

      const updatedFavourites = store.favourites.filter((entity => entity.name != favouriteToRemove.name))
      console.log(favouriteToRemove)
      console.log(updatedFavourites)
      return {
        ...store,
        favourites: updatedFavourites
      }
      
    default:
      throw Error('Unknown action.');
  }    
}
