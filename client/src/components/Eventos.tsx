import { useCalendar } from "@/context/CalendarContext"
import { useEffect, useState } from "react";
import EventItem from "./EventItem"
import { Evento } from "@/interface/types";


const Eventos = () => {
    const { dataCalendario, dia, mes, año } = useCalendar();
    const [eventos, setEventos] = useState<Array<any>>([])

    useEffect(() => {
        const data = dataCalendario.data.filter((item) => item.date === `${dia}/${mes}/${año}` );

        setEventos(data)
    },[dataCalendario])


    return (
        <div className="h-full">
            {
                eventos.length > 0 ? eventos.map((item: Evento) => {
                    return (
                        <EventItem key={item._id} item={item} />
                    )
                }) :
                <div className="w-full h-[25%] flex justify-center items-center">
                    <p>No Hay Eventos Para {`${dia}/${mes}/${año}`}</p>
                </div>
            }
        </div>
    )
}


export default Eventos