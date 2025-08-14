import {useEffect, useState } from 'react'
import './Board.css'
import axios from "axios"
import ToDoCard from './ToDoCard'
import {type StatusType} from '../types/StatusType'

type ToDoProps = {
    id: string
    description: string
    status: StatusType
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
                        <ToDoCard id={todo.id} description={todo.description}
                                  status={todo.status} />
                )}
            </main>
        </>
    )
}