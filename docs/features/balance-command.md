---
sidebar_position: 2
title: "Balance Command"
hide_table_of_contents: true
---

# 💰 Balance Command

The balance command allows you to check your current credit balance and add funds to your PODgram.ai account directly through Discord.

{/* Using HTML for image sizing - markdown doesn't support width constraints */}
<img src="/img/features/balance/1.png" alt="Balance Command Response" style={{maxWidth: '365px', width: '100%'}} />

---

## 📊 Checking Your Balance

To check your current balance, simply use the `/balance` command in any channel where the PODgram.ai bot is available.

The bot will display:
- Your current credit balance
- Pricing information for each service:
  - **Image Generation**: $0.06 per image
  - **Background Removal**: $0.04 per image
  - **Image Analysis**: $0.01 per analysis
  - **Image Vectorization**: $0.02 per image

---

## 💳 Adding Funds

### Quick Amount Selection

You can quickly add funds by clicking one of the preset amount buttons:
- **$25** - Quick access button
- **$50** - Quick access button
- **$100** - Quick access button

### Custom Amount

If you need a different amount, click the **"Custom Amount"** button to enter a specific value.

<img src="/img/features/balance/2.png" alt="Custom Amount Modal" style={{maxWidth: '365px', width: '100%'}} />

In the custom amount modal:
1. Enter your desired amount in USD
2. Click **"Submit"** to proceed
3. Or click **"Cancel"** to return to the previous screen

---

## 💵 Payment Process

After selecting your desired amount (either preset or custom), the bot will display a payment confirmation message with a **"Pay with Stripe"** button.

<img src="/img/features/balance/3.png" alt="Pay with Stripe Button" style={{maxWidth: '365px', width: '100%'}} />

### Steps to Complete Payment

1. Click the **"Pay with Stripe"** button
2. You'll be redirected to a secure Stripe checkout page
3. Enter your payment information
4. Complete the transaction

<img src="/img/features/balance/4.png" alt="Stripe Checkout Page" style={{maxWidth: '365px', width: '100%'}} />

The checkout page supports:
- Credit and debit cards (Visa, Mastercard, American Express, Discover)
- Link by Stripe for faster checkout
- Multiple currencies (default: USD)

---

## ✅ Payment Confirmation

Once your payment is successfully processed:
- Your credits will be **automatically added** to your account
- You'll receive a **success message** in Discord
- Your new balance will be immediately available for use

---

## 💡 Important Notes

- **Currency**: All transactions are processed in **USD (United States Dollar)** by default
- **Instant Credit**: Credits are added to your account immediately after successful payment
- **Secure Payment**: All payments are processed securely through Stripe
- **Receipt**: You'll receive a payment receipt via email from Stripe

---

## 🔒 Security

Your payment information is never shared with PODgram.ai. All transactions are handled securely by Stripe, a PCI-compliant payment processor trusted by millions of businesses worldwide.
