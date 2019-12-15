const initState = {
  cities:[
    {
      cityName:"Cancun",
      id:1,
      days: [
        {
          date: '11/12/2020',
          activity:[
            ["activity1"],
            ["activy2"],
            ["activity3"]
          ]
        },
        {
          date: '06/11/1909',
          activity: [
            ["another piece of content here!"],
            ["activity2"],
            ["activity3"],
          ]
        }
      ]
    },
    {
      cityName:"Tulum",
      id:2,
      days: [
        {
          date: '11/13/2021',
          activity:[
            ["Tulum activity - best things to do in Cancun is drink tequila, eat tacos, go to the beach, relax and have a great times"],
            ["activy2"],
            ["activity3"]
          ]
        },
        {
          date: '06/12/1939',
          activity: [
            ["Tulum activity = another piece of content here!"],
            ["activity2"],
            ["activity3"],
          ]
        }
      ]
    }
  ]
}
   // {
    //     id:1,
    //     userId:1,
    //     title:"Cancun",
    //     content:"best things to do in Cancun is drink tequila, eat tacos, go to the beach, relax and have a great times"
    //   },
    // {
    //   id:2,
    //   
    //   title:"Playa De Carmen",
    //   content:"best things to do in Playa de Carmen is drink tequila, eat tacos, go to the beach, relax and have a great times"
    // },


const cityReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_NEW_CITY":
      return {
        ...state,
        cities: [...state.cities, action.city]
      }
    case "ADD_NEW_DATE":
      console.log(action)
      const newState = state
      let city = newState.cities.filter(item => {
       return item.id == action.cityId
      })
      console.log(city) 
      let test = city.push(action.date)
      console.log(test)
      console.log(newState[city[0]])
      return {
          ...state,
          cities:{
            ...state.cities,
            da:state.cities.map(item => {
              if(item.id === action.cityId) {
                return {
                  ...item,
                  days: [
                    action.date
                  ]
                }
              }
            })
        }
      }
    default: return state 
  }
}

export default cityReducer