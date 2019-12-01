const initState = {
  cities:[
    {
      id:1,
      userId:1,
      title:"Cancun",
      content:"best things to do in Cancun is drink tequila, eat tacos, go to the beach, relax and have a great times"
    },
    {
      id:2,
      userId:1,
      title:"Playa De Carmen",
      content:"best things to do in Playa de Carmen is drink tequila, eat tacos, go to the beach, relax and have a great times"
    },
    {
      id:3,
      userId:1,
      title:"CDMX",
      content:"best things to do in CDMX is drink tequila, eat tacos, go to the beach, relax and have a great times"
    },
    {
      id:4,
      userId:4,
      title:"TEST",
      content:"best things to do in CDMX is drink tequila, eat tacos, go to the beach, relax and have a great times"
    }
  ],
  currentCity: {
    id:null,
    userId:null,
    title:null,
    content:null
  }
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