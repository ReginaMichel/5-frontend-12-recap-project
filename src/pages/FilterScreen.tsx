import Header from "../components/Header"
import Board from "../components/Board";
import {type StatusType} from '../types/StatusType'

type FilterScreenProps = {
    filter: StatusType
}

export default function FilterScreen(props:Readonly<FilterScreenProps>) {
    return (
        <>
            <Header/>
            <Board filter={props.filter} />
        </>
    )
}