
import { User } from './user';

export type SetUserLoggedAction = {
    type: string
    payload: User
}

export type SetUserLoginFailureAction = {
    type: string
}

export type UserActions = SetUserLoggedAction | SetUserLoginFailureAction