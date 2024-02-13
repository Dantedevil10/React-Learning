//Conditional-Rendering = permite que voce controle oq ira ser renderizado na sua aplicação baseado
// em certas condições (show,hide or change components)

import UserGreeting from "./UserGreeting.jsx"

function App() {


  return (
    <>
      <UserGreeting isLoggedIn={true} username='Dante'/>
    </>
  )
}

export default App
