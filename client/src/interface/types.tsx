export interface Evento {
    _id: string,
    date: string,
    title: string,
    location: string,
    start: number,
    end: number,
    notes: string
}

export interface Collection {
    data: Array<Evento>

}