import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditButton from '../EditButton';

interface AddressInfo {
  country: string | undefined;
  zipCode: string | undefined;
  city: string | undefined;
  street: string | undefined;
  isShipping?: boolean;
}

export default function UserAdress({ country, zipCode, city, street, isShipping }: AddressInfo) {
  const style = 'mb-2 flex gap-5 text-xl text-teal-400';
  const editAddress = () => {
    console.log('edit');
  };
  const deleteAddress = () => {
    console.log('delete');
  };

  return (
    <div className="w-full flex flex-col text-left">
      {!isShipping && (
        <div className={style}>
          <p>Billing</p>
          <EditButton icon={faPen} onClick={editAddress} />
          <EditButton icon={faTrash} onClick={deleteAddress} />
        </div>
      )}
      {isShipping && (
        <div className={style}>
          <p>Shipping</p>
          <EditButton icon={faPen} onClick={editAddress} />
          <EditButton icon={faTrash} onClick={deleteAddress} />
        </div>
      )}
      <div className="flex justify-between flex-wrap gap-12 text-lg text-white sm:gap-20">
        <div className="flex flex-wrap gap-5">
          <p>Country: {country}</p>
          <p>Zip-code: {zipCode}</p>
          <p>City: {city}</p>
          <p>Street: {street}</p>
        </div>
      </div>
    </div>
  );
}
