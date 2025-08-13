import {useEffect, useState } from 'react'
import './Board.css'
import axios from "axios"
import ToDoCard from './ToDoCard'

type ToDoProps = {
    id: string
    description: string
    status: string
}

export default function Board() {

    const [allToDos, setAllToDos] = useState<ToDoProps[]>([])
    useEffect(() => {
        axios.get("/api/todo")
            .then(r => setAllToDos(r.data))
        },[]);

    return (
        <>
            <main className="board">
                {allToDos.map(
                    (todo:ToDoProps) =>
                        <ToDoCard description={todo.description}/>
                )}
            </main>
        </>
    )
}