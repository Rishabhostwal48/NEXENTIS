import Navbar from "../components/layout/navbar.jsx"
import Hero from "../components/blocks/Hero.jsx"

export default function Home() {
  return (
    <div className="space-y-12 p-8 text-xl font-semibold">
      <main>
        {/* routes */}
        <Hero
          title="Build Better UI"
          subtitle="Production-grade React+tailwind components you can copy and ship."
          image="https://picsum.photos/430"
        />
      </main>
    </div>
  )
}
