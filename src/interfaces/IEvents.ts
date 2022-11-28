export interface ICreator {
  email: string;
  self: boolean;
}

export interface IOrganizer {
  email: string;
  self: boolean;
}

export interface IStart {
  dateTime: Date;
  timeZone: string;
}

export interface IEnd {
  dateTime: Date;
  timeZone: string;
}

export interface IReminders {
  useDefault: boolean;
}

export interface IEvent {
  kind: string;
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: Date;
  updated: Date;
  summary: string;
  creator: ICreator;
  organizer: IOrganizer;
  start: IStart;
  end: IEnd;
  iCalUID: string;
  sequence: number;
  reminders: IReminders;
  eventType: string;
}

