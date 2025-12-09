import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6">
            Unlimited Entertainment.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Pay with Crypto.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Stream thousands of movies and TV shows. Subscribe with cryptocurrency 
            and keep full control of your funds while earning yield on idle balances.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link 
              href="/pricing"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/how-it-works"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold text-lg transition"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* Demo Badge */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-yellow-500/20 border border-yellow-500/50 rounded-full px-6 py-2">
            <p className="text-yellow-300 font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Demo Site - Testing on Solana Devnet
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Full Custody</h3>
            <p className="text-gray-300">
              Your funds stay in your wallet. Cancel anytime and keep your balance.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Earn Yield</h3>
            <p className="text-gray-300">
              Idle subscription funds automatically earn yield through DeFi protocols.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Automatic Payments</h3>
            <p className="text-gray-300">
              Set it and forget it. Payments happen automatically on-chain.
            </p>
          </div>
        </div>
      </div>

      {/* How It's Different */}
      <div className="bg-black/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Crypto Subscriptions?
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  No Chargebacks
                </h3>
                <p className="text-gray-300">
                  Blockchain transactions are final. No fraudulent disputes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Global Access
                </h3>
                <p className="text-gray-300">
                  Pay from anywhere without currency conversions or payment restrictions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Lower Fees
                </h3>
                <p className="text-gray-300">
                  No 2-3% payment processor fees. Just minimal blockchain gas costs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Your Money Works For You
                </h3>
                <p className="text-gray-300">
                  Earn 5-8% APY on your subscription balance through integrated DeFi protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}