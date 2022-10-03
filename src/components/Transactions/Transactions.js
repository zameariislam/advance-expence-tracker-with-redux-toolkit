
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transaction/transactionSlice";


import Transaction from "./Transaction";

export default function Transactions() {
    const dispatch = useDispatch()

    const { transactions, isLoading, isError, error } = useSelector(state => state.transaction)
   

    useEffect(() => {
        dispatch(fetchTransactions())

    }, [dispatch])


    // decide what to render 

    let content = null
    if (isLoading) content = <p>This is Loading...</p>
    if (!isLoading && isError) content = <p>{error}</p>
    if (!isLoading && !isError && transactions?.length === 0) content = <p>No Transaction Found</p>
    if (!isLoading && !isError && transactions?.length > 0) {
        content = transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
    }


    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>
                    {
                        content
                    }

                </ul>
            </div>
        </>
    );
}
