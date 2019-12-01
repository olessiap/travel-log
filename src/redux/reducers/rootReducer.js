const initState = {
  cities:[
    {
      id:1,
      userId:1,
      name:"Cancun",
      body:"best things to do in Cancun is drink tequila, eat tacos, go to the beach, relax and have a great times"
    },
    {
      id:2,
      userId:1,
      name:"Playa De Carmen",
      body:"best things to do in Playa de Carmen is drink tequila, eat tacos, go to the beach, relax and have a great times"
    },
    {
      id:3,
      userId:1,
      name:"CDMX",
      body:"best things to do in CDMX is drink tequila, eat tacos, go to the beach, relax and have a great times"
    }
  ]
}

const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer