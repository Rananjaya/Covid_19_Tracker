import React from 'react';
import {Cards,Chart,ContryPicker} from './Components';
import Styles from './App.module.css';


class App extends React.Component{
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