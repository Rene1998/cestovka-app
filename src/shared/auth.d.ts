export interface IRegisterForm {
	name: Required<string>,
	email: Required<string>,
	password: Required<string>
}

export type TLoginForm = Omit<IRegisterForm, 'name'>