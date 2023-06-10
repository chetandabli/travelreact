import Navbar from "../components/navbar"
import { useState } from "react";

export default function Postpage(){
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [destination, setDestination] = useState(''); 
    const [no_of_travellers, setNoOfTravellers] = useState(""); 
    const [budget_per_person, setBudgetPerPerson] = useState("");
    async function handalSubmit(e){
        e.preventDefault();

        if(name && email && destination && no_of_travellers && budget_per_person){
            let obj = {name, email, destination, "no_of_travellers": +no_of_travellers,"budget_per_person": +budget_per_person}
            try {
                let res = await fetch("https://mock11-s5yz.onrender.com/api", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(obj)
                });
                res = await res.json();
                alert(res.msg)
            } catch (error) {
                console.log(error)
            }
            setName("");
            setEmail("");
            setDestination("");
            setNoOfTravellers("");
            setBudgetPerPerson("")
        }else{
            alert("please fill all details")
            return
        }
    }
    return (
        <>
            <Navbar/>
            <div style={{width: "40%", margin: "auto", marginTop: "50px", padding: "30px", borderRadius: "10px", backgroundColor: "gray"}}>
                <form id="form" style={{display: "flex", flexDirection: "column"}} onSubmitCapture={handalSubmit}>
                    <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <select name="destination" id="destination" value={destination} onChange={e => setDestination(e.target.value)}>
                        <option value="">Select Destination</option>
                        <option value="India">India</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europe</option>
                        <option value="America">America</option>
                    </select>
                    <input type="number" name="no_of_travellers" id="no_of_travellers" placeholder="No. of travellers" value={no_of_travellers} onChange={e => setNoOfTravellers(e.target.value)}/>
                    <input type="number" name="budget_per_person" id="budget_per_person" placeholder="Budget Per Person" value={budget_per_person} onChange={e => setBudgetPerPerson(e.target.value)}/>
                    <input type="submit" name="submit" id="submit" style={{backgroundColor: "green", cursor: "pointer"}}/>
                </form>
            </div>
        </>
    )
}