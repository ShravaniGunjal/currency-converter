import { useEffect, useState } from "react"
import "./CurrencyDashboard.css"
import { Currencies } from "../Constants/Constants"
import axios from "axios";
export default function CurrencyDashboard() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState("INR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [convertedAmount, setConvertedAmount] = useState("88");
    const [rates, setRates] = useState({});

    function handleAmount(event) {
        setAmount(event.target.value)
    }
    function handleFromCurrency(event) {
        setFromCurrency(event.target.value)
    }
    function handleToCurrency(event) {
        setToCurrency(event.target.value)
    }

      useEffect(() => {
        axios.get("https://api.exchangerate-api.com/v4/latest/"+ fromCurrency)
            .then((Response) => {
                // console.log(Response.data);
                if (Response.status === 200) {
                    console.log("Response", Response);
                    setRates(Response.data.rates);
                }

            })
    }, [fromCurrency])

    // function handleConvert() {
    //     if (fromCurrency === "INR") {
    //         if (toCurrency === "INR") {
    //             setConvertedAmount(amount);
    //         }
    //         if (toCurrency === "USD") {
    //             setConvertedAmount(amount / 88);
    //         }
    //         if (toCurrency === "EURO") {
    //             setConvertedAmount(amount / 102.67);
    //         }
    //     }
    //     if (fromCurrency === "USD") {
    //         if (toCurrency === "USD") {
    //             setConvertedAmount(amount);
    //         }
    //         if (toCurrency === "INR") {
    //             setConvertedAmount(amount * 88);
    //         }
    //         if (toCurrency === "EURO") {
    //             setConvertedAmount(amount / 1.16);
    //         }
    //     }
    //     if (fromCurrency === "EURO") {
    //         if (toCurrency === "EURO") {
    //             setConvertedAmount(amount);
    //         }
    //         if (toCurrency === "INR") {
    //             setConvertedAmount(amount * 102.67);
    //         }
    //         if (toCurrency === "USD") {
    //             setConvertedAmount(amount * 1.16);
    //         }
    //     }
    // }

     function handleConvert() {
        console.log(amount, fromCurrency, toCurrency);
        setConvertedAmount(amount * rates[toCurrency]);

    }

    return (
        <div className="outerBody">
            <div className="currencyConverterBox">
            <div><label>Amount</label></div>
            <input type="text" value={amount} onChange={handleAmount} />
            <div><label>From</label></div>
            <select value={fromCurrency} onChange={handleFromCurrency} >
                {Currencies.map((currency) => {
                    return(<option>{currency}</option>)
                })}
            </select>
            <div><label>To</label></div>
            <select value={toCurrency} onChange={handleToCurrency}>
                {Currencies.map((currency) => {
                    return(<option>{currency}</option>)
                })}
            </select>
            <div><button onClick={handleConvert}>Convert</button></div>
            <div className="fromCurrency">{amount}{fromCurrency}</div>
            <div className="toCurrency">{convertedAmount}{toCurrency}</div>
            </div>
        </div>
    )
}