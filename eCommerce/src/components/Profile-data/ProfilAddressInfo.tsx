import EditButton from '../EditButton';

interface AddressInfo {
  country: string | undefined;
  zipCode: string | undefined;
  city: string | undefined;
  street: string | undefined;
  isShipping?: boolean;
}

export default function UserAdress({ country, zipCode, city, street, isShipping }: AddressInfo) {
  const style = 'mb-2 flex gap-5 text-xl font-bold text-teal-400';
  const editAddress = () => {
    console.log('address');
  };
  return (
    <div className="flex flex-col text-left">
      {!isShipping && (
        <div className={style}>
          <p>Billing address</p>
          <EditButton onClick={editAddress} />
        </div>
      )}
      {isShipping && (
        <div className={style}>
          <p>Shipping address</p>
          <EditButton onClick={editAddress} />
        </div>
      )}
      <div className="w-full flex justify-between flex-wrap gap-12 text-lg text-white sm:gap-20">
        <div className="flex flex-col gap-2">
          <p>Country: {country}</p>
          <p>Zip-code: {zipCode}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>City: {city}</p>
          <p>Street: {street}</p>
        </div>
      </div>
    </div>
  );
}
