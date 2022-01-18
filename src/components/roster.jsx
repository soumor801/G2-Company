import { useState, useEffect } from "react"
import axios from "axios";
import VotingFeature from "./votingFeature";
import './roster.css'
const Roster = () => {
  const [rosterData, setRosterData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get('https://coding-assignment.g2crowd.com/')
      setRosterData(resp.data);
    }
    fetchData();
  }, [])
  console.log(rosterData)
  return (
    <>
      {rosterData.map((el, id) =>
    <div className="r">
        
        <div key={id} className="r-wrapper">
         
        <div className="r-left">
            <img className="r-img" src={el.image_url}/>
      </div>
        <div className="r-right">
          <h1 className="r-fullname">{el.name}</h1>
            <h2 className="r-title">{el.title}</h2>
            <p className="r-bio">{el.bio}</p>
          <VotingFeature {...{el,id}} />
          </div>
          
        </div> 
        
        <hr></hr>
        
      </div>
        )}
      </>
  )
}

export default Roster
