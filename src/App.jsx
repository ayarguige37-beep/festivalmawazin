
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import{Passeport} from './pages/Passeport'
import{Programme} from './pages/Programme'
import{Planning} from './pages/Planning'
import { Layout } from './componnets/Layout'
import"./index.css"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Passeport/>}/>
          <Route path='programme' element={<Programme/>}/>
          <Route path='planning' element={<Planning/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
