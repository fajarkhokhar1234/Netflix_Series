import seriesData from "../api/seriesData.json"
import Card from "./Card"

 const NetflixSeries = () => {
    return <>
    <h1 id="h1">Best Netflix Series</h1>
    <ul>
        {seriesData.map((curElem) => (
        < Card key = {curElem.id} curElem={curElem} />
    )
    )}
    </ul>
    <h3 id="footer">Made With ❤ By Fajar</h3>
    </>
  }
  
  export default NetflixSeries

