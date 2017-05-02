export interface IContact{
    name: string,
    smallImageURL: string,
    email: string,
    phone: {
        work: string,
        home: string,
        mobile: string
    }
}