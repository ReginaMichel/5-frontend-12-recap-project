import './App.css'
import {Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen.tsx'
import FilterScreen from './pages/FilterScreen.tsx'
import DetailScreen from './pages/DetailScreen.tsx'
import CreateNewScreen from './pages/CreateNewScreen.tsx'

function App() {
    
  return (
    <>
        <Routes>
            <Route path={"/"} element={<HomeScreen/>}/>
            <Route path={"/open"} element={<FilterScreen
                filter={"OPEN"}/>}/>
            <Route path={"/doing"} element={<FilterScreen
                filter={"IN_PROGRESS"}/>}/>
            <Route path={"/done"} element={<FilterScreen
                filter={"DONE"}/>}/>
            <Route path={"/new"} element={<CreateNewScreen/>}/>
            <Route path={"/:id"} element={<DetailScreen/>}/>
        </Routes>
    </>
  )
}

export default App
