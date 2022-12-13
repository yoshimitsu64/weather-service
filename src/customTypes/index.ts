import { Hour } from '@interfaces/IVisualCrossing';

export type ForwardRef = {
  closeModal(b: boolean): void;
};

export type HourWeather = Pick<Hour, 'datetime' | 'temp' | 'icon'>;

export interface IEventsModalProps {
  display: 'none' | 'flex';
}

export type IHourWeather = HourWeather & {
  key: string | number;
};
