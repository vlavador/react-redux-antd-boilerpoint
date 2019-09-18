// Structure of Reducer
const initState ={sampledata:[]};
const sampleReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_SAMPLE':
            let sampledatas = action.payload
         
            
            state = {
                ...state,
                sampledata:sampledatas,
          
             }
            return state;
           
            default:
            return state;
            }

}
export default sampleReducer;