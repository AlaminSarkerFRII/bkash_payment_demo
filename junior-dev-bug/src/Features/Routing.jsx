import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CheckoutPage from '../Pages/CheckoutPage';
import Success from './Checkout/Components/Success';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}
