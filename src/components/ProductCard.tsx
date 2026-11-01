import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
    name: string;
    material: string;
    category: string;
    price: string;
    image: string;
    maker: string;
    number: string;
}

export default function ProductCard({ name, material, category, price, image, maker, number }: ProductCardProps) {
    return (
        <article className="group">
            <a href="#join" aria-label={`View ${name}`} className="relative block overflow-hidden bg-[#D9D5C8]">
                <div className="aspect-[4/5] overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <span className="absolute left-4 top-4 bg-cream px-3 py-2 text-[10px] font-bold tracking-wider text-charcoal">
                    {number}
                </span>

                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={19} />
                </span>
            </a>

            <div className="flex items-start justify-between gap-4 pt-5">
                <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/50">
                        {category} / {material}
                    </p>

                    <h3 className="font-heading text-2xl">{name}</h3>

                    <p className="mt-2 text-xs text-charcoal/60">By {maker}</p>
                </div>

                <p className="pt-1 text-sm font-bold">{price}</p>
            </div>
        </article>
    );
}
