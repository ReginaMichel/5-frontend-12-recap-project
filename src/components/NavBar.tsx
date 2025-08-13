import { useNavigate } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {

    const nav = useNavigate()

    return (
        <>
            <button onClick={
                () => nav("/")
            }>All</button>
            <button onClick={
                () => nav("/open")
            }>Open</button>
            <button onClick={
                () => nav("/doing")
            }>Doing</button>
            <button onClick={
                () => nav("/done")
            }>Done</button>
            <button onClick={
                () => nav("/new")
            }>Create new</button>
        </>
    )
}