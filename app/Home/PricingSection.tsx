export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      popular: false,
      features: [
        'College Predictor Access',
        'Cutoff Analysis',
        'Basic Support',
        '30 Days Access'
      ]
    },
    {
      name: 'Premium',
      price: '₹1,499',
      popular: true,
      features: [
        'All Starter Features',
        'Fee Structure Details',
        'Expert Counseling',
        'Hospital Information',
        '1 Year Access',
        'Priority Support'
      ]
    },
    {
      name: 'Pro',
      price: '₹1,799',
      popular: false,
      features: [
        'All Premium Features',
        'Personal Counselor',
        'Document Assistance',
        'Admission Tracking',
        '2 Years Access',
        '24/7 Support'
      ]
    },
    {
      name: 'Elite Plus',
      price: '₹26,999',
      popular: false,
      features: [
        'All Pro Features',
        'One-on-One Mentoring',
        'Application Review',
        'Interview Preparation',
        'Lifetime Access',
        'Dedicated Support Team'
      ]
    }
  ]

  return (
    <section id="fees" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-wide">Pricing Plans</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Our Paid Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your medical admission journey
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 md:p-8 transition transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary to-accent text-white shadow-2xl md:scale-105'
                  : 'bg-gray-50 border-2 border-gray-200 hover:border-primary'
              }`}
            >
              {plan.popular && (
                <div className="bg-white bg-opacity-20 text-white font-bold text-sm px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                plan.popular ? 'text-white' : 'text-gray-900'
              }`}>
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className={`text-3xl md:text-4xl font-bold ${
                  plan.popular ? 'text-white' : 'text-primary'
                }`}>
                  {plan.price}
                </span>
                <p className={`text-sm mt-2 ${
                  plan.popular ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  One-time payment
                </p>
              </div>

              <ul className={`space-y-3 mb-8 text-sm md:text-base ${
                plan.popular ? 'text-blue-50' : 'text-gray-700'
              }`}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <span className={`mt-1 text-lg ${
                      plan.popular ? 'text-white' : 'text-accent'
                    }`}>
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full font-bold py-3 px-4 rounded-lg transition text-sm md:text-base ${
                plan.popular
                  ? 'bg-white text-primary hover:bg-gray-100'
                  : 'bg-primary text-white hover:bg-blue-700'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
