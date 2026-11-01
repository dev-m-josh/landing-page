import { ArrowUpRight, TreePine, Scissors, Layers3 } from "lucide-react";

const materialCategories = [
    {
        number: "01",
        name: "Timber & Wood",
        description: "Offcuts, reclaimed boards, discarded furniture and leftover wood with another life ahead.",
        examples: "WOOD OFFCUTS · RECLAIMED BOARDS · PALLETS",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=900&q=85",
        icon: TreePine,
    },
    {
        number: "02",
        name: "Textiles & Fabric",
        description: "Surplus fabric, production leftovers and discarded textiles ready to become something new.",
        examples: "FABRIC ROLLS · DEADSTOCK · TEXTILE SCRAPS",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
        icon: Scissors,
    },
    {
        number: "03",
        name: "Industrial Materials",
        description: "Unexpected resources from workshops and production processes, waiting for a creative rethink.",
        examples: "METAL · GLASS · PLASTIC · COMPONENTS",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=900&q=85",
        icon: Layers3,
    },
];

function Materials() {
    return (
        <section id="materials" className="bg-cream px-6 py-24 md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div className="max-w-3xl">
                        <p className="mb-5 text-xs font-bold tracking-[0.25em] text-orange">
                            06 / MATERIALS WITH POTENTIAL
                        </p>

                        <h2 className="font-heading text-5xl leading-[1.05] tracking-tight md:text-7xl">
                            WHAT YOU
                            <br />
                            <span className="text-orange">DON'T NEED.</span>
                            <br />
                            WHAT WE DO.
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-7 text-charcoal/70">
                        Every creative transformation starts somewhere. Connect your surplus materials with independent
                        makers who can see their next possibility.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {materialCategories.map((material) => {
                        const Icon = material.icon;

                        return (
                            <article key={material.number} className="group overflow-hidden bg-white">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={material.image}
                                        alt={material.name}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <span className="absolute left-5 top-5 bg-cream px-3 py-2 text-xs font-bold">
                                        {material.number}
                                    </span>

                                    <Icon size={22} className="absolute bottom-5 right-5 text-white" />
                                </div>

                                <div className="p-7">
                                    <h3 className="font-heading text-3xl">{material.name}</h3>

                                    <p className="mt-4 text-sm leading-7 text-charcoal/70">{material.description}</p>

                                    <p className="mt-6 border-t border-charcoal/10 pt-5 text-[10px] font-bold tracking-[0.15em] text-charcoal/50">
                                        {material.examples}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-charcoal/20 pt-8 md:flex-row md:items-center">
                    <div>
                        <p className="font-heading text-3xl">HAVE MATERIALS TO GIVE A SECOND LIFE?</p>
                        <p className="mt-2 text-sm text-charcoal/60">
                            Help makers discover resources they might never have found.
                        </p>
                    </div>

                    <a
                        href="#join"
                        className="inline-flex items-center gap-4 bg-orange px-7 py-4 text-xs font-bold tracking-widest text-white transition hover:bg-charcoal"
                    >
                        BECOME A MATERIAL PARTNER
                        <ArrowUpRight size={17} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Materials;
