import { useRef } from "react";
import axios from 'axios';
import './FlightForm.css';

export const FlightForm = () => {
    //Receive values from form
    const flightNumRef = useRef();
    const departDateRef= useRef();
    const arriveDateRef= useRef();
    const departTimeRef= useRef();
    const arriveTimeRef= useRef();
    const departAirportRef= useRef();
    const arriveAirportRef= useRef();
    const numPassRef= useRef();
    const passLimitRef= useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            //Makes a post request to create the form based off the values
            await axios.post('http://localhost:8080/flights', 
                            { flightNum: flightNumRef.current.value, departDate: departDateRef.current.value,
                            arriveDate: arriveDateRef.current.value, departTime: departTimeRef.current.value,
                            arriveTime: arriveTimeRef.current.value, departAirport: departAirportRef.current.value,
                            arriveAirport: arriveAirportRef.current.value, numPass: numPassRef.current.value,
                            passLimit: passLimitRef.current.value});
            window.location.reload();
        } catch (error) {
            console.log('Something Went Wrong');
        }
    }

    //Form that allows the user to enter flight data
    return (
        <>
            <form className="MyForm2" onSubmit={handleSubmit} >
                <header>New Flight</header>
                <br />
                <label htmlFor="flightNum">Flight Number:</label>
                <div>
                    <input id="flightNum" type="text" placeholder="Flight Number (6 Characters)" ref={flightNumRef} />
                </div>

                <label htmlFor="departDate">Departure Date:</label>
                <div>
                    <input id="departDate" type="text" placeholder="Departure Date (yyyy-mm-dd)" ref={departDateRef} />
                </div>

                <label htmlFor="arriveDate">Arrival Date:</label>
                <div>
                    <input id="arriveDate" type="text" placeholder="Arrival Date (yyyy-mm-dd)" ref={arriveDateRef} />
                </div>

                <label htmlFor="departTime">Departure Time:</label>
                <div>
                    <input id="departTime" type="text" placeholder="Departure Time (hh:mm)" ref={departTimeRef} />
                </div>

                <label htmlFor="arriveTime">Arrival Time:</label>
                <div>
                    <input id="arriveTime" type="text" placeholder="Arrival Time (hh:mm)" ref={arriveTimeRef} />
                </div>

                <label htmlFor="departAirport">Departure Airport:</label>
                <div>
                    <input id="departAirport" type="text" placeholder="Departure Airport (XXX)" ref={departAirportRef} />
                </div>

                <label htmlFor="arriveAirport">Arrival Airport:</label>
                <div>
                    <input id="arriveAirport" type="text" placeholder="Arrival Airport (XXX)" ref={arriveAirportRef} />
                </div>

                <label htmlFor="numPass">Number of Passengers:</label>
                <div>
                    <input id="numPass" type="number" placeholder="Number of Passengers" ref={numPassRef} />
                </div>

                <label htmlFor="passLimit">Passenger Limit:</label>
                <div>
                    <input id="passLimit" type="number" placeholder="Passenger Limit" ref={passLimitRef} />
                </div>

                <input type="submit" value="Add Flight" />
            </form>
        </>
    );
}