export interface LoginRequest {
  clientCode: string
  password: string
}

export interface LoginResponse {
  jwt: string;
  user: {
    clientCode: string;
    name: string;
  };
}

