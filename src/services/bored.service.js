const axios = require('axios');
const { BORED_API_URL } = require('../config/config');

async function getActivity() {
  const { data } = await axios.get(`${BORED_API_URL}/api/activity/`);

  return data;
}

module.exports = {
  getActivity,
};
