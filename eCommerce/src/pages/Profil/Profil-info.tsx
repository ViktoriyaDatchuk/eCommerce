import Page from '../../components/Page';
import UserAdress from '../../components/User/UserAddressInfo';
import UserDataInfo from '../../components/User/UserData';

export default function ProfilInfo() {
  return (
    <Page className="w-full h-full flex justify-center">
      <div className="max-w-5xl w-full flex flex-wrap justify-center">
        <UserDataInfo first="Lalala" last="UUUUUUU" data="0101010" email="ewfwef@sdff.yt" />
        <div className="grow flex flex-col justify-center items-center gap-8">
          <UserAdress country="BLR" zipCode="s123" city="Minsk" street="best" />
          <UserAdress country="BLR" zipCode="s123" city="Minsk" street="best" isShipping />
        </div>
      </div>
    </Page>
  );
}
