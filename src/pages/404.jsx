import React from 'react';
import ErrorForm from '../components/ErrorPage/ErrorForm';
import DeliveryImg from '../components/styles/DeliveryImg/DeliveryImg';
// import DeliveryImg from '../../components/styles/DeliveryImg/DeliveryImg';
import { Warehouse, Car, House, BackgroundHouse, Road, Sun, Cloud, MiniCloud } from '../icons';

function ErrorPage() {
  return (
    <>
      <ErrorForm />
      <div className="image-container">
        <Warehouse />
        <Car />
        <House />
      </div>
      {/* <DeliveryImg /> */}
    </>
  );
}

export default ErrorPage;
