// Tipar el objeto de nuetsro estado

export type User = {
    email: string,
    displayName: string,
    photo: string
}
  
export type UserState = {
    isLogged: boolean,
    user: User | null
}



