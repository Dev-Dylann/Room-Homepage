import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"

function App() {

  return (
    <>
      <Header />

      <main className="flex flex-col font-spartan">
        <Hero />

        <About />
      </main>
    </>
  )
}

export default App
