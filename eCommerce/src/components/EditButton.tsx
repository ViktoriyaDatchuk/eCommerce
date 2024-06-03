import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface EditButtonProps {
  icon: IconProp;
  onClick?: () => void;
  size?: SizeProp;
  id?: string;
}

export default function EditButton({ icon, onClick, size = 'sm', id }: EditButtonProps) {
  return (
    <button type="button" id={id} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size={size} style={{ color: '#fb923c' }} />
    </button>
  );
}
