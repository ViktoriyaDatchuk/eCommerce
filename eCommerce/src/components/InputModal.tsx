import { useEffect, useState } from 'react';

interface InputModalProps {
  type: string;
  title: string;
  value?: string;
}

export default function InputModal({ type, title, value = '' }: InputModalProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <label htmlFor={title} className="flex flex-col">
      <div className="flex gap-2 capitalize text-orange-400">{title}</div>
      <input
        className="px-1 rounded-sm"
        type={type}
        id={title}
        placeholder={`Enter new ${title}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </label>
  );
}
