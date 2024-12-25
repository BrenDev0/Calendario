import  React, { useEffect, useState } from "react"
import { Calendar } from "../class/Calendar"

const Calendario = () => {
    const [mes, setMes] = useState<number>(new Date().getMonth() + 1)
    const [año, setAño] = useState<number>(new Date().getFullYear()) 
    const [calendario, setCalendario] = useState<Array<any>>([])
    const diasDeLaSemana = ["Dom" ,"Lun", "Mar", "Mie", "Jue" , "Vie", "Sab"]
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio", "Agosto", "septiembre", "Octubre", "Noviembre", "Diciembre"]
    
    const autoRender = () => {
        let autoCalendario = new Calendar(mes, año).renderCalendar()
        setCalendario(autoCalendario)
    }

    useEffect(() =>{
        autoRender()
    }, [])

    useEffect(() => {
        autoRender()
    }, [mes, año])

    

    return (
        <table className="w-[70%] h-[90%] table-fixed">
            <caption>
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMes(parseInt(e.target.value))} name="mes">{meses.map((m: string) => {
                    if(meses.indexOf(m) + 1 == mes){
                        return(
                            <option selected key={m} value={meses.indexOf(m) + 1}>{m}</option>
                        )
                    }

                    return(
                        <option key={m} value={meses.indexOf(m) + 1}>{m}</option>
                    )
                })}</select>
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>setAño(parseInt(e.target.value))} name="año">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </caption>
            <thead>
                <tr className="">
                    {
                        diasDeLaSemana.map((dia) => {
                            return(
                                <th className="" key={dia}>{dia}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                  calendario.map((semana) => {
                    let key = 50
                    return(
                        <tr className="" key={calendario.indexOf(semana)}>
                            {
                                semana.map((dia: number) =>{
                                    key++
                                    if(typeof dia != 'number'){
                                        return(
                                            <td className="border-solid border-2 border-[--grey]" key={key}></td>
                                        )
                                    }

                                    return(
                                        <td className="border-solid border-2 border-[--grey] h-[100px]" key={key}>
                                            <button className="w-full h-full block flex justify-center items-start hover:bg-[--grey]">{dia}</button>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                  })
                }
            </tbody>
        </table>
    )
}

export default Calendario