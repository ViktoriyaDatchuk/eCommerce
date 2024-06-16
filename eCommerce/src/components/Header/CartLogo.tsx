interface CartLogoProps {
  onClick: () => void;
}

export default function CartLogo({ onClick }: CartLogoProps) {
  return (
    <button type="button" onClick={onClick}>
      <img src="/disc.png" alt="disc" />
    </button>
  );
}
