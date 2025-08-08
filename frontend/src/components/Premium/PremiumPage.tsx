import React from "react";
import { CheckCircle } from "lucide-react";
import { PlanIO } from "../../typeIO/priliminaryIO";


const PremiumPlans: React.FC = () => {
  const plans: PlanIO[] = [
    {
      title: "Basic Access",
      duration: "Lifetime Free",
      price: "₹0",
      features: [
        "Browse open posts & sessions",
        "View limited profiles",
        "Join public live classes",
      ],
      button: "Get Started",
      color: "btn-outline",
    },
    {
      title: "Premium Member",
      duration: "Monthly Access",
      price: "₹499 / month",
      features: [
        "Unlock phone/email of tutors or learners",
        "Join premium learning sessions",
        "Your posts appear higher in listings",
      ],
      button: "Go Premium",
      color: "btn-primary",
    },
    {
      title: "Elite Partner",
      duration: "3 Months Access",
      price: "₹1299 / 3 months",
      features: [
        "Everything in Premium",
        "Feature your posts at the top",
        "Detailed engagement insights",
        "Verified Badge + Priority Support",
      ],
      button: "Become Elite",
      color: "btn-secondary",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">🌟 Unlock Premium Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan: PlanIO, idx: number) => (
          <div
            key={idx}
            className="rounded-box bg-base-100 shadow-xl border border-base-200 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{plan.duration}</p>
              <p className="text-3xl font-extrabold text-primary mb-4">
                {plan.price}
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className={`btn ${plan.color} w-full`}>{plan.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumPlans;