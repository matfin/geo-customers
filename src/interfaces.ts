export interface ICoordinates {
  latitude: number,
  longitude: number,
}

export interface ICustomer {
  user_id: number,
  name: string,
  location: ICoordinates,
}