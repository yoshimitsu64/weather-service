export interface License {
  name: string;
  url: string;
}

export interface Rate {
  limit: number;
  remaining: number;
  reset: number;
}

export interface Northeast {
  lat: number;
  lng: number;
}

export interface Southwest {
  lat: number;
  lng: number;
}

export interface Bounds {
  northeast: Northeast;
  southwest: Southwest;
}

export interface Components {
  'ISO_3166-1_alpha-2': string;
  'ISO_3166-1_alpha-3': string;
  'ISO_3166-2': string[];
  _category: string;
  _type: string;
  building: string;
  city: string;
  state:string;
  city_district: string;
  continent: string;
  country: string;
  country_code: string;
  house_number: string;
  neighbourhood: string;
  postcode: string;
  road: string;
}

export interface Geometry {
  lat: number;
  lng: number;
}

export interface Result {
  bounds: Bounds;
  components: Components;
  confidence: number;
  formatted: string;
  geometry: Geometry;
}

export interface Status {
  code: number;
  message: string;
}

export interface StayInformed {
  blog: string;
  twitter: string;
}

export interface Timestamp {
  created_http: string;
  created_unix: number;
}

export interface IOpencage {
  documentation: string;
  licenses: License[];
  rate: Rate;
  results: Result[];
  status: Status;
  stay_informed: StayInformed;
  thanks: string;
  timestamp: Timestamp;
  total_results: number;
}
