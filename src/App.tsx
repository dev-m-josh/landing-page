import Navbar from "./components/Navbar";

function App() {
    return (
        <main id="home" className="min-h-screen bg-cream text-charcoal">
            <Navbar />

            <div className="px-6 py-32 text-center">
                <p className="mb-5 text-xs font-bold tracking-[0.2em] text-orange">RE:IMAGINING THE ORDINARY</p>

                <h1 className="font-heading text-6xl md:text-8xl">
                    NOT WASTE.
                    <br />
                    <span className="text-orange">NOT YET.</span>
                </h1>
            </div>
        </main>
    );
}

export default App;
