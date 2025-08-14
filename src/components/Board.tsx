import {useEffect, useState } from 'react'
import './Board.css'
import axios from "axios"
import ToDoCard from './ToDoCard'
import {status, type StatusType} from '../types/StatusType'

type ToDoProps = {
    id: string
    description: string
    status: StatusType
}
type BoardProps = {
    filter: StatusType
}

export default function Board(props:Readonly<BoardProps>) {

    const [allToDos, setAllToDos] = useState<ToDoProps[]>([])
    useEffect(() => {
        axios.get("/api/todo")
            .then(r => setAllToDos(r.data))
        },[]);

    let header:string="";
    if(props.filter === status.OPEN){header = "Open"}
    if(props.filter === status.IN_PROGRESS){header = "In Progress"}
    if(props.filter === status.DONE){header = "Done"}

    return (
        <>
            <div className="board">
                <h2>{header}</h2>
                <main className="board">
                    {allToDos.filter(todo => todo.status === props.filter)
                        .map(
                        (todo:ToDoProps) =>
                            <ToDoCard id={todo.id} description={todo.description}
                                  status={todo.status} />
                    )}
                </main>
            </div>    
        </>
    )
}