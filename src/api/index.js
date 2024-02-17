import axios from 'axios';

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (type,sw,ne) => {
    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw?.lat,
              tr_latitude: ne?.lat,
              bl_longitude: sw?.lng,
              tr_longitude: ne?.lng,
            },
            headers: {
              'X-RapidAPI-Key': '79def42624msh8b314e3f33289d4p127477jsnf78ab0e278f0',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    } catch(error){
        console.log(error)
    }
}

export const getWeatherData = async({lat,lon}) => {
  console.log('first',lat)
  try{
    if(lat && lon)
   { const {data} = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lon}`,
      {
        headers: {
          'X-RapidAPI-Key': '79def42624msh8b314e3f33289d4p127477jsnf78ab0e278f0',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
      }
    )}
    return data;
  }catch(error){
    console.log(error)
  }
}