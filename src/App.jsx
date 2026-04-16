import Header from "./components/Header"
import Frontpage from "./components/Frontpage"
import Brand from "./components/Brand"
import Dashboard from "./components/Dashboard"
import Feature from "./components/Feature"
import Feedback from "./components/Feedback"
import ContactQues from "./components/Contact"

const App = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <Header />
      <div className="w-[80%] flex gap-20 flex-col">
        <Frontpage />
        <Brand/>
        <Dashboard/>
        <Feature/>
        <Feedback/>
        <ContactQues/>
      </div>
    </div>
  )
}

export default App