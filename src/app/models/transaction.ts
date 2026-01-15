export interface Transaction{
  id: string;
  receiverAccountId: string;
  receiverName: string;
  type: string;
  date: Date;
  amount: number;
  status: string;
  description: string;
}
