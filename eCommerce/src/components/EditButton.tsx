import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface EditButtonProps {
  icon: IconProp;
  onClick: () => void;
}

export default function EditButton({ icon, onClick }: EditButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="sm" style={{ color: '#fb923c' }} />
    </button>
  );
}
