'use client';

import { SidebarProvider } from '@/components/ui/sidebar';

export default function PricingPage() {
  return (
    <SidebarProvider>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-300">Choose the perfect plan for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 py-12">
            {/* Starter Plan */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-slate-600 transition">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-slate-400 mb-6">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li>✓ 10 projects</li>
                <li>✓ Basic analytics</li>
                <li>✓ Email support</li>
                <li>✗ Advanced features</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-slate-700 rounded-lg p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 mt-4">Professional</h3>
              <p className="text-slate-200 mb-6">For growing teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-slate-300">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-slate-200">
                <li>✓ 100 projects</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
              </ul>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-slate-600 transition">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-slate-400 mb-6">For large organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li>✓ Unlimited projects</li>
                <li>✓ Custom analytics</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ SLA & compliance</li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded transition border border-slate-600">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="text-center text-slate-400 pt-12 border-t border-slate-700">
            <p>All plans include a 14-day free trial. No credit card required.</p>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
