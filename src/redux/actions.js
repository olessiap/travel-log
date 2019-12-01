export const handleTextChange= (e) => {
  return {
    type: "HANDLE_TEXT_CHANGE",
    payload: e
  }
}

export const addNewCity = () => {
  return {
    type: "ADD_NEW_CITY"
  }
}