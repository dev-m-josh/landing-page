import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";

function App() {
    return (
        <main className="min-h-screen bg-cream text-charcoal">
            <Navbar />
            <Hero />
            <Philosophy />
        </main>
    );
}

export default App;
