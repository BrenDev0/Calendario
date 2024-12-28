'use client'

import { Calendar } from "@/class/Calendar"
import React, { createContext, SetStateAction, ReactNode, useContext, useState, useEffect } from "react"

interface CalendarState {
    hoy: string,
    setHoy: React.Dispatch<SetStateAction<string>>,
    dia: number,
    setDia: React.Dispatch<SetStateAction<number>>,
    mes: number,
    setMes: React.Dispatch<SetStateAction<number>> 
    año: number,
    setAño: React.Dispatch<SetStateAction<number>>,
    contenidoCalendario: Array<any>,
    setContenidoCalendario: React.Dispatch<SetStateAction<Array<any>>>,
    dataCalendario: Array<any>,
    setDataCalendario: React.Dispatch<SetStateAction<Array<any>>>

}

const defaultValue: CalendarState = {
    hoy: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
    setHoy: () => {throw new Error("No Context Provided")},
    dia: new Date().getDate(),
    setDia: () => {throw new Error("No Context Provided")},
    mes: new Date().getMonth() + 1,
    setMes: () => {throw new Error("No Context Provided")},
    año: new Date().getFullYear(),
    setAño: () => {throw new Error("No Context Provided")},
    contenidoCalendario: new Calendar(new Date().getMonth() + 1, new Date().getFullYear()).renderCalendar(),
    setContenidoCalendario: () => new Error('No Context Provided'),
    dataCalendario: [],
    setDataCalendario: () => new Error('No Context Provided')
}

const CalendarContext = createContext<CalendarState>(defaultValue)

export const CalendarProvider = ({children}: {children: ReactNode}) => {
    const [hoy, setHoy] = useState<string>(defaultValue.hoy)
    const [dia, setDia] = useState<number>(defaultValue.dia)
    const [mes, setMes] = useState<number>(defaultValue.mes)
    const [año, setAño] = useState<number>(defaultValue.año)
    const [contenidoCalendario, setContenidoCalendario] = useState<Array<any>>(defaultValue.contenidoCalendario)
    const [dataCalendario, setDataCalendario] = useState<Array<any>>(defaultValue.dataCalendario)

    useEffect(() => {
        fetch('http://localhost:8000/api/collection')
        .then((res) => res.json())
        .then((data) => setDataCalendario(data))
    }, [])
    
    const providerVaules = {
        hoy, setHoy,
        dia, setDia,
        mes, setMes,
        año, setAño,
        contenidoCalendario, setContenidoCalendario,
        dataCalendario, setDataCalendario
    }

    return (
        <CalendarContext.Provider value={providerVaules}>
            { children }
        </CalendarContext.Provider>
    )
}


export const useCalendar = () => {
    const context = useContext(CalendarContext)

    if(!context){
        throw new Error('useCalendar debe ser usado dentro de DataProvider')
    }

    return context
}