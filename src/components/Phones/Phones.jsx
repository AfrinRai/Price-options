import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {
    const [phone, setPhone] = useState([])

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhone(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesData = data.data.data;
            const fakeData = phonesData.map(phone => {
                const obj  = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(fakeData)
            setPhone(fakeData);
        })

    }, [])

    return (
        <div>
            <h3 className="text-3xl font-bold mb-10">Total phones: {phone.length}</h3>
            <BarChart width={1200} height={400} data={phone}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </BarChart>
        </div>
    );
};

export default Phones;