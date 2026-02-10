import type User from "../utils/user.ts"

export type userDefaultReturn = {
  success: boolean, 
  msg: string,
  mentions: undefined | string[],
}