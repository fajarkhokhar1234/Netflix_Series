import styled from "styled-components"
const Card = (prop) => {
    const {id, img_url, name, rating, description, cast, genre, watch_url } = prop.curElem //De-structuring
    // const btn_style = {
    //     backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    //     color: "black"
    // } //inline styling
    const Button = styled.button({
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "black"
    }) // Styled Components
        return <>
        <li key={id}>
           <div id="cards">
           <div id="img"> 
            <img src={img_url} alt="" width='40%' height='40%'/>
           </div>
           <h2>Name: {name}</h2>
           <h2>Rating: <span className={`rating ${rating>= 8.5 ? "super" : "average"}`} >{rating}</span> </h2>
           <p>Summary: {description}</p>
           <p>Genre: {genre}</p>
           <p>Cast: {cast}</p>
           <a href={watch_url} target="_blank" >
            <Button rating = {rating}> Watch Now </Button> 
           </a>
            </div>     
            </li>
        </>
    }
    export default Card