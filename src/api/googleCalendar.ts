import ApiCalendar from 'react-google-calendar-api';

const config = {
  clientId: '324728336450-l0jdi96rba8lik8soah4aouc7d3oh2td.apps.googleusercontent.com',
  apiKey: 'AIzaSyC-xVfxR0BjWoWbKcxxIYGqa8KqQC8ATkA',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
};

export const apiCalendar = new ApiCalendar(config);
