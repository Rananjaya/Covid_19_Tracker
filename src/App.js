import React from 'react';
import {Cards,Chart,ContryPicker} from './Components';
import Styles from './App.module.css';
import {fatchData} from './api/index';


class App extends React.Component{

     state = {
        data : {},
     }
   async componentDidMount(){
        const fatchedData = await fatchData();
         
        this.setState({data: fatchedData}); 

        console.log(this.state.data);
    }
    render(){
        const { data } = this.state;
        return(
            <div className={Styles.container}>
               <Cards data={data} />
               <ContryPicker />
               <Chart />
            </div>
        )
    }
}

export default App;