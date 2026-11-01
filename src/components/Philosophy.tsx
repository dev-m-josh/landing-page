import { ArrowUpRight } from "lucide-react";

const principles = [
    {
        number: "01",
        title: "SEE DIFFERENTLY.",
        description:
            "Discover possibility where others see waste. Every overlooked material has a story waiting for another chapter.",
    },
    {
        number: "02",
        title: "MAKE DIFFERENTLY.",
        description:
            "Independent makers transform forgotten materials into thoughtful objects through imagination and craftsmanship.",
    },
    {
        number: "03",
        title: "LIVE DIFFERENTLY.",
        description:
            "Choose objects with purpose, character and a story worth keeping. Make thoughtful design part of everyday life.",
    },
];

export default function Philosophy() {
    return (
        <section id="story" className="bg-charcoal px-6 py-24 text-cream md:px-12 lg:px-20 lg:py-32">
            <div className="mx-auto max-w-[1600px]">
                <p className="mb-10 text-xs font-bold tracking-[0.2em] text-orange">02 / WHAT WE BELIEVE</p>

                <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <h2 className="max-w-4xl font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                            BEFORE YOU THROW IT AWAY,
                            <span className="text-orange"> IMAGINE WHAT IT COULD BECOME.</span>
                        </h2>

                        <p className="mt-9 max-w-xl text-base leading-8 text-cream/65">
                            We believe great design doesn't always begin with something new. Sometimes it begins with
                            something forgotten. An offcut of timber. A discarded fabric. An overlooked material. With
                            imagination, craftsmanship and a different perspective, what once seemed useless can become
                            something worth keeping.
                        </p>

                        <a
                            href="#collection"
                            className="mt-9 inline-flex items-center gap-3 border-b border-orange pb-2 text-xs font-bold tracking-wide transition-colors hover:text-orange"
                        >
                            DISCOVER OUR APPROACH
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-3 lg:pt-10">
                        <img
                            src="/public/images/before.png"
                            alt="Thoughtfully designed interior"
                            className="h-56 w-full object-cover sm:h-72"
                        />
                        <img
                            src="/public/images/after.png"
                            alt="Creative materials and objects"
                            className="mt-10 h-56 w-full object-cover sm:h-72"
                        />
                    </div>
                </div>

                <div className="mt-24 grid border-t border-cream/20 md:grid-cols-3">
                    {principles.map((principle) => (
                        <article
                            key={principle.number}
                            className="border-b border-cream/20 py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                        >
                            <p className="mb-8 text-xs font-bold tracking-widest text-orange">{principle.number}</p>

                            <h3 className="font-heading text-3xl">{principle.title}</h3>

                            <p className="mt-5 max-w-sm text-sm leading-7 text-cream/60">{principle.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
