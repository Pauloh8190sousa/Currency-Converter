import axios from "axios";
import React, { useEffect, useState } from "react";

import "./styles.css";

export default function Conversor(props) {

    const [moedaA, setMoedaA] = useState("");
    const [moedaB, setMoedaB] = useState(0);
    const [currency, setCurrency] = useState([]);
    const [select1, setSelect1] = useState("");
    const [select2, setSelect2] = useState("");
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");



    useEffect(() => {
        async function data(){
            const response = await axios.get(process.env.REACT_APP_CURRENCY_API_URL);
            console.log(response);
        }
        
        data();

    }, []);


    function teste() {
        console.log(select1);
        console.log(select2);
        console.log(input1);
        console.log(input2);    
    }

    return (
        <React.Fragment>
            <div className="Conversor">
                <h2>Converter moeda {props.moedaA} para {props.moedaB}</h2>
                <div>
                    <input
                        type="text"
                        placeholder="digite o valor"
                        value={input1}
                        onChange={(e) => { setInput2(e.target.value) }}
                    />
                    <select onChange={(e) => { setSelect1(e.target.value) }}>
                        {currency.map(item => {

                            <option value={item}>{item}</option>

                        })}
                    </select>
                </div>
                <span>=</span>
                <div>
                    <input
                        type="text"
                        placeholder="digite o valor"
                        value={input2}
                        onChange={(e) => { setInput1(e.target.value) }}
                    />
                    <select onChange={(e) => { setSelect2(e.target.value) }}>
                        {currency.map(item => {

                            <option value={item}>{item}</option>

                        })}
                    </select>
                </div>
            </div>
            <button type="button" onClick={teste}></button>
        </React.Fragment>
    );
}