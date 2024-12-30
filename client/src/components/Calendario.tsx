import  React, { useEffect} from "react"
import { Calendar } from "../class/Calendar"
import { useCalendar } from "@/context/CalendarContext"
import { useGlobal } from "@/context/GlobalContext"

const Calendario = () => {
    const { setDia, mes, setMes, año, setAño, contenidoCalendario, setContenidoCalendario, hoy} = useCalendar()
    const { setTab } = useGlobal()
    const diasDeLaSemana = ["Dom" ,"Lun", "Mar", "Mie", "Jue" , "Vie", "Sab"]
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio", "Agosto", "septiembre", "Octubre", "Noviembre", "Diciembre"]
    const años = [];
    for(let i = año - 5; i < año + 5; i++ ){
        años.push(i)
    }
    
    const autoRender = () => {
        let autoLoad = new Calendar(mes, año).renderCalendar()
        setContenidoCalendario(autoLoad)
    }


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

        setTab(3)
    }

    return (
        <table className="md:w-[70%] w-full lg:h-[90%] h-[45%] table-fixed">
            <caption className="mb-5">
                <select className="w-[15%] h-[35px] mr-[40px] bg-[--forms] rounded cursor-pointer" value={mes} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMes(parseInt(e.target.value))} name="mes">{meses.map((m: string) => {
                    return(
                        <option key={m} value={meses.indexOf(m) + 1}>{m}</option>
                    )
                })}</select>
                <select className="w-[15%] h-[35px] bg-[--forms] rounded cursor-pointer" value={año} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAño(parseInt(e.target.value))} name="año">
                    {
                        años.map((item) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })
                    }
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
                                    } else if(hoy === `${d}/${mes}/${año}` ) {
                                        return (
                                            <td className="border-solid border-2 border-[--grey] h-[100px]" key={key}>
                                                <button value={d} onClick={CalendarClick}  className="calendar-day w-full h-full block flex justify-center items-start hover:bg-[--modal] bg-yellow-100">{d}</button>
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