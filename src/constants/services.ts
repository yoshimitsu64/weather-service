import { ISelectedServices } from '@interfaces/ISelectedServices';

export interface IServices extends ISelectedServices {
  id: number;
}

export const services: Array<IServices> = [
  {
    service: 'OpenWeatherMap',
    id: 1,
  },
  {
    service: 'VisualCrossing',
    id: 2,
  },
];
