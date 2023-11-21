import './App.css'

function App() {

  const methodDoesNotExist = () => {
    throw new Error("Error コードです")
  }
  return (
    <div>
      <button onClick={methodDoesNotExist}>Break the world</button>
    </div>
  )
}

export default App
