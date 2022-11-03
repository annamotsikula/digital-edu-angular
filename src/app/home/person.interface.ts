export interface IPerson {
    id: 2,
    name: string,
    age?: number,
    username: string,
    img: string,
    email: string,
    employed: boolean,
    salary: number,
    phone: string,
    website: string,
    company: ICompany
}

export interface ICompany {
    name: string,
    catchPhrase: string,
}

