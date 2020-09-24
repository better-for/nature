export type APIError = {
  message: string;
  error_code: {
    name: string;
    value: number;
  };
  description: string;
};
