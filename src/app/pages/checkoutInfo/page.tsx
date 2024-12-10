import React from 'react'
import styles from '../checkoutInfo/checkout.module.css';

export default function CheckoutInfo() {
  return (
    <div className={styles.form}>
     
<label className="input input-bordered flex items-center gap-2 mb-4">

  <input type="text" className="grow" placeholder="Email" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">

  <input type="text" className="grow" placeholder="Name" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  
  <input type="text" className="grow" placeholder="Address" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  
  <input type="text" className="grow" placeholder="Appartment, building, etc.  (optional)" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  
  <input type="text" className="grow" placeholder="Postal Code / City" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">

  <input type="text" className="grow" placeholder="Phone Number" />
</label>

{/* //checkboxxxxxxxxxxxxxxxx */}
<div className={styles.gap} >
    <div className="form-control">
    <label className={`cursor-pointer label ${styles.checkboxLabel}`}>
        
        <input type="checkbox" defaultChecked className="checkbox checkbox-accent" />
        <div className={styles.checkbox} style={{marginLeft: '0.5rem'}}>Save this information for next time</div>
    </label>
    </div>

</div>


<h2 className="text-lg font-bold mb-4 mt-8">Payment</h2>

<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" className="grow" placeholder="Card Number" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" className="grow" placeholder="Expiration Date (MM/YY)" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" className="grow" placeholder="CVV" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" className="grow" placeholder="Card Holder Name" />
</label>

<button className="btn btn-primary btn-block mt-8">Complete Order</button>

    </div>
  )
}