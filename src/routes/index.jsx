import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultPageComponent } from './DefaulPage'
import { MainComponent } from '../components/Main'


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path='/' element={<DefaultPageComponent/>}>
                    <Route path='/' element= {<MainComponent />}/>
                 </Route>
            </Routes>
        </BrowserRouter>
    )
}