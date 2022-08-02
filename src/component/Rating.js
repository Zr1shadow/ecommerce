import '../App.css'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular, faStarHalfStroke as faStarHalfStrokeRegular } from '@fortawesome/free-regular-svg-icons'
 
const Ratings = styled.div`
    display: flex;
    align-items: center;
`

const Rating = ({rate, count}) => {

    const chooseStar = (givenRating) => {
        if (Math.round(rate) === givenRating && Math.round(rate) > rate ) {
            // console.log(`Rounded: ${Math.round(rate)} Rate: ${rate} Index: ${givenRating}`)
            return faStarHalfStrokeRegular
        }   if(rate > givenRating) {
            return faStarSolid
        }   else {
            
            return faStarRegular
        }
    }
  return (
    <Ratings>
       {[...Array(5)].map((item, index) => {
        // givenRating created because index would start at 0 
        const givenRating = index + 1;
        return (
            <FontAwesomeIcon key={index} className='star' icon={chooseStar(givenRating)} />
        );
      })}
      <p>{count} Reviews</p>  
    </Ratings>
  )
}

export default Rating


{/* <FontAwesomeIcon className='star' icon={faStarRegular} /> */}