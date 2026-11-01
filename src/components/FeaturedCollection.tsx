import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProductCard from "./ProductCard";

const categories = ["All Objects", "Furniture", "Lighting", "Accessories", "Home & Living"];

const products = [
    {
        number: "01",
        name: "The Second Life Stool",
        material: "Reclaimed timber",
        category: "Furniture",
        price: "$180",
        maker: "Studio Form",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=900&q=85",
    },
    {
        number: "02",
        name: "Melted Light",
        material: "Recycled materials",
        category: "Lighting",
        price: "$95",
        maker: "Material Matters",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&q=85",
    },
    {
        number: "03",
        name: "Reworked Carryall",
        material: "Surplus textiles",
        category: "Accessories",
        price: "$65",
        maker: "Thread Again",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=900&q=85",
    },
    {
        number: "04",
        name: "Form No. 04",
        material: "Repurposed metal",
        category: "Home & Living",
        price: "$120",
        maker: "Studio Form",
        image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=900&q=85",
    },
];

export default function FeaturedCollection() {
    const [activeCategory, setActiveCategory] = useState("All Objects");

    const filteredProducts =
        activeCategory === "All Objects" ? products : products.filter((product) => product.category === activeCategory);

    return (
        <section id="collection" className="bg-cream px-6 py-24 md:px-12 lg:px-20 lg:py-32">
            <div className="mx-auto max-w-[1600px]">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div>
                        <p className="mb-8 text-xs font-bold tracking-[0.2em] text-orange">03 / THE COLLECTION</p>

                        <h2 className="max-w-3xl font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                            OLD MATERIAL.
                            <br />
                            <span className="text-orange">NEW OBSESSION.</span>
                        </h2>

                        <p className="mt-7 max-w-xl text-sm leading-7 text-charcoal/65">
                            Meet the objects proving that the best things aren't always made from new beginnings.
                            Discover furniture, lighting and everyday objects reimagined by independent makers.
                        </p>
                    </div>

                    <a
                        href="#join"
                        className="inline-flex items-center gap-2 self-start border-b border-charcoal pb-2 text-xs font-bold tracking-wide transition-colors hover:text-orange lg:self-auto"
                    >
                        EXPLORE ALL OBJECTS
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                {/* Category filters */}
                <div className="mt-14 flex gap-3 overflow-x-auto border-b border-charcoal/15 pb-5">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`shrink-0 px-4 py-3 text-xs font-bold transition-colors ${
                                activeCategory === category
                                    ? "bg-charcoal text-cream"
                                    : "bg-transparent text-charcoal/60 hover:bg-charcoal/10 hover:text-charcoal"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product grid */}
                <div className="mt-10 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.number} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
