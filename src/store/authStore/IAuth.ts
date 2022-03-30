export interface IState {
	user?: IUser,
	token?: TToken
}

export type TToken = string

export interface IUser {
	_id: string,
	name: string,
	email: string
}

export interface IRegisterResponse {
	user: Required<IUser>
}

export interface ILoginResponse extends IRegisterResponse {
	token: Required<TToken>
}

export interface IRegisterForm {
	name: Required<string>,
	email: Required<string>,
	password: Required<string>
}

export type TLoginForm = Omit<IRegisterForm, 'name'>