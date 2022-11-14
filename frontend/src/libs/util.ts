import { UserInfo } from '../types/types';

export const buildUserInfoFromJson = (json: any): UserInfo | null => {
  const obj = Object.keys(json).length === 0 ? null : json;
  const userInfo: UserInfo | null = obj || null;

  return userInfo;
};
