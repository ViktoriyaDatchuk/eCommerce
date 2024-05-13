import Button from './Button';

export default function Header() {
  return (
    <header className="flex justify-between">
      <Button text="find a movie" isPrimary={false} />
      <div className="flex gap-5">
        <Button text="sign in" isPrimary />
        <Button text="sign up" isPrimary />
      </div>
    </header>
  );
}
