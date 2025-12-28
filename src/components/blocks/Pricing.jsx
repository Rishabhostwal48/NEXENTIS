import { pricingPlans } from "../../data/pricingPlans";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { useContext } from "react";
import { Authcontext } from "../../context/AuthContext";
import { startCheckout } from "../../utils/CHECKOUT.JS";

export default function Pricing(){
    const {user} = useContext(Authcontext)
    return(
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map(plan => (
                <div 
                  key={plan.id}
                  className={`rounded-xl border bg-white dark:bg-neutral-900 p-8 hover:shadow-lg transition-shadow ${
                    plan.highlighted
                    ? "border-neutral-900 dark:border-neutral-50 shadow-md"
                    : "border-neutral-200 dark:border-neutral-800"
                  }`}
                >
                    {plan.highlighted && (
                        <Badge variant="primary" className="mb-4">
                            Most Popular
                        </Badge>
                    )}

                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">{plan.name}</h3>

                    <p className="text-4xl font-bold my-4 text-neutral-900 dark:text-neutral-50">
                        {plan.price}
                        <span className="text-base font-normal text-neutral-500 dark:text-neutral-400">{plan.period}</span>
                    </p>

                    <ul className="space-y-3 mb-8">
                        {plan.features.map(f =>(
                            <li key={f} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                                <span className="text-neutral-900 dark:text-neutral-50 mt-1">•</span>
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>

                        <Button className="w-full" onClick={() => startCheckout(plan.id)}>
                        {user ? plan.cta : "Login to Upgrade"}
                        </Button>
                </div>
            ))}
        </div>
    )
}