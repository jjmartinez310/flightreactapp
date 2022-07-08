import axios from "axios";
import { useEffect, useState } from "react";

//Defines a tile that holds flight information and contains edit and delete functionality
export const FlightTiles = () => {
    //Loads all tiles to be displayed on the screen
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/flights')
        .then(res => setFlights(res.data));
    }, []);

    //Delete function of the tile
    const deleteFlight = async(e) =>{
        e.preventDefault();
        let _id = e.target.id;
        console.log(_id);
        try{
            await axios.delete(`http://localhost:8080/flights/delete/${_id}`);
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div class="row">
                {/*Maps each tile to a unique element*/}
                {flights.map((flight, index) =>{
                    return(
                        <div class="col-sm-3">
                            <div class="card border-dark mb-3" key={flight._id}>
                                <h5 class="card-header">{flight.flightNum}</h5>
                                {/*Stylizes each line to left adjust and right adjust the type of data and the data, respectively*/}
                                <div class="card-body">
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item list-group-item-secondary">Departure Date:</li>
                                        <li class="list-group-item flex-fill text-end">{flight.departDate}</li>
                                    </ul>
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item list-group-item-secondary">Arrival Date:</li>
                                        <li class="list-group-item flex-fill text-end">{flight.arriveDate}</li>
                                    </ul>
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item list-group-item-secondary">Departure Time:</li>
                                        <li class="list-group-item flex-fill text-end">{flight.departTime}</li>
                                    </ul>
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item list-group-item-secondary">Arrival Time:</li>
                                        <li class="list-group-item flex-fill text-end">{flight.arriveTime}</li>
                                    </ul>
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item list-group-item-secondary">Departing From:</li>
                                        <li class="list-group-item flex-fill text-end">{flight.departAirport}</li>
                                    </ul>
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item list-group-item-secondary">Arriving At:</li>
                                        <li class="list-group-item flex-fill text-end">{flight.arriveAirport}</li>
                                    </ul>
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item list-group-item-secondary"># of Passengers:</li>
                                        <li class="list-group-item flex-fill text-end">{flight.numPass}</li>
                                    </ul>
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item list-group-item-secondary">Flight Capacity:</li>
                                        <li class="list-group-item flex-fill text-end">{flight.passLimit}</li>
                                    </ul>

                                    {/*onClick buttons that implement the edit and delete functionality*/}
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button class="btn btn-outline-danger" type="button" id={flight._id} onClick={deleteFlight}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
