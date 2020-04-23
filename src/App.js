import React from 'react';
import {Cards,Chart,ContryPicker} from './Components';
import Styles from './App.module.css';
import {fatchData} from './api/index';


class App extends React.Component{

   async componentDidMount(){
        const data = await fatchData();

        console.log(data);
    }
    render(){
        return(
            <div className={Styles.container}>
               <Cards />
               <ContryPicker />
               <Chart />
            </div>
        )
    }
}

export default App;