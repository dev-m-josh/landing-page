import { ArrowUpRight, Menu } from "lucide-react";

const navigation = [
    { label: "Discover", href: "#collection" },
    { label: "Our Story", href: "#story" },
    { label: "Makers", href: "#makers" },
    { label: "Materials", href: "#materials" },
];

export default function Navbar() {
    return (
        <header className="relative z-50 border-b border-charcoal/15 bg-cream">
            <div className="mx-auto flex min-h-20 max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-20">
                <a href="#home" className="font-heading text-3xl tracking-tight">
                    Re:Make<span className="text-orange">.</span>
                </a>

                <nav className="hidden items-center gap-9 md:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-xs font-semibold transition-colors hover:text-orange"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a
                        href="#join"
                        className="inline-flex items-center gap-2 bg-orange px-5 py-4 text-xs font-bold tracking-wide text-white transition-colors hover:bg-charcoal"
                    >
                        JOIN THE MOVEMENT
                        <ArrowUpRight size={15} />
                    </a>
                </div>

                <button className="p-2 md:hidden" aria-label="Open navigation menu">
                    <Menu size={25} />
                </button>
            </div>
        </header>
    );
}
