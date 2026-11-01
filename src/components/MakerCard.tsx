import { ArrowUpRight } from "lucide-react";

interface MakerCardProps {
    name: string;
    specialty: string;
    description: string;
    image: string;
    number: string;
}

export default function MakerCard({ name, specialty, description, image, number }: MakerCardProps) {
    return (
        <article className="group">
            <a href="#join" className="relative block overflow-hidden bg-[#D9D5C8]" aria-label={`Discover ${name}`}>
                <div className="aspect-[4/5] overflow-hidden">
                    <img
                        src={image}
                        alt={`${name} creative workshop`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <span className="absolute left-4 top-4 bg-cream px-3 py-2 text-[10px] font-bold tracking-widest text-charcoal">
                    {number}
                </span>

                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange text-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={19} />
                </span>
            </a>

            <div className="pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-orange">{specialty}</p>

                <h3 className="mt-2 font-heading text-3xl">{name}</h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-charcoal/65">{description}</p>
            </div>
        </article>
    );
}
