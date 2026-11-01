import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-12 px-6 py-16 md:px-12 lg:grid-cols-2 lg:px-20 lg:py-20"
        >
            {/* Left content */}
            <div className="max-w-2xl">
                <p className="mb-8 text-xs font-bold tracking-[0.2em] text-charcoal/70">01 / A NEW WAY TO SEE THINGS</p>

                <h1 className="font-heading text-[4.5rem] leading-[0.9] tracking-tight sm:text-7xl lg:text-[6.5rem]">
                    NOT WASTE.
                    <br />
                    <span className="text-orange">NOT YET.</span>
                </h1>

                <p className="mt-8 max-w-lg text-base leading-8 text-charcoal/70">
                    The future of design is hiding in what we throw away. Re:Make is a creative marketplace where
                    overlooked materials become extraordinary objects, brought to life by independent makers and
                    discovered by people who see things differently.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-6">
                    <a
                        href="#collection"
                        className="inline-flex items-center gap-3 bg-orange px-6 py-4 text-xs font-bold tracking-wide text-white transition-colors duration-300 hover:bg-charcoal"
                    >
                        EXPLORE THE COLLECTION
                        <ArrowUpRight size={16} />
                    </a>

                    <a
                        href="#makers"
                        className="border-b border-charcoal pb-2 text-xs font-bold tracking-wide transition-colors hover:text-orange"
                    >
                        BECOME A MAKER
                    </a>
                </div>

                <p className="mt-16 text-[10px] font-bold tracking-[0.2em] text-charcoal/60">
                    DISCOVER A DIFFERENT KIND OF DESIGN.
                </p>
            </div>

            {/* Right image */}
            <div className="relative mt-4 lg:mt-0">
                <div className="h-[420px] overflow-hidden sm:h-[520px] lg:h-[600px]">
                    <img
                        src="/public/images/remake-stool.png.png"
                        alt="Sculptural reclaimed timber chair"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>

                <div className="absolute -right-3 -top-5 flex h-24 w-24 rotate-12 items-center justify-center rounded-full bg-orange text-center text-[10px] font-bold leading-4 text-white sm:-right-5 sm:h-28 sm:w-28">
                    MADE TO BE
                    <br />
                    REMADE
                </div>

                <p className="absolute bottom-5 left-5 text-[10px] font-bold tracking-[0.2em] text-white">
                    OBJECTS WITH A SECOND STORY.
                </p>
            </div>
        </section>
    );
}
