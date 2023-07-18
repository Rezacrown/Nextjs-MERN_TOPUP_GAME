import { VoucherInterface } from "@/interface/Player";

export interface DataItems {
  VerifyId: string;
  voucher: VoucherInterface;
  nominal: string;
  paymentMethod: {
    payment: string;
    bank: string;
  };
  bankAccount: string;
}


export interface newDataItems {
  payments: any;
  payment: string;
  bank: string;
  VerifyId: string;
  voucher: VoucherInterface;
  nominal: string;
  bankAccount: string;
}
