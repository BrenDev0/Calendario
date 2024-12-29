import React from 'react'
import { Evento } from '@/interface/types'
import { edit, trash } from "../utils/icons"

const EventItem = ({item}: {item: Evento}) => {
  return (
    <div className="h-[20%] flex flex-col items-center border-b border-dashed border-[--grey]" key={item._id}>
        <p className="flex justify-center items-center">{item.date}</p>
        <div className="w-full flex justify-between items-center">
            <div className="flex flex-col px-5">
                <p>{item.title}</p>
                <p>{item.location}</p>
            </div>
            <div className="flex flex-col px-5">
                <p>Empieza: {item.start}</p>
                <p>Termina: {item.end}</p>
            </div>
        </div>
        <div className="w-full px-5 flex justify-between items-center">
            <button value={item._id} className="text-blue-400">{edit}</button>
            <button value={item._id} className='text-red-500'>{trash}</button>
        </div>
        </div>
  )
}

export default EventItem
