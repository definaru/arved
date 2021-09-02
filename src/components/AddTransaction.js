import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()
        if (amount !== 0 && amount !== '') {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount
            }

            addTransaction(newTransaction)
            setText('')
            setAmount('')    
        } return
    }

    return (
        <>
            <h3>Добавить новую транзакцию:</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="amount">
                        <strong>Сумма:</strong>
                        <small className="block text-muted">(negative - expense, positive - income)</small>
                    </label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Введите сумму..." 
                    />
                </div>                
                <div className="form-control">
                    <label htmlFor="text">
                        <strong>Описание:</strong>
                    </label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Введите описание..." 
                    />
                </div>
                <button className="btn">Добавить транзакцию</button>
                <p className="text-muted mt-5 text-sm">&copy; Defina LLC, 2011 |  All Right Recerved</p>
            </form>
        </>
    )
}
