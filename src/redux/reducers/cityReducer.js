const initState = {
  cities:[
    {
      id:1,
      userId:1,
      date: "11/11/11",
      title:"Cancun",
      content:"best things to do in Cancun is drink tequila, eat tacos, go to the beach, relax and have a great times"
    },
    {
      id:2,
      userId:1,
      title:"Playa De Carmen",
      content:"best things to do in Playa de Carmen is drink tequila, eat tacos, go to the beach, relax and have a great times"
    },
  ]
}

const cityReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_NEW_CITY":
      return {
        ...state,
        cities: [...state.cities, action.city]
      }
    default: return state 
  }
}

export default cityReducer