import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

interface EditButtonProps {
  onClick: () => void;
}

export default function EditButton({ onClick }: EditButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      <FontAwesomeIcon icon={faPen} size="sm" style={{ color: '#fb923c' }} />
    </button>
  );
}
