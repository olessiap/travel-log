export const handleTextChange= (e) => {
  return {
    type: "HANDLE_TEXT_CHANGE",
    payload: e
  }
}

export const addNewCity = (city) => {
  return (dispatch, getState) => {
    //async call to DB
    dispatch({ type:  "ADD_NEW_CITY", city:city})
  }
}