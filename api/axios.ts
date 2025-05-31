import axios from 'axios';
import { Platform } from 'react-native';

const baseURLs = {
  android: 'http://expo-community-server.sunghoyaaa.com',
  ios: 'http://expo-community-server.sunghoyaaa.com',
};

export const axiosInstance = axios.create({
  baseURL: Platform.OS === 'ios' ? baseURLs.ios : baseURLs.android,
  headers: {
    'Content-Type': 'application/json',
  },
});
