const axios = require ('axios');
const config = require('../config/myConfig.js');
const TOKEN = config.token;
const API = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/`;

const getReviews = (params, callback) => {
  const route = API + `reviews/`;
  axios.get(route, {headers:
    {Authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

module.exports = {getReviews};