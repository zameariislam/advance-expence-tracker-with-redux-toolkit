import { BrowserRouter, Route, Routes } from "react-router-dom";
import Balance from "./components/Balance";
import Home from "./components/detailTransaction/Home";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Transactions from "./components/Transactions/Transactions";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Layout >
                        <Balance />
                        <Form />
                        <Transactions />
                    </Layout>
                } >


                </Route>
                <Route path="home" element={<Home/>}></Route>


            </Routes>


        </BrowserRouter>



    );
}

export default App;
