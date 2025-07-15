import Main from "./components/main/Main"
import Sidebar from "./components/sidebar/SideBar"

import ContextProvider from "./store/chat-store";

function App() {

  return (
    <ContextProvider>
      <Sidebar />
      <Main />
    </ContextProvider>
  )
}

export default App;
