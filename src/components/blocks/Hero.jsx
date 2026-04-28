import Button from "../ui/Button";
import Badge from "../ui/Badge";
import ProductPreview from "./ProductPreview";

export default function Hero({
    title,
    subtitle,
    primaryText = "Get Started",
    secondaryText = "Learn More",
    image,
    showProductPreview = false,
}) {
    return (
        <section className="py-24 md:py-32 px-6 relative">
            {/* Soft brand glow backdrop */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[90px]" />
              <div className="absolute top-24 right-[-120px] h-[320px] w-[320px] rounded-full bg-accent-500/15 blur-[80px]" />
              <div className="absolute inset-0 bg-brand-gradient-soft opacity-60" />
            </div>
            
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
                {/* Text */}
                <div className="space-y-6">
                    {/* Badge */}
                    <div className="flex items-center gap-2">
                        <Badge variant="primary" className="text-xs">Open Source</Badge>
                        <Badge variant="secondary" className="text-xs">React + Tailwind</Badge>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.06] text-neutral-900 dark:text-neutral-50 tracking-tight">
                        <span className="text-balance">{title}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button size="lg">{primaryText}</Button>
                        <Button size="lg" variant="outline">{secondaryText}</Button>
                    </div>
                </div>

                {/* Product Preview or Image */}
                {showProductPreview ? (
                    <div className="flex justify-center md:justify-end">
                        <ProductPreview />
                    </div>
                ) : image ? (
                    <div className="flex justify-center md:justify-end">
                        <img
                           src={image}
                           alt="Hero"
                           className="w-full max-w-md md:w-[420px] rounded-2xl shadow-xl hover-lift"
                        />
                    </div>
                ) : null}
            </div>
        </section>
    )
}
