import React, { useState } from 'react'
import { Evento } from '@/interface/types'
import { checkMark, edit, exit, eye, eyeSlash, trash } from "../utils/icons"
import { useCalendar } from '@/context/CalendarContext'

const EventItem = ({item}: {item: Evento}) => {
    const { collectionRequest } = useCalendar();

    const [title, setTitle] = useState<string>(item.title);
    const [editTitle, setEditTitle] = useState<boolean>(false);
    const [location, setLocation] = useState<string>(item.location);
    const [editLocation, setEditLocation] = useState<boolean>(false);
    const [start, setStart] = useState<string>(item.start) 
    const [editStart, setEditStart] = useState<boolean>(false);
    const [end, setEnd] = useState<string>(item.end)
    const [editEnd, setEditEnd] = useState<boolean>(false);
    const [viewNotes, setViewNotes] = useState<boolean>(false)
    const [editNotes, setEditNotes] = useState<boolean>(false)
    const [notes, setNotes] = useState<string>(item.notes)

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>, data: string ) => {
        const button = e.currentTarget as HTMLButtonElement;
        const id = button.value;
        const field = button.name;

        try {
            await fetch(`http://localhost:8000/api/resource/${id}/${field}`,
                {
                    method: "PUT",
                    body: data
                }
            );

            collectionRequest();
            return;
        } catch (error) {
            console.log(error)
        }

    }

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget as HTMLButtonElement;
        const id = button.value;
        

        try {
           const res = await fetch(`http://localhost:8000/api/resource/${id}`,
                {
                    method: "DELETE"
                }
            );

            const data = res.json();
            console.log(data);
            collectionRequest();
            return;

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="flex flex-col py-5 justify-around items-center border-b border-dashed border-[--grey]" key={item._id}>
        <p className="flex justify-center items-center">{item.date}</p>
        <div className="w-full flex justify-between items-center">
            <div className="flex flex-col px-5">
                <div className="flex">
                    {
                        editTitle ? <input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} /> : <p>{item.title}</p>
                    }
                    {
                        editTitle ? 
                        <div>
                            <button value={item._id} name='title' onClick={(e: React.MouseEvent<HTMLButtonElement>) => {handleSubmit(e, title); setEditTitle(false)}} className="pl-2 text-green-400">{checkMark}</button>
                            <button value={item._id} onClick={() => setEditTitle(false)} className="pl-2 text-red-400">{exit}</button>
                        </div> 
                        : <button value={item._id} onClick={() => setEditTitle(true)} className="pl-2 text-blue-400">{edit}</button>
                    }
                </div>
                <div className="flex">
                {
                        editLocation ? <input type="text" value={location} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)} /> : <p>{item.location}</p>
                    }
                    {
                        editLocation ? 
                        <div>
                            <button value={item._id} name='location' onClick={(e: React.MouseEvent<HTMLButtonElement>) => {handleSubmit(e, location); setEditLocation(false)}} className="pl-2 text-green-400">{checkMark}</button>
                            <button value={item._id} onClick={() => setEditLocation(false)} className="pl-2 text-red-400">{exit}</button>
                        </div> 
                        : <button value={item._id} onClick={() => setEditLocation(true)} className="pl-2 text-blue-400">{edit}</button>
                    }
                </div>
            </div>
            <div className="flex flex-col px-5">
                <div className="flex">
                    {
                        editStart ? <input type="time" value={start} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStart(e.target.value)} /> : <p>{item.start}</p>
                    }
                    {
                        editStart ? 
                        <div>
                            <button value={item._id} name='start' onClick={(e: React.MouseEvent<HTMLButtonElement>) => {handleSubmit(e, start); setEditStart(false)}} className="pl-2 text-green-400">{checkMark}</button>
                            <button value={item._id} onClick={() => setEditStart(false)} className="pl-2 text-red-400">{exit}</button>
                        </div> 
                        : <button value={item._id} onClick={() => setEditStart(true)} className="pl-2 text-blue-400">{edit}</button>
                    }
                </div>
                <div className="flex">
                {
                        editEnd ? <input type="time" value={end} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEnd(e.target.value)} /> : <p>{item.end}</p>
                    }
                    {
                        editEnd ? 
                        <div>
                            <button value={item._id} name='end' onClick={(e: React.MouseEvent<HTMLButtonElement>) => {handleSubmit(e, end); setEditEnd(false)}} className="pl-2 text-green-400">{checkMark}</button>
                            <button value={item._id} onClick={() => setEditEnd(false)} className="pl-2 text-red-400">{exit}</button>
                        </div> 
                        : <button value={item._id} name='title' onClick={() => setEditEnd(true)} className="pl-2 text-blue-400">{edit}</button>
                    }
                </div>
            </div>
        </div>
        {
            viewNotes &&
            <div className="w-full flex justify-center items-center pt-5">
                {
                    editNotes ? 
                    <>
                        <textarea value={notes} className='w-[75%] p-3 rounded-xl' rows={5} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value)} id=""></textarea>
                        <button value={item._id} name='notes' onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e, notes)} className="pl-2 text-green-400">{checkMark}</button>
                        <button value={item._id} onClick={() => setEditNotes(false)} className="pl-2 text-red-400">{exit}</button>
                    </>
                    : 
                    <>
                        <p>{item.notes}</p>
                        <button value={item._id} onClick={() => setEditNotes(true)} className="pl-2 text-blue-400">{edit}</button>
                    </>
                }
            </div>
            
            

        }
        <div className="w-full px-5 pt-2 flex justify-between items-center">
            {
                viewNotes ? <button onClick={() => setViewNotes(false)} className='text-red-600'>{eyeSlash}</button> : <button onClick={() => setViewNotes(true)} className='text-purple-600'>{eye}</button>
            }
            <button onClick={handleDelete} value={item._id} className='text-red-500'>{trash}</button>
        </div>
        </div>
  )
}

export default EventItem
