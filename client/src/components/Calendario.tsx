import  React, { useEffect, useState } from "react"
import { Calendar } from "../class/Calendar"
import { useCalendar } from "@/context/CalendarContext"

const Calendario = () => {
    const { dia, setDia, mes, setMes, año, setAño, contenidoCalendario, setContenidoCalendario, dataCalendario} = useCalendar()
    const diasDeLaSemana = ["Dom" ,"Lun", "Mar", "Mie", "Jue" , "Vie", "Sab"]
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio", "Agosto", "septiembre", "Octubre", "Noviembre", "Diciembre"]
    
    const autoRender = () => {
        let autoLoad = new Calendar(mes, año).renderCalendar()
        setContenidoCalendario(autoLoad)
    }

    useEffect(() =>{
        autoRender()
    }, [])

    useEffect(() => {
        autoRender()
    }, [mes, año])
    

    const CalendarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement
        const calendarDays = document.getElementsByClassName("calendar-day")
        const tabs = document.getElementsByClassName("sidebar-btn")
        const selectTab = document.getElementsByClassName("sidebar-btn")[0]
        setDia(parseInt(button.value))

        for(let i = 0; i < tabs.length; i++){
            tabs[i].className = tabs[i].className.replace(" sidebar-selected-btn", "")
        }

        for(let i = 0; i < calendarDays.length; i++){
            calendarDays[i].className = calendarDays[i].className.replace(" sidebar-selected-btn", "")
        }

        selectTab.className += " sidebar-selected-btn"
        button.className += " sidebar-selected-btn"

    }

    return (
        <table className="w-[70%] h-[90%] table-fixed">
            <caption className="mb-5">
                <select className="w-[15%] h-[35px] mr-[40px] bg-[--forms] rounded cursor-pointer" defaultValue={mes} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMes(parseInt(e.target.value))} name="mes">{meses.map((m: string) => {
                    return(
                        <option key={m} value={meses.indexOf(m) + 1}>{m}</option>
                    )
                })}</select>
                <select className="w-[15%] h-[35px] bg-[--forms] rounded cursor-pointer" defaultValue={año} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAño(parseInt(e.target.value))} name="año">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </caption>
            <thead>
                <tr className="">
                    {
                        diasDeLaSemana.map((i) => {
                            return(
                                <th className="" key={i}>{i}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                  contenidoCalendario.map((semana) => {
                    let key = 50
                    return(
                        <tr className="" key={contenidoCalendario.indexOf(semana)}>
                            {
                                semana.map((d: number) =>{
                                    key++
                                    if(typeof d != 'number'){
                                        return(
                                            <td className="border-solid border-2 border-[--grey]" key={key}></td>
                                        )
                                    } else if(d === dia) {
                                        return (
                                            <td className="border-solid border-2 border-[--grey] h-[100px]" key={key}>
                                                <button value={d} onClick={CalendarClick}  className="calendar-day w-full h-full block flex justify-center items-start hover:bg-[--modal] sidebar-selected-btn">{d}</button>
                                            </td>
                                        )
                                    } else {
                                        return (
                                            <td className="border-solid border-2 border-[--grey] h-[100px]" key={key}>
                                                <button value={d} onClick={CalendarClick}  className="calendar-day w-full h-full block flex justify-center items-start hover:bg-[--modal]">{d}</button>
                                            </td>
                                        )
                                    }
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