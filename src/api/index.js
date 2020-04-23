import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fatchData = async () => {
   try {
       const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        
        // const modifiedData = {confirmed, recovered, deaths, lastUpdate,}



       return {confirmed, recovered, deaths, lastUpdate};

       //Console.log(response);
   } catch (error) {
       
   }
}