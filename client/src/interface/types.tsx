export interface Evento {
    _id: string,
    date: string,
    title: string,
    location: string,
    start: string,
    end: string,
    notes: string
}

export interface Collection {
    data: Array<Evento>

}