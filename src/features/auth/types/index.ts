import type { ROLES } from '@/types';

export type AuthUser = {
  id: string;
  email: string;
  username: string;
  roles: ROLES[];
};

export type UserResponse = {
  accessToken: string;
  tokenType: string;
} & AuthUser;
