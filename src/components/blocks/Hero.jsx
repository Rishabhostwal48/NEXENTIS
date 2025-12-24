import Button from "../ui/Button";

export default function Hero({
    title,
    subtitle,
    primaryText = "Get Started",
    secondaryText = "Learn More",
    image,
}) {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        {title}
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                        {subtitle}
                    </p>

                    <div className="flex gap-4">
                        <Button size="lg">{primaryText}</Button>
                        <Button size="lg" variant="outline">{secondaryText}</Button>
                    </div>
                </div>

                {/* Image */}
                {image &&(
                    <div className="flex justify-center md:justify-end">
                        <img
                           src="{image}"
                           alt="Hero"
                           className="w-ful md:w-[420px] rounded-xl shadow-lg"
                        />
                    </div>
                )}
            </div>
        </section>
    )
}