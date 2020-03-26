import { ICoordinates } from '../interfaces';
import { haversineDistanceInKm } from './distances';

describe('distances tests', () => {
  it('should calculate the correct distance in KM', () => {
    const start: ICoordinates = {
      latitude: 53.339370,
      longitude: -6.257496,
    };
    const destinations = [
      {
        coordinates: {
          latitude: 53.375900,
          longitude: -6.096441,
        },
        distance: 11.43
      },
      {
        coordinates: {
          latitude: 52.535452,
          longitude:13.430555,
        },
        distance: 1318.22
      },
      {
        coordinates: {
          latitude: -53.33937,
          longitude: 173.742504,
        },
        distance: 20015
      }
    ];
    
    destinations.forEach(({ coordinates, distance }) => {
      expect(haversineDistanceInKm(start, coordinates)).toBeCloseTo(distance, 0);
    });

  });
});
