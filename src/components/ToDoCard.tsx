import './ToDoCard.css'

type ToDoCardProps = {
    //id: string
    description: string
    //status: string
}

export default function ToDoCard(props:Readonly<ToDoCardProps>) {
    return (
        <>
            <main className="card">
                <h3>{props.description}</h3>
            </main>
        </>
    )
}