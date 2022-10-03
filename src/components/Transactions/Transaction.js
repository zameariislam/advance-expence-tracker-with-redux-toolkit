import React from 'react';
import editIcon from '../../assets/images/edit.svg'
import delteIcon from '../../assets/images/delete.svg'

const Transaction = ({ transaction }) => {

    const { name, type, amount } = transaction
    return (
        <li class={`transaction ${type}`}>
            <p>{name}</p>
            <div class="right">
                <p>৳ {amount}</p>
                <button class="link">
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