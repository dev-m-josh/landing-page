import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Transformation() {
    const [position, setPosition] = useState(50);

    return (
        <section id="transformation" className="bg-[#DCD8CA] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
            <div className="mx-auto max-w-[1600px]">
                {/* Heading */}
                <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
                    <div>
                        <p className="mb-8 text-xs font-bold tracking-[0.2em] text-orange">
                            04 / THE ART OF REIMAGINING
                        </p>

                        <h2 className="font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                            SAME MATERIAL.
                            <br />
                            <span className="text-orange">DIFFERENT POSSIBILITY.</span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-sm leading-8 text-charcoal/65 lg:justify-self-end">
                        What was once overlooked can become something extraordinary. Behind every Re:Make object is a
                        material with a past and a possibility.
                    </p>
                </div>

                {/* Before and after slider */}
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal sm:aspect-[16/9] h-125 w-6xl">
                    {/* AFTER image */}
                    <img
                        src="/public/images/remake-stool.png"
                        alt="Finished furniture made from reclaimed timber"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* BEFORE image */}
                    <div
                        className="absolute inset-0 z-10 overflow-hidden"
                        style={{
                            clipPath: `inset(0 ${100 - position}% 0 0)`,
                        }}
                    >
                        <img
                            src="/public/images/log.png"
                            alt="Raw reclaimed timber materials before transformation"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    {/* Image labels */}
                    <div className="absolute left-5 top-5 z-20 bg-charcoal px-4 py-3 text-[10px] font-bold tracking-widest text-cream sm:left-8 sm:top-8">
                        BEFORE / LEFT BEHIND
                    </div>

                    <div className="absolute right-5 top-5 z-20 bg-orange px-4 py-3 text-[10px] font-bold tracking-widest text-white sm:right-8 sm:top-8">
                        AFTER / REIMAGINED
                    </div>

                    {/* Slider divider */}
                    <div className="absolute bottom-0 top-0 z-20 w-[2px] bg-white" style={{ left: `${position}%` }}>
                        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-white shadow-lg">
                            <ArrowUpRight size={22} />
                        </div>
                    </div>

                    {/* Invisible range control */}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={position}
                        onChange={(event) => setPosition(Number(event.target.value))}
                        aria-label="Compare the material before and after transformation"
                        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
                    />
                </div>

                <p className="mt-4 text-center text-[10px] font-bold tracking-[0.15em] text-charcoal/50">
                    DRAG TO DISCOVER THE TRANSFORMATION
                </p>

                {/* Material story */}
                <div className="mt-16 grid gap-10 border-t border-charcoal/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="mb-3 text-[10px] font-bold tracking-widest text-orange">THE MATERIAL</p>
                        <h3 className="font-heading text-2xl">Reclaimed timber</h3>
                    </div>

                    <div>
                        <p className="mb-3 text-[10px] font-bold tracking-widest text-orange">PREVIOUS LIFE</p>
                        <h3 className="font-heading text-2xl">Surplus wood offcuts</h3>
                    </div>

                    <div>
                        <p className="mb-3 text-[10px] font-bold tracking-widest text-orange">NEW PURPOSE</p>
                        <h3 className="font-heading text-2xl">Functional furniture</h3>
                    </div>

                    <div>
                        <p className="mb-3 text-[10px] font-bold tracking-widest text-orange">THE POSSIBILITIES</p>
                        <a
                            href="#collection"
                            className="inline-flex items-center gap-2 border-b border-charcoal pb-2 text-xs font-bold tracking-wide transition-colors hover:text-orange"
                        >
                            EXPLORE THE COLLECTION
                            <ArrowDown size={15} />
                        </a>
                    </div>
                </div>

                <div className="mt-12">
                    <a
                        href="#collection"
                        className="inline-flex items-center gap-3 bg-orange px-6 py-4 text-xs font-bold tracking-wide text-white transition-colors hover:bg-charcoal"
                    >
                        SEE WHAT'S POSSIBLE
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
