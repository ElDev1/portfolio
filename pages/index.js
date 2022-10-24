import { About } from '../components/About/About'
import { Main } from '../components/Main/Main'
import { Nav } from '../components/Nav/Nav'
import { Projects } from '../components/Projects/Projects'

export default function Home() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      background: "#171c29"
    }}>
      <Nav />
      <Main />
      <About />
      <Projects />
    </div>
  )
}
