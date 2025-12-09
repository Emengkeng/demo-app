import { ArrowRight, Wallet, Smartphone, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Subscribe to StreamFlix with cryptocurrency in just a few simple steps. 
            Keep full control of your funds while enjoying automatic payments.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Choose Plan
              </h3>
              <p className="text-gray-300 text-sm">
                Select the plan that fits your needs
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-purple-400" />
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Download App
              </h3>
              <p className="text-gray-300 text-sm">
                Get the Eventop app if you don't have it
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-purple-400" />
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Create Wallet
              </h3>
              <p className="text-gray-300 text-sm">
                Set up your subscription wallet (2 minutes)
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-purple-400" />
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Start Streaming
              </h3>
              <p className="text-gray-300 text-sm">
                Your subscription is active!
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Your Money, Your Control
            </h3>
            <p className="text-gray-300 mb-3">
            Unlike traditional subscriptions where you give credit card details, with StreamFlix
            you keep full custody of your funds. Your money stays in your blockchain wallet, and
            we can only withdraw what you've explicitly authorized.
            </p>
            <p className="text-gray-300">
            Cancel anytime and your remaining balance stays yours. No waiting for refunds,
            no customer service calls.
            </p>
            </div>
            </div>
            <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-green-400" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Earn While You Watch
          </h3>
          <p className="text-gray-300 mb-3">
            Your subscription wallet automatically deposits idle funds into DeFi yield protocols. 
            This means your money earns returns (typically 5-8% APY) while waiting for the next 
            payment.
          </p>
          <p className="text-gray-300">
            It's like earning interest on your Netflix subscription. You pay $15/month, but only 
            once a month. The other 29 days? Your funds are working for you.
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Automatic Payments
          </h3>
          <p className="text-gray-300 mb-3">
            Once you subscribe, our smart contract automatically executes payments each month. 
            You don't need to do anything—just keep enough balance in your wallet.
          </p>
          <p className="text-gray-300">
            You'll get notified before each payment in the Eventop app. If your balance is low, 
            you can top up directly from the app.
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-orange-400" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Secure & Transparent
          </h3>
          <p className="text-gray-300 mb-3">
            All payments happen on-chain via smart contracts. You can verify every transaction 
            on the Solana blockchain. No hidden fees, no surprise charges.
          </p>
          <p className="text-gray-300">
            The smart contract code is open source. You can review exactly how your subscription 
            works before signing up.
          </p>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <Link
        href="/pricing"
        className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition"
      >
        Try It Now <ArrowRight className="w-5 h-5" />
      </Link>
      <p className="text-gray-400 mt-4">
        Testing on Solana Devnet • No real money required
      </p>
    </div>
  </div>
</div>
);
}