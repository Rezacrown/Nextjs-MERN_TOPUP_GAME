export interface HistoryVoucherTopup {
  gameName: string;
  category: string;
  thumbnail: `uploads/${string}`;
  coinName: string;
  coinQuantity: string;
  Price: number;
}

export interface HistoryPayment {
  name: string;
  type: string;
  bankName: string;
  noRekening: number;
}

export interface HistoryUser {
  name: string;
  phoneNumber: number;
}


// complex interface
export interface TransactionProps {
  historyVoucherTopup: HistoryVoucherTopup;
  historyPayment: HistoryPayment;
  historyUser: HistoryUser;
  _id: string;
  name: string;
  email: string;
  accountUser: "12345";
  tax: number;
  value: number;
  status: "pending" | "success" | "failed";
  player: string;
  category: string;
  user: string;
}

export interface TransactionTable {
  _id: string;
  title: string;
  category: string;
  item: string;
  price: number;
  status: "pending" | "success" | "failed";
  thumbnail: string;
}
