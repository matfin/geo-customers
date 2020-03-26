import axios, { AxiosResponse, AxiosError } from 'axios';
import { customerFromJSON, fetchCustomers } from './api';

const axiosResponse: AxiosResponse = {
  config: {},
  headers: {},
  status: 200,
  statusText: 'ok',
  data: `
    {"latitude": "1.234", "user_id": 1, "name": "Matt", "longitude": "2.345"}
    {"latitude": "5.678", "user_id": 2, "name": "Leah", "longitude": "6.789"}
  `,
};

const axiosError: AxiosError = {
  config: {},
  isAxiosError: true,
  name: 'test',
  message: 'Error',
  toJSON: () => () => {}
};

jest.mock('axios');

describe('api tests', () => {
  describe('fetchCustomers', () => {
    it('should fetch customers with success', async() => {
      const mocked = axios as jest.Mocked<typeof axios>;
      
      mocked.get.mockResolvedValue(axiosResponse);
      await expect(fetchCustomers('dummy')).resolves.toEqual([
        {
          name: 'Matt',
          location: {
            latitude: 1.234,
            longitude: 2.345
          },
          user_id: 1,
        },
        {
          name: 'Leah',
          location: {
            latitude: 5.678,
            longitude: 6.789
          },
          user_id: 2,
        },
      ]);
    });
  
    it('should fail to fetch customer data', async() => {
      const mocked = axios as jest.Mocked<typeof axios>;
  
      mocked.get.mockRejectedValue(axiosError);
      await expect(fetchCustomers('dummy')).rejects.toBeDefined();
    });
  });

  describe('customersFromJSON', () => {
    const validJSON = '{"latitude": "52.986375", "user_id": 12, "name": "Leah", "longitude": "-6.043701"}';
    const invalidJSON = 'latude": "-6.043701"}';

    it('should return a customer given valid JSON', () => {
      expect(customerFromJSON(validJSON)).toEqual({
        name: 'Leah',
        user_id: 12,
        location: {
          latitude: 52.986375,
          longitude: -6.043701
        }
      });
    });

    it('should return null given invalid JSON', () => {
      expect(customerFromJSON(invalidJSON)).toBeNull;
    });
  });
});