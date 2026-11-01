import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import FeaturedCollection from "./components/FeaturedCollection";
import Transformation from "./components/Transformation";

function App() {
    return (
        <main className="min-h-screen bg-cream text-charcoal">
            <Navbar />
            <Hero />
            <Philosophy />
            <FeaturedCollection />
            <Transformation />
        </main>
    );
}

export default App;
