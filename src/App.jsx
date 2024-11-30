
import './App.css'
import './index.css'
import './ItemListContainer.css'
import './Navbar.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/Navbar'



function App() {
  return (
    <>
      <NavBar />
      <div>
       <ItemListContainer mensaje={"Proximamente van a estar disponibles nuestros productos"} />
      </div>
    </>
  )
}

export default App





