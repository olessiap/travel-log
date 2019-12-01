export const addNewCity = (city) => {
  return (dispatch, getState) => {
    //async call to DB
    dispatch({ type:  "ADD_NEW_CITY", city:city})
  }
}