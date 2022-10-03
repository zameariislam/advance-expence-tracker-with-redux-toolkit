import React from 'react';
import editIcon from '../../assets/images/edit.svg'
import delteIcon from '../../assets/images/delete.svg'
import { useDispatch } from 'react-redux';
import { activeEditMode } from '../../features/transaction/transactionSlice';

const Transaction = ({ transaction }) => {

    const { name, type, amount } = transaction
    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch(activeEditMode(transaction))

    }
    return (
        <li class={`transaction ${type}`}>
            <p>{name}</p>
            <div class="right">
                <p>৳ {amount}</p>
                <button onClick={handleEdit} class="link">
                    <img alt=""
                        class="icon"
                        src={editIcon}
                    />
                </button>
                <button class="link">
                    <img alt=""
                        class="icon"
                        src={delteIcon}
                    />
                </button>
            </div>
        </li>
    );
};

export default Transaction;