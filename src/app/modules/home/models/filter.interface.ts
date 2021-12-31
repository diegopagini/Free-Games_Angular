export interface Filter {
  name: string;
  options: Option[];
}

export interface Option {
  name: string;
  category: string;
  type: string;
}
