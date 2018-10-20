import people from './people.json'; 

//always need to set the initialState first
const initialState = {
  // people: people
  people, //es6
}
//first reducer ... the app now can use the people.json data 
export default (state = initialState, action )=>{
   switch(action.type){
     default: 
        return state
   }
}