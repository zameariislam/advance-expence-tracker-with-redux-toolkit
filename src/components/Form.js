import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTransaction, createTransactions } from "../features/transaction/transactionSlice";


export default function Form() {

    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch()

    const { editing } = useSelector((state) => state.transaction)
    console.log(editing)

    useEffect(() => {
        if (editing?.id) {
            setEditMode(true)

            setName(editing?.name)
            setType(editing?.type)
            setAmount(editing?.amount)
        }
        else {
            reset()
            setEditMode(false)
        }

    }, [editing])




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
            amount: Number(amount)
        }))

        reset()

    }

    const handleEdit = (e) => {
        e.preventDefault()
        setEditMode(true)
        dispatch(changeTransaction({
            id: editing.id,
            data: {
                name,
                type,
                amount: Number(amount)
            }

        }))


        reset()

    }

    const cancelEditMode = () => {
        setEditMode(false)
        reset()
    }


    return (
        <div className="form">
            <h3>Add Transaction</h3>

            <form onSubmit={editMode ? handleEdit : handleCreate} >
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

                    {editMode ? 'Update Transaction' : ' Add Transaction'}
                </button>


            </form>

            {
                editMode && <button onClick={cancelEditMode} className="btn cancel_edit">Cancel Edit</button>
            }




        </div>
    );
}
