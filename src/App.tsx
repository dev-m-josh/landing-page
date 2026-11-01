import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import FeaturedCollection from "./components/FeaturedCollection";
import Transformation from "./components/Transformation";
import Makers from "./components/Makers";

function App() {
    return (
        <main className="min-h-screen bg-cream text-charcoal">
            <Navbar />
            <Hero />
            <Philosophy />
            <FeaturedCollection />
            <Transformation />
            <Makers />
        </main>
    );
}
export default App;
