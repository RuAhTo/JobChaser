import React, { Component } from "react";
import { render, fireEvent, RenderResult } from '@testing-library/react';
import SignUpForm from '../src/components/SignUpForm';

describe('SignUpForm', () => {
    let component: RenderResult

    beforeEach(() => {
        component = render(<SignUpForm/>)
    })

    test('renders registration form correctly', () => {
        const { getByText, getByPlaceholderText } = component;
        const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
        const registerButton = getByText('Register') as HTMLButtonElement;
    })

    test('updates email and password state on input change', () => {
        const { getByPlaceholderText } = component;
        const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
    
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('password123');
      });
    
      // För detta test måste du ändra handleSubmit-funktionen i Registreringskomponent.tsx för att returnera true, eftersom vi inte kan simulera en serveranrop i detta test
      test('submits registration form on button click', () => {
        const { getByPlaceholderText, getByText } = component;
        const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
        const registerButton = getByText('Register') as HTMLButtonElement;
    
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(registerButton);
        
    })
})