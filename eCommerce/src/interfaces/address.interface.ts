export interface AddOrEditAddress {
  isBilling: boolean;
  isBillingDefault: boolean;
  isShipping: boolean;
  isShippingDefault: boolean;
  city: string;
  country: string;
  postCode: string;
  street: string;
}
