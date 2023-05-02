export interface Calendar {
    date: string,
    count: number
}


export interface Active {
    [year: string]: Calendar[]
}