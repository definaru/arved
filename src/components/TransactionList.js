import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'


export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)

    return (
        <>
            {transactions.length ? 
            <>
            <h3>История счёта:</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
            </> : ''}
        </>
    )
}
