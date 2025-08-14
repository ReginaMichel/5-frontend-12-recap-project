import './ToDoCard.css'
import {status, type StatusType} from '../types/StatusType'
import axios from 'axios'

type ToDoCardProps = {
    id: string
    description: string
    status: StatusType
}

export default function ToDoCard(props:Readonly<ToDoCardProps>) {

    function onClickLeft(){
        let newStatus:StatusType = status.OPEN;
        if(props.status === status.DONE) {
            newStatus = status.IN_PROGRESS;
        } else if(props.status === status.IN_PROGRESS) {
            newStatus = status.OPEN;
        }
        axios.put("api/todo/"+props.id+"/update",{
            "id":props.id,"description":props.description,"status":newStatus
        }).then(r => console.log(r.data))
            .catch(e => console.log(e))
    }
    function onClickRight(){
        let newStatus:StatusType = status.DONE;
        if(props.status === status.OPEN) {
            newStatus = status.IN_PROGRESS;
        } else if(props.status === status.IN_PROGRESS) {
            newStatus = status.DONE;
        }
        axios.put("api/todo/"+props.id+"/update",{
            "id":props.id,"description":props.description,"status":newStatus
        }).then(r => console.log(r.data))
            .catch(e => console.log(e))
    }

    return (
        <>
            <main className="card">
                <h3>{props.description}</h3>
                <div className="buttons">
                    <button className={"left"} onClick={onClickLeft}></button>
                    <button className={"right"} onClick={onClickRight}></button>
                </div>
            </main>
        </>
    )
}