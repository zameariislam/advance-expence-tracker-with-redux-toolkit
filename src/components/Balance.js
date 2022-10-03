
import { useSelector } from "react-redux";


export default function Balance() {

    const { transactions } = useSelector(state => state.transaction)
    console.log(transactions)


    const calculation = (transactions) => {
        let income = 0

        transactions.forEach(transaction => {

            const { type, amount } = transaction
            if (type === 'income') {

                income += amount
            }
            else {
                income -= amount
            }


        });
        return income


    }
    console.log(calculation(transactions))


    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>Dk </span>
                {
                    transactions?.length > 0 ? <span>{calculation(transactions)}</span> : 0
                }




            </h3>
        </div>
    );
}
