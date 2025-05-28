import axios from 'axios';
import { Platform } from 'react-native';

const baseURLs = {
  android: 'http://192.168.219.103:3030',
  ios: 'http://192.168.219.103:3030',
};

export const axiosInstance = axios.create({
  baseURL: Platform.OS === 'ios' ? baseURLs.ios : baseURLs.android,
  headers: {
    'Content-Type': 'application/json',
  },
});
