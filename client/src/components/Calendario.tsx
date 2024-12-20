import { useState } from "react"
import { Calendar } from "../class/Calendar"

const Calendario = () => {
    const [mes, setMes] = useState(new Date().getMonth() + 1)
    const [año, setAño] = useState(new Date().getFullYear()) 
    const [calendario, setCalendario] = useState(new Calendar(mes, año))
    const diasDeLaSemana = ["Domingo" ,"Lunes", "Martes", "Miercoles", "Jueves" , "Viernes", "Sabado"]
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio", "Agosto", "septiembre", "Octubre", "Noviembre", "Diciembre"]

    return (
        <table className="w-full h-full">
            <thead>
                <tr>
                    {
                        diasDeLaSemana.map((dia) => {
                            return(
                                <th>{dia}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                   <tr>
                    <td>{}</td>
                   </tr> 
                }
            </tbody>
        </table>
    )
}

export default Calendario