
import type { Account, Transaction } from './types';
import { TransactionType } from './types';

export const initialAccounts: Account[] = [
  { id: 1, name: 'صندوق', type: 'Asset' },
  { id: 2, name: 'حساب بانکی', type: 'Asset' },
  { id: 3, name: 'حساب‌های دریافتنی', type: 'Asset' },
  { id: 4, name: 'فروش', type: 'Revenue' },
  { id: 5, name: 'اجاره دفتر', type: 'Expense' },
  { id: 6, name: 'حقوق و دستمزد', type: 'Expense' },
  { id: 7, name: 'لوازم اداری', type: 'Expense' },
];

export const initialTransactions: Transaction[] = [
  { id: 1, date: '2023-10-26', description: 'فروش محصول الف', accountId: 4, type: TransactionType.Income, amount: 1500000 },
  { id: 2, date: '2023-10-25', description: 'پرداخت اجاره ماه اکتبر', accountId: 5, type: TransactionType.Expense, amount: 500000 },
  { id: 3, date: '2023-10-24', description: 'خرید لوازم اداری', accountId: 7, type: TransactionType.Expense, amount: 75000 },
  { id: 4, date: '2023-10-22', description: 'فروش خدمات مشاوره‌ای', accountId: 4, type: TransactionType.Income, amount: 2000000 },
  { id: 5, date: '2023-10-20', description: 'پرداخت حقوق کارمندان', accountId: 6, type: TransactionType.Expense, amount: 1200000 },
  { id: 6, date: '2023-11-01', description: 'دریافت از مشتری بابت فاکتور ۱۲۳', accountId: 3, type: TransactionType.Income, amount: 800000 },
  { id: 7, date: '2023-11-05', description: 'فروش محصول ب', accountId: 4, type: TransactionType.Income, amount: 250000 },
  { id: 8, date: '2023-11-10', description: 'پرداخت قبض اینترنت', accountId: 7, type: TransactionType.Expense, amount: 45000 },
  { id: 9, date: '2023-12-02', description: 'فروش نرم افزار', accountId: 4, type: TransactionType.Income, amount: 3000000 },
  { id: 10, date: '2023-12-15', description: 'پرداخت اجاره ماه دسامبر', accountId: 5, type: TransactionType.Expense, amount: 500000 },
];
