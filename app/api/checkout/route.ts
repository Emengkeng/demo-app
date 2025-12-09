import { NextRequest, NextResponse } from 'next/server';
import { eventop } from '../../../lib/eventop';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, email } = body;

    if (!planId || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const session = await eventop.checkout.create({
      planId,
      customerEmail: email,
      customerId: email, // Using email as customer ID for this demo
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      metadata: {
        email,
        source: 'streamflix_demo'
      }
    });

    return NextResponse.json({
      checkoutUrl: session.url,
      sessionId: session.sessionId
    });

  } catch (error: any) {
    console.error('Checkout creation failed:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}