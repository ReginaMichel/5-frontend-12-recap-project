import DetailBoard from "../components/DetailBoard.tsx";
import Header from "../components/Header";
import {useParams} from "react-router-dom";

export default function DetailScreen() {
    const param = useParams();
    return (
        <>
            <Header/>
            <DetailBoard id={param.id}/>
        </>
    )
}