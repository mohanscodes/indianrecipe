import React from 'react';
import './homecardright.css';

// card
import Foodcard from "../foodcard/foodcard";

// veg img
import Veg from '../../assets/veg.png'
import Nonveg from '../../assets/nonveg.png'
import Snack from '../../assets/snack.png'
import Dessert from '../../assets/dessert.png'
import Drinks from '../../assets/drinks.png'
import Soups from '../../assets/soups.png'


const homecardright = () => {
  return (
    <div className='homecard-right'>
        <Foodcard className="item1" CardPhoto={Veg} Name="Veg" />
        <Foodcard className="item1" CardPhoto={Nonveg}  Name="Nonveg"/>
        <Foodcard className="item2" CardPhoto={Snack} Name="Snack"/>
        <Foodcard className="item2" CardPhoto={Dessert} Name="Dessert"/>
        <Foodcard className="item3" CardPhoto={Drinks} Name="Drinks"/>
        <Foodcard className="item3" CardPhoto={Soups} Name="Soups"/>
    </div>
  )
}

export default homecardright
