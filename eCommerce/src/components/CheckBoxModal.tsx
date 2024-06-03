// import { useState } from 'react';

interface CheckBoxModalProps {
  name: string;
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
}

export default function CheckBoxModal({ name, checked, onChange, disabled }: CheckBoxModalProps) {
  const labelStyleCheckbox = 'text-teal-400 flex flex-row mt-4';

  return (
    <label htmlFor={name} className={labelStyleCheckbox}>
      <input type="checkbox" id={name} className="mr-2" checked={checked} onChange={onChange} disabled={disabled} />{' '}
      {name}
    </label>
  );
}
