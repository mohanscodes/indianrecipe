import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import axios from 'axios';
import { FallingLines } from 'react-loader-spinner';
import './FullPost.css';
import {Link} from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

const FullPost = () => {
  const { postids,Localpostid } = useContext(GlobalContext);
  const [preload, SetPreLoad] = useState(true);
  const [fullpostDetailes, SetFullPostDetails] = useState([]);
 const Myapikeys = process.env.REACT_APP_API_URL;

  const GetpostFullDetailes = async () => {

    try {
      const checkFulldata = localStorage.getItem(postids);
      const checkFulldataID = localStorage.getItem(Localpostid);

      if (checkFulldata || checkFulldataID) {
        SetPreLoad(true);

        const localdata = JSON.parse(checkFulldata || checkFulldataID);
        // console.log("Local Data", localdata);
        SetFullPostDetails(localdata);
        SetPreLoad(false);
      }
      else {
        if (postids) {
          SetPreLoad(true);
          const FullPostResponce = await axios.get(`https://api.spoonacular.com/recipes/${postids}/information?apiKey=${Myapikeys}`);
          localStorage.setItem(FullPostResponce.data.id, JSON.stringify(FullPostResponce.data));
          SetFullPostDetails(FullPostResponce.data);
          SetPreLoad(false);
        } else {
          console.log("data get failed");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    GetpostFullDetailes();
    onTop()
  }, [])


  
    return (


    <div className='FullRecipes_details'>

      <FallingLines
        color="#4fa94d"
        width="100"
        visible={preload}
        ariaLabel='falling-lines-loading'
      />

    { !preload &&
        <>
          <h2 className='FoodName'>{fullpostDetailes.title}</h2>
              {fullpostDetailes.vegetarian ? (<h2 className='vegetarian'>Vegetarian</h2>
                ):(<h2 className='vegetarian'>Non vegetarian</h2>)}
              <img src={fullpostDetailes.image} alt='img' />
              <h2> DishTypes </h2>

              <div className='dishTypes'>
              {
                fullpostDetailes.diets ? (
                  fullpostDetailes.dishTypes.map((dishTypes) => (
                    <span>{dishTypes} - </span>
                  ))
                ) : (<span> NO Data get </span>)
              }
              </div>

              <h2> Diets </h2>
              <div className='diets'>
              {
                fullpostDetailes.diets ? (
                    fullpostDetailes.diets.map((diets ) => (
                    <span> {diets} </span>))
                  ) : (<span> NO Data get </span>)
              }
              </div>
              <h1> Summary </h1>
              <div className='summary' dangerouslySetInnerHTML={{ __html: fullpostDetailes.summary }} />

              <h1> instructions </h1>
              <div className='summary' dangerouslySetInnerHTML={{ __html: fullpostDetailes.instructions}} />


            <Link className='backtoHome' to="/"> BACK TO HOME </Link>
        </> 
      }

<ScrollToTop smooth color="#8bc34a"/>

    </div>
  )
}

export default FullPost
