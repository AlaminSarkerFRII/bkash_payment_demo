import React from 'react'
import { useForm } from 'react-hook-form';
import { useGlobalCtx } from '../../../Contexts/GlobalProvider';
import Contact from './Contact'
import Order from './Order'
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const { register,getValues, handleSubmit } = useForm();
    const { getPayment } = useGlobalCtx();
    const navigate = useNavigate()
    
    const formValues = getValues();

    const onSubmit = async (data) => {
        try {
            await getPayment(data);
            console.log(data);
            // navigate(`/?buy=success&email=${data.email}` );
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-x-8 py-12">
                <div className="col-span-7 ">
                    <Contact register={register} />
                </div>
                <div className="col-span-5 ">
                    <Order formValues={formValues} />
                </div>
            </div>
        </form>
    )
}
