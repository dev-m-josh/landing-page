import { ArrowDown, ArrowUpRight, Package, Hammer, ShoppingBag } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "MATERIALS FIND A NEW PURPOSE",
        description:
            "Surplus and overlooked materials are introduced to a network of creative makers looking for their next opportunity.",
        detail: "FROM LEFTOVERS TO RAW POTENTIAL",
        icon: Package,
    },
    {
        number: "02",
        title: "MAKERS REIMAGINE THE POSSIBLE",
        description:
            "Independent designers and craftspeople transform those materials into thoughtful, functional and distinctive objects.",
        detail: "MADE WITH INTENTION",
        icon: Hammer,
    },
    {
        number: "03",
        title: "GOOD DESIGN FINDS ITS PEOPLE",
        description:
            "People discover and purchase original pieces, giving reimagined materials a place in everyday life.",
        detail: "READY FOR A SECOND LIFE",
        icon: ShoppingBag,
    },
];

function HowItWorks() {
    return (
        <section className="bg-charcoal px-6 py-24 text-cream md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <p className="mb-5 text-xs font-bold tracking-[0.25em] text-orange">07 / THE RE:MAKE PROCESS</p>

                        <h2 className="font-heading text-5xl leading-[1.05] md:text-7xl">
                            THREE PARTS.
                            <br />
                            <span className="text-orange">ONE NEW</span>
                            <br />
                            POSSIBILITY.
                        </h2>
                    </div>

                    <div className="flex flex-col justify-end">
                        <p className="max-w-md text-sm leading-8 text-cream/65">
                            We believe better design can begin with what already exists. Re:Make brings together the
                            people, materials and ideas that make that possible.
                        </p>
                    </div>
                </div>

                <div className="mt-20 grid gap-12 md:grid-cols-3">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <article key={step.number} className="relative">
                                <div className="mb-8 flex items-center justify-between border-b border-cream/20 pb-5">
                                    <span className="text-xs font-bold tracking-widest text-orange">
                                        STEP {step.number}
                                    </span>

                                    <Icon size={25} strokeWidth={1.4} />
                                </div>

                                <h3 className="max-w-xs font-heading text-3xl leading-tight md:text-4xl">
                                    {step.title}
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-cream/60">{step.description}</p>

                                <p className="mt-8 text-[10px] font-bold tracking-[0.18em] text-orange">
                                    {step.detail}
                                </p>

                                {index !== steps.length - 1 && (
                                    <div className="mt-8 flex items-center gap-3 text-cream/30 md:hidden">
                                        <ArrowDown size={17} />
                                        <span className="text-[10px] tracking-widest">NEXT STEP</span>
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>

                <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-cream/20 pt-8 md:flex-row md:items-center">
                    <p className="font-heading text-3xl">IT STARTS WITH SEEING THINGS DIFFERENTLY.</p>

                    <a
                        href="#collection"
                        className="inline-flex items-center gap-3 bg-orange px-7 py-4 text-xs font-bold tracking-widest text-white transition hover:bg-cream hover:text-charcoal"
                    >
                        EXPLORE THE COLLECTION
                        <ArrowUpRight size={17} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
