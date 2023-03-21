export interface auth {
    id: string
    username: string
    role: string[]
}

export interface authModel {
    auth: auth
    loader: boolean
    error: string | null
}