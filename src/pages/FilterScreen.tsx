import Header from "../components/Header"
import Board from "../components/Board";

type HomeScreenProps = {
    filter: string
}

export default function HomeScreen(props:Readonly<HomeScreenProps>) {
    return (
        <>
            <Header/>
            <Board/>
        </>
    )
}