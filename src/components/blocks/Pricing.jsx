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
                  className={`rounded-xl border p-6 ${
                    plan.highlighted
                    ? "border-black dark:border-white"
                    : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                    {plan.highlighted && (
                        <Badge variant="primary" className="mb-3">
                            Most Popular
                        </Badge>
                    )}

                    <h3 className="text-xl font-semibold">{plan.name}</h3>

                    <p className="text-3xl font-bold my-4">
                        {plan.price}
                        <span className="text-sm text-gray-500">{plan.period}</span>
                        </p>

                        <ul className="space-y-2 mb-6">
                            {plan.features.map(f =>(
                                <li key={f} className="text-sm text-gray-600 dark:text-gray-300">
                                    • {f}
                                </li>
                            ))}
                        </ul>

                        <Button className="w-full" onClick={() => startCheckout(plan.id)}>
                        {user? plan.cta : "Login to Upgrad "}
                        </Button>
                </div>
            ))}
        </div>
    )
}