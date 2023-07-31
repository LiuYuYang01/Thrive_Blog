export interface Cate {
    id: number,
    name: string,
    icon: string,
    url: string,
    mark: string,
    children: Cate[]
}