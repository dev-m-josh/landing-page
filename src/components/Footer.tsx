import { ArrowUpRight, ArrowUp } from "lucide-react";

const pathways = [
    {
        number: "01",
        title: "I WANT TO DISCOVER",
        description: "Find distinctive objects made differently.",
        link: "#collection",
        action: "EXPLORE OBJECTS",
    },
    {
        number: "02",
        title: "I WANT TO CREATE",
        description: "Bring your ideas and craft to the marketplace.",
        link: "mailto:hello@remake.example?subject=Becoming%20a%20Maker",
        action: "JOIN AS A MAKER",
    },
    {
        number: "03",
        title: "I HAVE MATERIALS",
        description: "Connect surplus resources with creative minds.",
        link: "mailto:hello@remake.example?subject=Material%20Partnership",
        action: "BECOME A PARTNER",
    },
];

function Footer() {
    return (
        <>
            <section id="join" className="bg-orange px-6 py-24 text-charcoal md:px-12 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-6 text-xs font-bold tracking-[0.25em]">08 / FIND YOUR PLACE IN THE STORY</p>

                    <h2 className="max-w-5xl font-heading text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
                        WHAT WILL
                        <br />
                        YOU RE:MAKE?
                    </h2>

                    <p className="mt-8 max-w-lg text-sm leading-7 text-charcoal/75">
                        Whether you create, supply or simply appreciate thoughtful design, there is a place for you in a
                        different way of making things.
                    </p>

                    <div className="mt-16 grid gap-4 md:grid-cols-3">
                        {pathways.map((pathway) => (
                            <article
                                key={pathway.number}
                                className="flex min-h-64 flex-col justify-between border border-charcoal/25 p-7 transition hover:bg-charcoal hover:text-cream"
                            >
                                <div>
                                    <div className="flex justify-between">
                                        <span className="text-xs font-bold">{pathway.number}</span>
                                        <ArrowUpRight size={20} />
                                    </div>

                                    <h3 className="mt-10 font-heading text-2xl">{pathway.title}</h3>

                                    <p className="mt-3 text-sm leading-6 opacity-70">{pathway.description}</p>
                                </div>

                                <a
                                    href={pathway.link}
                                    className="mt-8 flex items-center justify-between border-t border-current/25 pt-5 text-xs font-bold tracking-widest"
                                >
                                    {pathway.action}
                                    <ArrowUpRight size={16} />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-charcoal px-6 py-12 text-cream md:px-12 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col justify-between gap-10 border-b border-cream/20 pb-12 md:flex-row">
                        <div>
                            <a href="#" className="font-heading text-5xl">
                                Re<span className="text-orange">:</span>Make
                            </a>

                            <p className="mt-4 text-xs tracking-widest text-cream/50">NOT WASTE. NOT YET.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 text-sm">
                            <div className="flex flex-col gap-4">
                                <span className="mb-2 text-[10px] font-bold tracking-widest text-orange">EXPLORE</span>
                                <a href="#collection" className="hover:text-orange">
                                    Collection
                                </a>
                                <a href="#story" className="hover:text-orange">
                                    Our Story
                                </a>
                                <a href="#makers" className="hover:text-orange">
                                    Makers
                                </a>
                                <a href="#materials" className="hover:text-orange">
                                    Materials
                                </a>
                            </div>

                            <div className="flex flex-col gap-4">
                                <span className="mb-2 text-[10px] font-bold tracking-widest text-orange">CONNECT</span>
                                <a href="#join" className="hover:text-orange">
                                    Join Re:Make
                                </a>
                                <a href="mailto:hello@remake.example" className="hover:text-orange">
                                    Email Us
                                </a>
                                <a href="#" className="hover:text-orange">
                                    Instagram
                                </a>
                                <a href="#" className="hover:text-orange">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-5 pt-8 text-[10px] tracking-widest text-cream/40 md:flex-row md:items-center">
                        <p>© {new Date().getFullYear()} RE:MAKE. ALL RIGHTS RESERVED.</p>
                        <p>MADE FOR A MORE THOUGHTFUL FUTURE.</p>
                        <a href="#" className="flex items-center gap-2 hover:text-orange">
                            BACK TO TOP <ArrowUp size={14} />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
