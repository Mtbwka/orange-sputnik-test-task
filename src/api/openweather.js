import axios from 'axios';

const apiKey = '9ebd249c76a6b433120af285df7c91bf';

const api = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast?APPID=${apiKey}&units=metric&q=`
});
api.defaults.trailingSlash = false;
