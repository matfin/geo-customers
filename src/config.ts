import { ICoordinates } from './interfaces';

interface IAppConfig {
  baseUrl: string,
  coordinates: ICoordinates,
  distanceKm: number,
}

const config: IAppConfig = {
  baseUrl: process.env.BASE_URL || 'https://s3.amazonaws.com',
  coordinates: {
    latitude: parseFloat(process.env.LAT) || 53.339428,
    longitude: parseFloat(process.env.LNG) || -6.257664,
  },
  distanceKm: parseInt(process.env.DISTANCE_KM) || 100,
};

export default config;