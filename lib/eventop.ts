import { Eventop } from '@eventop/sdk';

if (!process.env.EVENTOP_API_KEY) {
  throw new Error('EVENTOP_API_KEY is not set');
}

export const eventop = new Eventop({
  apiKey: process.env.EVENTOP_API_KE!,
});

export const PLANS = {
  basic: {
    id: 'basic-monthly',
    name: 'Basic',
    price: 9.99,
    interval: 'month',
    features: [
      'HD streaming',
      '1 device at a time',
      'Unlimited movies & TV shows',
      'Cancel anytime'
    ]
  },
  standard: {
    id: 'standard-monthly',
    name: 'Standard',
    price: 15.99,
    interval: 'month',
    features: [
      'Full HD streaming',
      '2 devices at a time',
      'Unlimited movies & TV shows',
      'Download on 2 devices',
      'Cancel anytime'
    ]
  },
  premium: {
    id: 'premium-monthly',
    name: 'Premium',
    price: 19.99,
    interval: 'month',
    features: [
      '4K + HDR streaming',
      '4 devices at a time',
      'Unlimited movies & TV shows',
      'Download on 4 devices',
      'Cancel anytime'
    ]
  }
};