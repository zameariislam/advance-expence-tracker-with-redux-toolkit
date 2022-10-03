import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTransactions } from "../features/transaction/transactionSlice";


export default function Form() {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch()




    const reset = () => {
        setName('')
        setType('')
        setAmount('')
    }

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(createTransactions({
            name,
            type,
            amount
        }))

        reset()

    }


    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={handleCreate} >
                <div className="form-group">
                    <label >Name</label>
                    <input
                        required
                        type="text"
                        name="transaction_name"
                        placeholder="Enter Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}


                    />
                </div>

                <div className="form-group radio">
                    <label >Type</label>
                    <div className="radio_group">
                        <input
                            required
                            type="radio"
                            value="income"
                            name="transaction_type"
                            checked={type === 'income'}
                            onChange={() => setType('income')}

                        />
                        <label >Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            required
                            type="radio"
                            value="expense"
                            name="transaction_type"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={(e) => setType('expense')}

                        />
                        <label >Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label >Amount</label>
                    <input
                        required
                        type="number"
                        placeholder="300"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}

                    />
                </div>

                <button type="submit" className="btn">
                    Add Transaction</button>


            </form>



            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
}
