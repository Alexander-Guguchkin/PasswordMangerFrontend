import NavBar from "./components/Navigation/NavBar"
// import appStyles from  './App.css'

function App() {
  const navlist = [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "Settings",
      url: "/settings"
    }
  ]
  return (
    <>
      <NavBar navlist={navlist}/>
    </>
  )
}

export default App
