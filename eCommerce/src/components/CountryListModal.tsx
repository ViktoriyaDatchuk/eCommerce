import countryList from '../store/Countries';

interface CountryListModalProps {
  defaultValue: string;
}

export default function CountryListModal({ defaultValue }: CountryListModalProps) {
  const labelStyleGreen = 'text-teal-400 text-lg text-left flex flex-col';
  return (
    <label htmlFor="country" className={`${labelStyleGreen} mt-8`}>
      Country/Region
      <select defaultValue={defaultValue}>
        {countryList.map((el) => (
          <option key={el.country} value={el.iso}>
            {el.country}
          </option>
        ))}
      </select>
    </label>
  );
}
