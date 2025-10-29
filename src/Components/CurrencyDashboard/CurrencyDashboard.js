import { useState } from "react"

export default function CurrencyDashboard() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState("INR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [convertedAmount, setConvertedAmount] = useState();   

    function handleAmount(event) {
        setAmount(event.target.value)
    }
    function handleFromCurrency(event) {
        setFromCurrency(event.target.value)
    }
    function handleToCurrency(event) {
        setToCurrency(event.target.value)
    }

    function handleConvert() {
        if (fromCurrency === "INR") {
            if (toCurrency === "INR") {
                setConvertedAmount(amount);
            }
            if (toCurrency === "USD") {
                setConvertedAmount(amount / 88);
            }
            if (toCurrency === "EURO") {
                setConvertedAmount(amount / 102.67);
            }
        }
        if (fromCurrency === "USD") {
            if (toCurrency === "USD") {
                setConvertedAmount(amount);
            }
            if (toCurrency === "INR") {
                setConvertedAmount(amount * 88);
            }
            if (toCurrency === "EURO") {
                setConvertedAmount(amount / 1.16);
            }
        }
        if (fromCurrency === "EURO") {
            if (toCurrency === "EURO") {
                setConvertedAmount(amount);
            }
            if (toCurrency === "INR") {
                setConvertedAmount(amount * 102.67);
            }
            if (toCurrency === "USD") {
                setConvertedAmount(amount * 1.16);
            }
        }
    }

    return (
        <div>
            <div><label>Amount</label></div>
            <input type="text" value={amount} onChange={handleAmount} />
            <div><label>From</label></div>
            <select value={fromCurrency} onChange={handleFromCurrency}>
                <option>INR</option>
                <option>USD</option>
                <option>EURO</option>
            </select>
            <div><label>To</label></div>
            <select value={toCurrency} onChange={handleToCurrency}>
                <option>INR</option>
                <option>USD</option>
                <option>EURO</option>
            </select>
            <div><button onClick={handleConvert}>Convert</button></div>
            <div>{amount}</div>
            <div>{convertedAmount}</div>
        </div>
    )
}