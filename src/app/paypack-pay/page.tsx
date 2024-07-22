"use client"
import Alert from '@/components/frontend/Alert';
import Button from '@/components/frontend/Button';
import Input from '@/components/frontend/Input';
import Modal from '@/components/frontend/Modal';
import React, { Fragment, useState } from 'react'

const Paypack = () => {

    const [paymentMethod, setPaymentMethod] = useState("");
    const [phone, setPhone] = useState("");
    const [ mode, setMode ] = useState<any>();
    const [ loadingPayment, setLoadingPayment ] = useState(false);
    const [ paymentError, setPaymentError] = useState<any>();
    const [ paymentId, setPaymentId ] = useState<any>();

    // function PaymentModal({ onClose, plan }) {
    //     return (
    //       <Modal
    //         onClose={onClose}
    //         title="Kwishura ifatabuzi"
    //         Content={() => {
    //           return (
    //             <div>
    //               {/* <Pay plan={plan} onClose={onClose} /> */}
    //             </div>
    //           );
    //         }}
    //       />
    //     );
    //   }


    // function Pay({ plan, close }) {

        
    // }
    const handlePayment = () => {

        }
    
  return (
    <div className='max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500'>
            <div className='mb-10'>
                <h1 className='text-4xl font-extrabold mb-2'>Jersey Commerce</h1>
                <h2 className='text-2xl'>has requested <span className='font-bold'>$90</span></h2>

            </div>
            <Fragment>
          <p className="text-sm  font-medium capitalize text-black">
            Hitamo uburyo bwo kwishyura
          </p>
          <div className="grid grid-cols-2 mt-4 gap-2">
            {[
              {
                name: "Mtn momo",
                desc: "Ishyura na mtn",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/600px-New-mtn-logo.jpg",
              },
              {
                name: "Airtel money",
                desc: "Ishyura na airtel",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/3/3a/Airtel_logo-01.png",
              },
            ].map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setPaymentMethod(e.name);
                  }}
                  className={`${
                    e.name === paymentMethod
                      ? "border-primary bg-black/60 bg-opacity-10 hover:bg-opacity-10 hover:bg-primary"
                      : "border-gray-200 hover:bg-slate-50 hover:text-black"
                  } border flex items-start py-2 rounded-md cursor-pointer`}
                >
                  <div className="mx-3">
                    <img
                      className="h-10 w-10 rounded-[4px]"
                      src={e.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-sm mb-1">{e.name}</h4>
                    <p className="text-sm capitalize font-medium text-black">
                      {e.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {paymentError && (
            <div className="mt-4">
              <Alert danger>{paymentError}</Alert>
            </div>
          )}
          <div className="mt-4">
            <div className={`form-group mb-2 `}>
              <div className={"label  font-semibold capitalize mb-1"}>
                <span className="text-black">Shyiramo nimero</span>
              </div>

              <Input
                disabled={!paymentMethod}
                placeholder="07 xxx xxx xxx"
                onChange={(e: any) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <Button
              onClick={() => {
                if (
                  phone &&
                  phone.length === 10 &&
                  phone.split("").slice(0, 2).join("") === "07"
                ) {
                  handlePayment();
                } else {
                  setPaymentError("nimero yawe yanditse nabi.");
                }
              }}
              loading={loadingPayment}
              disabled={!phone}
              className="mt-4 border border-gray-300 w-32 mx-auto"
            >
              Ishyura 
              {/* {plan.price.toLocaleString()} FRW */}
            </Button>
          </div>
        </Fragment>
    </div>
  )
}

export default Paypack