import React,{Fragment} from 'react'

//Use to implement the redux to the component
//import {connect} from 'react-redux'

//Get action
//import {SampleActionCode } from '../store/actions/SampleActionCode'


const Home = () => {
    return ( 
        <Fragment>
            Welcome to Home Component
        </Fragment>

     );
}

//Connection to use the  reducer and action
/**const mapStateToProps = (state) =>{
    return{
        sampledata:state.sample.sampledatas,
       

    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    sampleaction: () => { dispatch(SampleActionCode())},

}
}

export default connect (mapStateToProps,mapDispatchToProps)(NowPlaying)**/
 
export default Home;