export interface Blog {
    id: number, 
    title: string, 
    body: string,
    userId: number,
    tags: string[],
    reactions: number
}