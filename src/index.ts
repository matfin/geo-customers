import { fetchCustomers } from './utils/api';
import { ICustomer } from './interfaces';

const run = async(): Promise<void> => {
  const result: ICustomer[] = await fetchCustomers('/intercom-take-home-test/customers.txt');

  console.log(result);
};

run();


