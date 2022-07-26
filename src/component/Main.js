import React, { useState } from 'react'
import "./Main.css";
import axios from 'axios';
import Card from './Card';
import { AiOutlineSearch } from 'react-icons/ai';
import myImg from "../assets/bg2.png"
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyBRU-Scw7y_x3Qh6ur9J9b_AhAEcWULSzs' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <div className='header'>
                <div className='row1'>
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <div className='row2'>
                    <h2>Find your Book</h2>
                    <div className='search'>
                        <input type="text" placeholder='Enter your book Name'
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook} />
                        <button><AiOutlineSearch /></button>
                    </div>
                    <img src={myImg} alt='mmmmmmm' />
                </div>
            </div>
            <div className='container'>
                {
                    <Card book={bookData} />
                }


            </div>
        </>
    )
}

export default Main