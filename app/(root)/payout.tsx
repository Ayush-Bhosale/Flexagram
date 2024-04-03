"use client"
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';

const RazorpayButton: React.FC = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [clientName, setClientName] = useState('');
    const [amount, setAmount] = useState(0);
    const [contactNumber, setContactNumber] = useState('');
    const [contactError, setContactError] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => {
            setScriptLoaded(true);
        };
        document.body.appendChild(script);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'clientName') {
            setClientName(value);
        } else if (name === 'amount') {
            setAmount(parseFloat(value));
        } else if (name === 'contactNumber') {
            setContactNumber(value);
        }
    };

    const handlePayment = () => {
        if (!scriptLoaded) {
            console.error('Razorpay SDK script not loaded');
            return;
        }

        // Validate contact number
        if (contactNumber.length !== 10 || !/^\d+$/.test(contactNumber)) {
            setContactError('Contact number must be a 10-digit number');
            return;
        }

        const options = {
            key: 'rzp_test_C3XphEJhcSWOMH',
            amount: amount * 100,
            currency: 'INR',
            description: 'Payment for services',
            name: clientName,
            email : "flexagram.in",
            contact: contactNumber,
            prefill: {
                name: clientName,
                contact: contactNumber,
                methods: [] // Empty array to remove preferred payment methods
            },
            theme: {
                color: '#8b5cf6'
            }
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-4 p-4">
                {/* First Row: Name */}
                <div>
                    <label htmlFor="clientName" className="text-base-semibold text-light-2">
                        Freelancer Name
                    </label>
                    <div className='mb-4 mt-4'>
                        <input
                            type="text"
                            id="clientName"
                            name="clientName"
                            value={clientName}
                            onChange={handleInputChange}
                            placeholder="Enter Freelancer name"
                            className="account-form_input no-focus"
                        />
                    </div>
                    {/* Form message or validation error message can go here if needed */}
                </div>
                {/* Second Row: Amount and Contact Number */}
                <div className="flex flex-col gap-2">
                    {/* Amount Input */}
                    <div>
                        <label htmlFor="amount" className="text-base-semibold text-light-2 mb-2">
                            Amount
                        </label>
                        <div className="mb-4 mt-2">
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                value={amount}
                                onChange={handleInputChange}
                                placeholder="Enter the amount"
                                className="account-form_input no-focus"
                            />
                        </div>
                        {/* Form message or validation error message can go here if needed */}
                    </div>
                    {/* Contact Number Input */}
                    <div>
                        <label
                            htmlFor="contactNumber"
                            className="text-base-semibold text-light-2 mb-2"
                        >
                            Freelancer Contact Number
                        </label>
                        <div className="mb-4 mt-2">
                            <input
                                type="text"
                                id="contactNumber"
                                name="contactNumber"
                                value={contactNumber}
                                onChange={handleInputChange}
                                placeholder="Enter contact number"
                                className="account-form_input no-focus"
                            />
                        </div>
                        {/* Form message or validation error message can go here if needed */}
                        {contactError && (
                            <p className="text-red-500">{contactError}</p>
                        )}
                    </div>
                </div>
                {/* Pay Now Button */}
                <Button className='user-card_btn border-s-zinc-900 p-2' onClick={handlePayment}>Pay Now</Button>
            </div>
        </div>
    );
};

export default RazorpayButton;
