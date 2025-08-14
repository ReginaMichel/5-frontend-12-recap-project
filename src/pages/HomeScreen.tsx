import Board from "../components/Board";
import Header from "../components/Header";
import {status} from '../types/StatusType'
import './HomeScreen.css'

export default function HomeScreen() {
    return (
        <>
            <Header/>
            <main className="home">
                <Board filter={status.OPEN}/>
                <Board filter={status.IN_PROGRESS}/>
                <Board filter={status.DONE}/>
            </main>
        </>    
    )
}