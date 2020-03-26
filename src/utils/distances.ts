import { ICoordinates } from '../interfaces';

export const haversineDistanceInKm = (start: ICoordinates, end: ICoordinates ): number => {
  const earthRadius: number = 6371;
  const toRadians = (x: number): number => x * Math.PI / 180;

  const sourceLatRadians: number = toRadians(start.latitude);
  const endLatRadians: number = toRadians(end.latitude);
  const latDiffRadians: number = toRadians(end.latitude - start.latitude);
  const lngDiffRadians: number = toRadians(end.longitude - start.longitude);

  const formula: number =
    Math.sin(latDiffRadians / 2) * Math.sin(latDiffRadians / 2)
    + Math.cos(sourceLatRadians) * Math.cos(endLatRadians)
    * Math.sin(lngDiffRadians / 2) * Math.sin(lngDiffRadians / 2);

  const ataned = 2 * Math.atan2(Math.sqrt(formula), Math.sqrt(1 - formula));

  return earthRadius * ataned;
};