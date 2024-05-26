interface Address {
  country: string;
  zipCode: string;
  city: string;
  street: string;
  isShipping?: boolean;
}

export default function UserAdress({ country, zipCode, city, street, isShipping }: Address) {
  const style = 'mb-2 text-xl font-bold text-teal-400';
  return (
    <div className="flex flex-col text-left">
      {!isShipping && <p className={style}>Адрес для счета</p>}
      {isShipping && <p className={style}>Адрес доставки</p>}
      <div className="w-full flex justify-between flex-wrap gap-12 text-lg text-white sm:gap-20">
        <div className="flex flex-col gap-2">
          <p>Страна: {country}</p>
          <p>Индекс: {zipCode}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Город: {city}</p>
          <p>Улица {street}</p>
        </div>
      </div>
    </div>
  );
}
