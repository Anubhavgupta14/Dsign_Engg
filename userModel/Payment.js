const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
    },
    tracking_id: {
        type: String,
    },
    bank_ref_no: {
        type: String,
    },
    order_status: {
        type: String,
        required: true,
        default: "Pending"
    },
    payment_mode: {
        type: String,
    },
    failure_message: {
        type: String,
    },
    card_name: {
        type: String,
    },
    status_code: {
        type: String,
    },
    status_message: {
        type: String,
    },
    amount: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        default: "INR",
    },
    billing_name: {
        type: String,
    },
    billing_address: {
        type: String,
    },
    billing_city: {
        type: String,
    },
    billing_state: {
        type: String,
    },
    billing_zip: {
        type: String,
    },
    billing_country: {
        type: String,
    },
    billing_tel: {
        type: String,
    },
    billing_email: {
        type: String,
    },
    delivery_name: {
        type: String,
    },
    delivery_address: {
        type: String,
    },
    delivery_city: {
        type: String,
    },
    delivery_state: {
        type: String,
    },
    delivery_zip: {
        type: String,
    },
    delivery_country: {
        type: String,
    },
    delivery_tel: {
        type: String,
    },
    merchant_param1: {
        type: String,
    },
    merchant_param2: {
        type: String,
    },
    merchant_param3:{
        type: String,
    },
    vault: {
        type: String,
    },
    offer_type: {
        type: String,
    },
    offer_code: {
        type: String,
    },
    discount_value: {
        type: String,
    },
    mer_amount: {
        type: String,
    },
    eci_value: {
        type: String,
    },
    retry: {
        type: String,
    },
    response_code: {
        type: String,
    },
    billing_notes: {
        type: String,
    },
    trans_date: {
        type: String,
    },
    bin_country: {
        type: String,
    }

}, { timestamps: true });

mongoose.models = {};

export default mongoose.model('Donation', DonationSchema);