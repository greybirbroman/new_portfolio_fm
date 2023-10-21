import Header from "./Header"
import Hero from "../sections/Hero"
import { Parallax } from "../sections/Parallax"
import Services from "../sections/Services"
import Portfolio from "../sections/Portfolio"

function App() {
  return (
    <>
     
      <main>
        <section id='homepage'>
        <Header />
        <Hero />
        </section>
        <section>
          <Parallax type='services' title='what we do?'/>
        </section>

        <section><Services/></section>

        <section>
          <Parallax type='portfolio' title='what we did?'/>
        </section>
        <section>
          <Portfolio />
        </section>

        <section>Contacts</section>
      </main>
    </>
  )
}
export default App