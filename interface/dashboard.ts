


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


export interface DashboardPropsData {
  historyVoucherTopup: HistoryVoucherTopup;
  historyPayment: HistoryPayment;
  historyUser: {
    name: string;
    phoneNumber: number;
  };
  _id: string;
  name: string;
  email: string;
  accountUser: string;
  tax: number;
  value: number;
  status: "success" | "failed" | "pending";
  player: string;
  category: {
    _id: string;
    name: string;
  };
  user: string;
}