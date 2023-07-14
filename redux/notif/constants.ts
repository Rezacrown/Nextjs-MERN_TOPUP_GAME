export const SET_NOTIF = "REDUX/NOTIF/SET_NOTIF";
export const CLEAR_NOTIF = "REDUX/NOTIF/CLEAR_NOTIF";

export interface notifInterface {
  status?: boolean;
  typeNotif?: string;
  message?: string;
}
