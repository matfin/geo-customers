import axios, { AxiosResponse, AxiosError } from 'axios';
import config from '../config';
import { ICustomer } from '../interfaces';

export const customerFromJSON = (data: string): ICustomer | null => {
  try {
    const parsed = JSON.parse(data);
    const {
      latitude, longitude, user_id, name
    } = parsed;
    
    return {
      name,
      user_id,
      location: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      }
    };
  } catch {
    return null;
  }
};

export const fetchCustomers = (resource: string): Promise<ICustomer[]> => {
  const url = `${config.baseUrl}/${resource}`;
  
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(({ data }: AxiosResponse): void => {
        const customers =
          data
            .split('\n')
            .map(customerFromJSON)
            .filter((customer: ICustomer) => customer !== null);

        resolve(customers);
      })
      .catch((error: AxiosError): void => {
        reject(error);
      });
  });
};
