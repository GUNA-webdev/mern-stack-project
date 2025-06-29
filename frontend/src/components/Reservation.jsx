import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:5000/api/v1/reservation/send",
                { name, email, phone, date, time, guests },
                {
                    headers: {
                        "Content-Type": "application/json"  
                    },
                    withCredentials: true
                }
            );
            toast.success(data.message);
            setName("");
            setEmail("");
            setPhone("");
            setDate("");
            setTime("");
            setGuests("");
            navigate("/success");
        } catch (error) {
            toast.error(error.response?.data?.message || "Reservation failed");
        }
    };

    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="reservation" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box"> 
                        <h1>MAKE A RESERVATION</h1>
                        <p>For further details, please call</p>
                        <form onSubmit={handleReservation}>  

                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Please enter your name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Please enter your email" 
                                    className="email_tag"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input 
                                    type="tel"  
                                    placeholder="Please enter your number" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input 
                                    type="date" 
                                    placeholder="Please inform your date" 
                                    value={date} 
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                                <input 
                                    type="time" 
                                    placeholder="Please inform your time" 
                                    value={time} 
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input 
                                    type="number" 
                                    placeholder="Number of guests" 
                                    value={guests} 
                                    onChange={(e) => setGuests(e.target.value)}
                                    min="1"
                                    required
                                />
                            </div>

                            <button type="submit">
                                RESERVE NOW 
                                <span>
                                    <HiOutlineArrowNarrowRight />
                                </span>
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;