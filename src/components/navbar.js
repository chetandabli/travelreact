import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <div style={{display: "flex", width: "100%", justifyContent: "space-evenly", height: "60px", backgroundColor: "gray", alignItems: "center"}}>
                <div id="left">
                <Link to="/post">Post Data</Link>
                </div>
                <div id="right">
                <Link to="/get">Retrieve Data</Link>
                </div>
            </div>
        </>
    )
}