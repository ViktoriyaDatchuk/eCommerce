import { useState } from 'react';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import EditButton from '../EditButton';
import ProfilModal from '../../pages/Profil/ProfilModal';
import deleteAddress from '../../user/deleteAddress';

interface AddressInfo {
  id: string;
  country: string | undefined;
  postalCode: string | undefined;
  city: string | undefined;
  street: string | undefined;
  shippingAddress: boolean | undefined;
  billingAddress: boolean | undefined;
  defaultBilling: boolean;
  defaultShipping: boolean;
  userId: string;
  version: number;
}

export default function ProfilAdress({
  id,
  country,
  postalCode,
  city,
  street,
  shippingAddress,
  billingAddress,
  defaultBilling,
  defaultShipping,
  userId,
  version,
}: AddressInfo) {
  const style = 'mb-2 flex gap-5 text-xl text-teal-400';

  const [isEditAddress, setIsEditAddress] = useState(false);

  const editCurrentAddress = () => {
    setIsEditAddress(true);
  };
  const navigate = useNavigate();

  const deleteCurrentAddress = (addressId: string) => {
    deleteAddress(userId, addressId, version, navigate);
  };

  return (
    <div className="w-full flex flex-col">
      {isEditAddress && (
        <ProfilModal
          modalName="Edit address"
          isOpenModal
          setIsOpenModal={setIsEditAddress}
          shipping={shippingAddress}
          billing={billingAddress}
          billingDefault={defaultBilling}
          shippingDefault={defaultShipping}
          editAddress
        />
      )}
      {shippingAddress && (
        <div className={style}>
          {!defaultShipping && <p>Shipping</p>}
          {defaultShipping && <p>Shipping(default)</p>}
          <EditButton icon={faPen} onClick={editCurrentAddress} />
          <EditButton icon={faTrash} onClick={() => deleteCurrentAddress(id)} />
        </div>
      )}
      {billingAddress && (
        <div className={style}>
          {!defaultBilling && <p>Billing</p>}
          {defaultBilling && <p>Billing(default)</p>}
          <EditButton icon={faPen} onClick={editCurrentAddress} />
          <EditButton icon={faTrash} onClick={() => deleteCurrentAddress(id)} />
        </div>
      )}
      <div className="w-full flex flex-col text-left">
        <div className="flex justify-between flex-wrap gap-12 text-lg text-white sm:gap-20">
          <div className="flex flex-wrap gap-5 text-xl text-orange-400">
            <p>Country: {country}</p>
            <p>Postal code: {postalCode}</p>
            <p>City: {city}</p>
            <p>Street: {street}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
