export class Calendar {
    
    contaDeDias: number;
    espaciosPrimeros: number;
    espaciosFinales: number;


    


    constructor(mes: number, año: number ) {
        this.contaDeDias = new Date(año, mes, 0).getDate()
        this.espaciosPrimeros = new Date(`${mes}/01/${año}`).getDay()
        this.espaciosFinales = new Date(`${mes}/${this.contaDeDias}/${año}`).getDay()
    }

    renderCalendar(){
        
    }
}