
// Response from API Interface
export interface CategoryInterface {
  _id?: string;
  name?: string;
}

export interface UserInterface {
  _id: string;
  phoneNumber: number;
  name: string;
}

export interface NominalInterface {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
  handleSelect?: (e?: any) => void
}

export interface BankInterface {
  _id?: string;
  name?: string;
  noRekening?: string | number;
  nameBank?: string;
}

export interface PaymentInterface {
  _id?: string;
  type?: string;
  status?: "nonaktif" | "aktif";
  bank: Array<BankInterface>;
}

export interface VoucherInterface {
  _id?: string;
  name?: string;
  category?: CategoryInterface;
  isFeatured?: boolean;
  status?: "aktif" | "nonaktif";
  thumbnail?: `uploads/${string}`;
  user?: UserInterface;
  __v?: number;
  nominal?: [NominalInterface];
}




// Component Interface
export interface GameItemsInterface {
  _id?: string;
  name: string;
  category: CategoryInterface;
  status?: "aktif" | "nonaktif";
  thumbnail?: `uploads/${string}`;
}

export interface DetailPageInterface {
  voucher?: VoucherInterface | undefined;
  payment?: Array<PaymentInterface> | undefined;
}
