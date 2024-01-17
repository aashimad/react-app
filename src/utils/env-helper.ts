import AsyncStorage from '@react-native-async-storage/async-storage';
import ENV from './../constants/ENV';

export interface IENV {
  ENV: string;
  API_ENDPOINT: string;
  VERSION?: string;
  IsDefault?: boolean;
}

export const get_api_endpoint = async (url: string, isMock?: boolean) => {
  const envStorage = await AsyncStorage.getItem('env');
  let api_endpoint = '';
  if (envStorage) {
    const env = JSON.parse(envStorage);
    api_endpoint =
      (isMock && env.API_MOCK_ENDPOINT
        ? env.API_MOCK_ENDPOINT
        : env.API_ENDPOINT) + url;
    return api_endpoint;
  }
  return url;
};
export const get_env = async () => {
  const envStorage = await AsyncStorage.getItem('env');
  let environment = '';
  if (envStorage) {
    const env = JSON.parse(envStorage);
    environment = env.ENV;
    return environment;
  }
  return 'prod';
};

export const set_default_api_endpoint = async () => {
  const envStorage = await AsyncStorage.getItem('env');
  if (!envStorage) {
    const env = ENV.find((element: IENV) => {
      if (element.IsDefault) {
        return element;
      }
    });
    if (env) {
      await AsyncStorage.setItem('env', JSON.stringify({...env}));
    }
  } else {
    const env = await JSON.parse(envStorage);
    const targetEnv = ENV.find((item) => item.ENV === env.ENV);
    if (targetEnv) {
      await AsyncStorage.setItem('env', JSON.stringify({...targetEnv}));
    }
  }
};

export const set_api_endpoint = async (env: IENV) => {
  await AsyncStorage.setItem('env', JSON.stringify({...env}));
};

