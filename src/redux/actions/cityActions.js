export const addNewCity = (city) => {
  return (dispatch, getState) => {
    //async call to DB
    dispatch({ type:  "ADD_NEW_CITY", city:city})
  }
}

export const addNewDate= (date, cityId) => {
  return (dispatch, getState) => {
    //async call to DB
    dispatch({ type:  "ADD_NEW_DATE", date:date, cityId:cityId})
  }
}