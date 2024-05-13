import Button from './Button';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="flex justify-between">
      <Logo />
      <Button text="find a movie" isPrimary={false} />
      <div className="flex gap-5">
        <Button text="sign in" isPrimary />
        <Button text="sign up" isPrimary />
      </div>
    </header>
  );
}
