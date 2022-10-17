import axios from 'axios';
import { BORED_API_URL } from '../config/config.mjs';

export default async function getActivityService() {
  const { data } = await axios.get(`${BORED_API_URL}/api/activity/`);

  return data;
}
