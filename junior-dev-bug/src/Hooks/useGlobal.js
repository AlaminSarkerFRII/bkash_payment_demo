import axios from "axios";
import { useState } from "react";
import countryCode from "../Features/Checkout/Data/countryCode.json";
import { useForm } from "react-hook-form";


const useGlobal = () => {
  const [open, setOpen] = useState(false);
  const [mbCode, setMbCode] = useState(countryCode[15]);
  const [totalPrice, setTotalPrice] = useState(0);
  const {getValues} = useForm()


  const toggleModal = () => setOpen(!open);

  const getPayment = (body) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/bkash/`, { ...body, totalPrice });
  }

  
  return {
    toggleModal,
    open,
    setMbCode,
    mbCode,
    getPayment,
    totalPrice,
    setTotalPrice,
    getValues
  };
};
export default useGlobal;
