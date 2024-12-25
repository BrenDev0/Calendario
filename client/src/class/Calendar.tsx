export class Calendar {
    
    contaDeDias: number;
    espaciosPrimeros: number;

    constructor(mes: number, año: number ) {
        this.contaDeDias = new Date(año, mes, 0).getDate()
        this.espaciosPrimeros = new Date(`${mes}/01/${año}`).getDay()
        
    }

    renderCalendar(){
        let count = 0
        let week = []
        let mes: Array<any> = []
        
               
        for(let i = 0; i < this.espaciosPrimeros; i ++){
            week.push("")
            count++
        }

        for(let i = 1; i <= this.contaDeDias; i ++){
            if(count < 7){
                week.push(i)
                count++
            } else {
                mes.push(week)
                count = 1
                week = [i]
            }
        } 

        while(count < 7){
            week.push("")
            count++
        }
        
        mes.push(week)

        return mes
    }
}