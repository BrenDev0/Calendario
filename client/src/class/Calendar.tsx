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
        let count = 0
        let week = []
        const mes = []
        

        for(let i = 0; i < this.espaciosPrimeros; i ++){
            week.push("")
            count++
        }

        for(let i = 1; i <= this.contaDeDias; i ++){
            if(count < 7){
                week.push(i)
            } else {
                mes.push(week)
                count = 0
                week = []
            }
        } 

        for(let i = 0; i < this.espaciosFinales; i ++){
            week.push("")
        }
        

        return mes
    }
}