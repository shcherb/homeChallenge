const axios = require('axios');

const data1 = {
  status: 200,
  statusText: '',
  headers: {},
  config: {},
  data: {
    activity: 'Go for a run',
    type: 'recreational',
    participants: 1,
    price: 0,
    link: '',
    key: '6852505',
    accessibility: 0.9,
  },
};

const data2 = {
  status: 200,
  statusText: '',
  headers: {},
  config: {},
  data: {
    activity: 'Go for a run',
    type: 'recreational',
    participants: 1,
    price: 0,
    link: '',
    key: '6852505',
  },
};

axios.get = jest.fn().mockResolvedValue(data1);
axios.get = jest.fn().mockResolvedValueOnce(data1);
axios.get = jest.fn().mockResolvedValueOnce(data2);

module.exports = axios;
