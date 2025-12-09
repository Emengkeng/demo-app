import { NextRequest, NextResponse } from 'next/server';
import { eventop } from '../../../../lib/eventop';
import { db } from '../../../../lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-webhook-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 401 }
      );
    }

    const event = eventop.webhooks.constructEvent(
      body,
      signature,
      process.env.EVENTOP_WEBHOOK_SECRET!
    );

    console.log('Webhook received:', event.event);

    switch (event.event) {
      case 'subscription.created':
        await handleSubscriptionCreated(event.data);
        break;

      case 'subscription.payment_succeeded':
        await handlePaymentSucceeded(event.data);
        break;

      case 'subscription.payment_failed':
        await handlePaymentFailed(event.data);
        break;

      case 'subscription.cancelled':
        await handleSubscriptionCancelled(event.data);
        break;

      default:
        console.log('Unhandled event type:', event.event);
    }

    return NextResponse.json({ received: true });

  } catch (error: any) {
    console.error('Webhook processing failed:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 400 }
    );
  }
}

async function handleSubscriptionCreated(data: any) {
  console.log('💳 New subscription created:', data);

  db.createOrUpdateUser(data.customer.email, {
    subscriptionStatus: 'active',
    subscriptionPlan: data.plan.planId,
    subscriptionId: data.subscriptionId,
    walletAddress: data.customer.walletAddress
  });

  // In production: Send welcome email, grant access, etc.
}

async function handlePaymentSucceeded(data: any) {
  console.log('✅ Payment succeeded:', data);

  // In production: Extend subscription, send receipt, etc.
}

async function handlePaymentFailed(data: any) {
  console.log('❌ Payment failed:', data);

  // In production: Notify user, show warning, etc.
}

async function handleSubscriptionCancelled(data: any) {
  console.log('🚫 Subscription cancelled:', data);

  db.createOrUpdateUser(data.customer.email, {
    subscriptionStatus: 'cancelled'
  });

  // In production: Revoke access, send confirmation email, etc.
}