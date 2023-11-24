interface Calendar {
    date: string,
    count: number
}


interface Active {
    [year: string]: Calendar[]
}