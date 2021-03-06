import { User } from './user.interface';

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}
export interface DecodedToken {
  sub: string;
  iat: string;
  user: User;
}
