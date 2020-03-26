import config from './config';
import { fetchCustomers } from './utils/api';
import { haversineDistanceInKm } from './utils/distances';
import { ICustomer, ICoordinates } from './interfaces';

const run = async(): Promise<void> => {
  const officeCoordinates: ICoordinates = config.coordinates;
  const distanceKm: number = config.distanceKm;

  // Get the full list of customers and remap to get their distance from the office
  const customers: ICustomer[] = await fetchCustomers('/intercom-take-home-test/customers.txt');
  const remapped =
    customers.map((customer: ICustomer) => {
      return {
        customer,
        distance: haversineDistanceInKm(customer.location, officeCoordinates)
      };
    });

  // Then apply filtering 
  const filtered = remapped.filter((item) => item.distance <= distanceKm);

  // Then apply sorting by user ID
  const sorted = filtered.sort((a, b) => a.customer.user_id - b.customer.user_id );
  
  // Then output the name and user ID
  console.log(sorted.map(item => `${item.customer.name} [${item.customer.user_id}]`));
};

run();


