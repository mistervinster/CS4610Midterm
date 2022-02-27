import { useContext, useState, useEffect } from 'react';
import { ApiContext } from '../../utils/api_context';
import { Transaction } from './transaction';
export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async ()=> {
    const {transactions} = await api.get('/transactions');
    setTransactions(transactions);
    setLoading(false);
  },[]);

  if (loading) return <div>loading</div>

  return (
  <div>Render your transactions here
    <div>
      {transactions.map(transaction => {
        return (<Transaction key={transaction.id} transaction={transaction}></Transaction>);
      })}
    </div>
  </div>
  );
};
