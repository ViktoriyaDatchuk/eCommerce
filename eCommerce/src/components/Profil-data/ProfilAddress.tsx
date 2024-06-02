import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditButton from '../EditButton';

interface AddressInfo {
  country: string | undefined;
  zipCode: string | undefined;
  city: string | undefined;
  street: string | undefined;
  shippingAddress: boolean | undefined;
  billingAddress: boolean | undefined;
  defaultBilling: boolean;
  defaultShipping: boolean;
}

export default function UserAdress({
  country,
  zipCode,
  city,
  street,
  shippingAddress,
  billingAddress,
  defaultBilling,
  defaultShipping,
}: AddressInfo) {
  const style = 'mb-2 flex gap-5 text-xl text-teal-400';
  const editAddress = () => {
    console.log('edit');
  };
  const deleteAddress = () => {
    console.log('delete');
  };

  return (
    <div className="flex flex-col">
      {shippingAddress && (
        <div className={style}>
          {!defaultShipping && <p>Shipping</p>}
          {defaultShipping && <p>Shipping(default)</p>}
          <EditButton icon={faPen} onClick={editAddress} />
          <EditButton icon={faTrash} onClick={deleteAddress} />
        </div>
      )}
      {billingAddress && (
        <div className={style}>
          {!defaultBilling && <p>Billing</p>}
          {defaultBilling && <p>Billing(default)</p>}
          <EditButton icon={faPen} onClick={editAddress} />
          <EditButton icon={faTrash} onClick={deleteAddress} />
        </div>
      )}
      <div className="w-full flex flex-col text-left">
        <div className="flex justify-between flex-wrap gap-12 text-lg text-white sm:gap-20">
          <div className="flex flex-wrap gap-5">
            <p>Country: {country}</p>
            <p>Zip-code: {zipCode}</p>
            <p>City: {city}</p>
            <p>Street: {street}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
