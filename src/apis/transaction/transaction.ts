import { instance, getHeader } from "../instance";
import axios, { AxiosResponse } from 'axios';
const headers = getHeader();


export const listHistoryTransactionBuyer = async (): Promise<any> => {
  const { data } = await instance.get("/transaction/history-transaction-buyer", headers);
  return data;
};

export const listHistoryTransactionSeller = async (): Promise<any> => {
  const { data } = await instance.get("/transaction/history-transaction-seller", headers);
  return data;
};

export const confirmSale = async (idTran: any): Promise<any> => {
    const data = await instance.post("/transaction/seller/confirm/" + idTran, headers);
    return data;
};