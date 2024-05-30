import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface EditButtonProps {
  icon: IconProp;
  onClick: () => void;
  size?: SizeProp;
}

export default function EditButton({ icon, onClick, size = 'sm' }: EditButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} size={size} style={{ color: '#fb923c' }} />
    </button>
  );
}
