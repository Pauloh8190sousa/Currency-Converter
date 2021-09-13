import axios from "axios";
import React, { useEffect, useState } from "react";

import "./styles.css";

export default function Conversor() {

    const [currency, setCurrency] = useState([]);
    const [rates, setRates] = useState({});
    const [select1, setSelect1] = useState("AED");
    const [select2, setSelect2] = useState("AED");
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");



    useEffect(() => {
        async function data() {
            const response = await axios.get(process.env.REACT_APP_CURRENCY_API_URL);
            setRates(response.data.rates);
            setCurrency(Object.keys(response.data.rates));
        }

        data();

    }, []);


    function converterMoeda() {
        if(input1 === ""){
            alert("Campo Vazio");
        }else {
            setInput2(input1 * rates[select2] / rates[select1]);
        }

    }

    function limparValor() {
        setInput1("");
        setInput2("");
    }

    return (
        <React.Fragment>
            <div className="Conversor">
                <h2>Conversor de moedas</h2>
                <div>
                    <input
                        type="number"
                        placeholder="digite o valor"
                        value={input1}
                        onChange={(e) => { setInput1(e.target.value) }}
                    />
                    
                    <select onChange={(e) => { setSelect1(e.target.value) }}>
                        {currency.map(item => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>

                </div>
                <span>=</span>
                <div>
                    <input
                        type="number"
                        placeholder="Valor"
                        disabled
                        value={input2}
                    />
                    
                    <select onChange={(e) => { setSelect2(e.target.value) }}>
                        {currency.map(item => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <button type="button" onClick={converterMoeda}>Converter</button>
                <button className="btn-limpar" type="button" onClick={limparValor}>Limpar Campos</button>
            </div>
        </React.Fragment>
    );
}