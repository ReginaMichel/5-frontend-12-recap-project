import {useState, type FormEvent } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import './CreateNewScreen.css'
import axios from "axios";

type postRequest = {
    description: string;
}
type postResponse = {
    id: string;
    description: string;
    status: string;
}

export default function HomeScreen() {

    const [description, setDescription] = useState<string>("");
    const nav = useNavigate();

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("current value of description: " + description);
        postToDo();
        setDescription("");
        nav("/");
    }
    function postToDo() {
        axios.post("api/todo",{"description":description}).then(r => console.log(r.data))
            .catch(e => console.log(e));
    }

    return (
        <>
            <Header/>
            <form onSubmit={handleSubmit}>
                <label>Description:
                    <input onChange={
                        (event) =>
                            setDescription(event.target.value)
                    } placeholder={"Enter description"}
                    value={description}/>
                </label>
                <button className={"submitNew"} type="submit">Submit</button>
            </form>
        </>
    )
}