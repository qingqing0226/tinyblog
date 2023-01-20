export interface Blog {
    id: number, 
    title: string, 
    body: string,
    userId: number,
    tags: string[],
    reactions: number
}

export interface Author {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    phone: string,
    birthDate: string,
    image: string,
    address: address
}

export interface address {
    address: string,
    city: string
}

export interface BlogAuthor {
    blog: Blog,
    author: Author | undefined
}

