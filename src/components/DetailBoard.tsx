import {useEffect, useState } from 'react'
import './Board.css'
import axios from "axios"
import DetailToDoCard from './DetailToDoCard'
import {status, type StatusType} from '../types/StatusType'

type ToDoProps = {
    id: string
    description: string
    status: StatusType
}

type DetailBoardProps = {
    id: string
}

export default function DetailBoard(props:Readonly<DetailBoardProps>) {

    const [todo, setTodo] = useState<ToDoProps>({"id":"","description":"","status":status.OPEN})
    useEffect(() => {
        axios.get("/api/todo/"+props.id)
            .then(r => setTodo(r.data))
    },[]);

    return (
        <>
            <main className="board">
                <DetailToDoCard id={todo.id} description={todo.description}
                                  status={todo.status} />
            </main>
        </>
    )
}