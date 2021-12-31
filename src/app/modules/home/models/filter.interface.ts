export interface Filter {
  name: string;
  options: Option[];
}

export interface Option {
  name: string;
  value: string;
  type: string;
}
