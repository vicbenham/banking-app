export interface Transaction{
  id: string;
  receiverAccountId: string;
  amount: number;
  status: string;
  description: string;
}
