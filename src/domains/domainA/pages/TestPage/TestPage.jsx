import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'components/Button';
import Img from 'assets/ok.png';
import './style.scss';

const TestPage = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(({ data: respData }) => {
            console.log(respData);
            setData(respData);
        });
    }, []);


    return (
        <main className="TestPage">
            <h1>TestPage</h1>
            <p>
                TestPage TestPage TestPage TestPage TestPage TestPage
                TestPage TestPage TestPage TestPage TestPage TestPage
                TestPage TestPage TestPage TestPage TestPage TestPage
                TestPage TestPage TestPage TestPage TestPage TestPage
            </p>
            <Button onClick={() => setShow(!show)}>
                {show ? 'hide' : 'show'}
            </Button>
            {show && (
                <div>
                    <img src={Img} alt="img" />
                </div>
            )}
            {data.map((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                </div>
            ))}
        </main>
    );
};

export default TestPage;
