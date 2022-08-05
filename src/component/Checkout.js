import '../App.css'
import { useContext } from "react"
import {useNavigate} from 'react-router-dom'
import { CartContext } from "../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCcVisa, faCcAmex, faCcMastercard, faCcDiscover } from '@fortawesome/free-brands-svg-icons'

const Checkout = () => {
    const { cart, setCart } = useContext(CartContext)
    const navigate = useNavigate()

    const orderSubmit = () => {
        navigate('/Home', alert("Order Submitted"))
        setCart([])
    }
  return (
    <div>
        <div className="row">
            <div className="col-75">
                <div className="container">
                    <form>
                        <div className="grid"> 
                            <div className="col-50">
                            <h3>Billing Address</h3>
                                <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                                <label for="email"><i className="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email" placeholder="john@example.com"/>
                                <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                                <label for="city"><i className="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city" placeholder="New York"/>

                                <div className="grid">
                                <div className="col-50">
                                    <label for="state">State</label>
                                    <input type="text" id="state" name="state" placeholder="NY"/>
                                </div>
                                <div className="col-50">
                                    <label for="zip">Zip</label>
                                    <input type="text" id="zip" name="zip" placeholder="10001"/>
                                </div>
                                </div>
                            </div>

                            <div className="col-50">
                                <h3>Payment</h3>
                                <label for="fname">Accepted Cards</label>
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faCcVisa} className='visa' />
                                    <FontAwesomeIcon icon={faCcAmex} className='amex' />
                                    <FontAwesomeIcon icon={faCcMastercard} className='masterCard' />
                                    <FontAwesomeIcon icon={faCcDiscover} className='discover' />
                                </div>
                                <label for="cname">Name on Card</label>
                                <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                                <label for="ccnum">Credit card number</label>
                                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                                <label for="expmonth">Exp Month</label>
                                <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                                <div className="grid">
                                <div className="col-50">
                                    <label for="expyear">Exp Year</label>
                                    <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                                </div>
                                <div className="col-50">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="352"/>
                                </div>
                                </div>
                            </div>
                        </div>
                        <label>
                        <input type="checkbox" name="sameadr"/> Shipping address same as billing
                        </label>
                        <input type="submit" value="Continue to checkout" className="btn" onClick={orderSubmit}></input>
                    </form>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Checkout