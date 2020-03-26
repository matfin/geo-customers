import { ICoordinates } from './interfaces';

interface IAppConfig {
  baseUrl: string,
  coordinates: ICoordinates,
}

const config: IAppConfig = {
  baseUrl: process.env.BASE_URL || 'https://s3.amazonaws.com',
  coordinates: {
    latitude: parseFloat(process.env.lat) || 53.339428,
    longitude: parseFloat(process.env.lng) || -6.257664,
  }
} 

export default config;