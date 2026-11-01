import { ArrowUpRight } from "lucide-react";
import MakerCard from "./MakerCard";

const makers = [
    {
        number: "01",
        name: "Studio Form",
        specialty: "RECLAIMED FURNITURE",
        description: "Giving forgotten timber a new purpose through thoughtful furniture and sculptural forms.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=85",
    },
    {
        number: "02",
        name: "Material Matters",
        specialty: "REIMAGINED OBJECTS",
        description: "Exploring unexpected materials and turning discarded resources into functional design.",
        image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=900&q=85",
    },
    {
        number: "03",
        name: "Thread Again",
        specialty: "TEXTILE REWORK",
        description: "Transforming surplus fabrics into expressive accessories with character and purpose.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=85",
    },
];

export default function Makers() {
    return (
        <section id="makers" className="bg-cream px-6 py-24 md:px-12 lg:px-20 lg:py-32">
            <div className="mx-auto max-w-[1600px]">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div>
                        <p className="mb-8 text-xs font-bold tracking-[0.2em] text-orange">
                            05 / THE PEOPLE BEHIND THE OBJECTS
                        </p>

                        <h2 className="max-w-4xl font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                            GOOD DESIGN STARTS
                            <br />
                            WITH GOOD <span className="text-orange">IMAGINATION.</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-8 text-charcoal/65 lg:pb-2">
                        Behind every reimagined object is someone who saw potential where others saw an ending. Meet the
                        independent makers turning overlooked materials into meaningful design.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                    {makers.map((maker) => (
                        <MakerCard key={maker.number} {...maker} />
                    ))}
                </div>

                <div className="mt-16 flex flex-col justify-between gap-8 border-t border-charcoal/20 pt-10 md:flex-row md:items-center">
                    <div>
                        <p className="text-xs font-bold tracking-[0.15em] text-orange">YOUR WORK BELONGS HERE.</p>

                        <h3 className="mt-3 font-heading text-3xl sm:text-4xl">Have something worth reimagining?</h3>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <a
                            href="#join"
                            className="inline-flex items-center gap-3 bg-orange px-6 py-4 text-xs font-bold tracking-wide text-white transition-colors hover:bg-charcoal"
                        >
                            BECOME A MAKER
                            <ArrowUpRight size={16} />
                        </a>

                        <a
                            href="#collection"
                            className="inline-flex items-center gap-2 self-center border-b border-charcoal pb-2 text-xs font-bold tracking-wide hover:text-orange"
                        >
                            EXPLORE THE COLLECTION
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
