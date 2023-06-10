import Navbar from "../components/navbar";
import { useState, useEffect } from "react";

export default function Getpage() {
  const [destination, setDestination] = useState("");
  const [sort, setSort] = useState("");
  const [data, setData] = useState([]);
  const [i, setI] = useState(0);

  useEffect(()=>{
    async function fetchData(){
        try {
            let tempdata =  await fetch("https://mock11-s5yz.onrender.com/api");
            tempdata = await tempdata.json();
            setData(tempdata)
        } catch (error) {
            console.log(error)
        }
    }

    fetchData()
  }, [i])
  useEffect(()=>{
    async function fetchData(){
        try {
            let tempdata =  await fetch("https://mock11-s5yz.onrender.com/api");
            tempdata = await tempdata.json();
            setData(tempdata)
        } catch (error) {
            console.log(error)
        }
    }
    async function fetchDataBoth(destination, sort){
        try {
            let tempdata =  await fetch(`https://mock11-s5yz.onrender.com/api?destination=${destination}&sort=${sort}`);
            tempdata = await tempdata.json();
            setData(tempdata)
        } catch (error) {
            console.log(error)
        }
    }
    async function fetchDataDes(){
        try {
            let tempdata =  await fetch(`https://mock11-s5yz.onrender.com/api?destination=${destination}`);
            tempdata = await tempdata.json();
            setData(tempdata)
        } catch (error) {
            console.log(error)
        }
    }
    async function fetchDataSort(){
        try {
            let tempdata =  await fetch(`https://mock11-s5yz.onrender.com/api?sort=${sort}`);
            tempdata = await tempdata.json();
            setData(tempdata)
        } catch (error) {
            console.log(error)
        }
    }

    if(destination && sort){
        fetchDataBoth(destination, sort)
    }else if(destination){
        fetchDataDes(destination)
    }else if(sort){
        console.log(sort)
        fetchDataSort(sort)
    }else{
        fetchData()
    }
  }, [destination, sort])

  async function deletePost(e){
    let id = e.target.id
    try {
        let res = await fetch(`https://mock11-s5yz.onrender.com/api/${id}`, {
            method: "DELETE"
        })
        res = await res.json();
        alert(res.msg);
        setI(i+1)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "30px",
          padding: "15px",
          borderRadius: "10px",
          backgroundColor: "gray",
        }}
      >
        <div>
          <select
            name="destination"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Select Destination</option>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
          </select>
          <select
            name="sort"
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="asc">Ascending Order</option>
            <option value="desc">Desc Order</option>
          </select>
        </div>
        <div style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(3, 3fr)",
          marginTop: "20px"
        }}>
            {data.map((el, i)=>{
        return (
            <>
<div key={`${el._id}`} style={{
                padding: "15px",
                borderRadius: "10px",
                backgroundColor: "white"
            }}>
                <h1>Name:- {el.name}</h1>
                <p>EMail:- {el.email}</p>
                <p>Designation:- {el.destination}</p>
                <p>No. of travellers:- {el.no_of_travellers}</p>
                <p>Budget Per Person:- {el.budget_per_person}</p>
                <button id={el._id} onClick={deletePost}>Delete</button>
            </div>
            </>
        )
    })}
        </div>
      </div>
    </>
  );
}
