import countryList from '../store/Countries';

export default function CountryListModal() {
  const labelStyleGreen = 'text-teal-400 text-lg text-left flex flex-col';
  return (
    <label htmlFor="country" className={`${labelStyleGreen} mt-8`}>
      Country/Region
      <select defaultValue=" ">
        {countryList.map((el) => (
          <option key={el.country} value={el.iso}>
            {el.country}
          </option>
        ))}
      </select>
    </label>
  );
}
