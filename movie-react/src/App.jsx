import Main from "./Components/Main"

function App() {
  console.log(import.meta.env.VITE_KEY);

  return (
    <div className= "app">
      <Main />
    </div>
  )
}

export default App
