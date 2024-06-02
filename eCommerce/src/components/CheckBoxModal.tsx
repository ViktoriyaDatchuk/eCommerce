interface CheckBoxModalProps {
  name: string;
}

export default function CheckBoxModal({ name }: CheckBoxModalProps) {
  const labelStyleCheckbox = 'text-teal-400 flex flex-row mt-4';
  return (
    <label htmlFor={name} className={labelStyleCheckbox}>
      <input type="checkbox" id={name} className="mr-2" /> {name}
    </label>
  );
}
