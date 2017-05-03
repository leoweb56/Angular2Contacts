export interface IContact{
    name: string,
    smallImageURL: string,
    largeImageURL: string,
    email: string,
    birthdate: string,
    website: string,
    favorite: boolean,
    company: string,
    phone: {
        work: string,
        home: string,
        mobile: string
    },
    address:{
        street: string,
        city: string,
        state: string,
        country: string,
        zip: string,
        latitude: number,
        longitude: number
    },
    selected: boolean
}