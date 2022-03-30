interface ICountry {
	country_key: string,
	country_name: string,
	__v: number,
	_id: string,
}

export interface ITour {
	id: string,
	name: string,
	location: string,
	price: string,
	description: string,
	currency_type: string,
	star_rating: string,
	duration_in_days: string,
	image: {
		path: string
	}
}