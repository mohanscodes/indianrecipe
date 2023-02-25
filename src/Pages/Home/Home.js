import React, { useEffect, useState, useContext } from 'react';
import Axios from 'axios';
import './Home.css';
import ReactPaginate from "react-paginate";

import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalState';
import ScrollToTop from "react-scroll-to-top";
import { FallingLines } from 'react-loader-spinner';

const Home = () => {
  
  const [pageload, Setpageload] = useState(true);
  const [foodlist, setFoodlist] = useState([]);
  const { setPostids,pageName } = useContext(GlobalContext);
  const [currentPage, setcurrentPage] = useState(1);

  const Myapikeys = '9569d702f95243bd83c6e1bac1ea875c';
  // const Myapikeys = '10d18c1f9a2e426f822cc191e573fee5';
  // const Myapikeys = '55565963579a4edf8ff69aa4a34c93bb';
  // home
  // nonVegFoodlist
  // dessertslist
  // drinkslist
  // snacklist
  // souplist
  // veglist
  // saladlist
  

console.log(foodlist);

  const limit = 10;
  
  async function FetchFoodDataFromApi() {

    //1) home
  if(pageName == "home") {
  async function FetchFoodData() {
    const check = localStorage.getItem("Foodlist");
    if (check) {
        Setpageload(true)
        console.log(check);
            const pageno = currentPage;
            const localdata = localStorage.getItem("Foodlist");
            const LocalAllJsonData = JSON.parse(localdata);
            let displayData = LocalAllJsonData.slice(pageno*limit , (pageno + 1)*limit);
            setFoodlist(displayData)
            // console.log(displayData);
        Setpageload(false)
    }
    else {
      try {
        Setpageload(true)
          const responce = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=${Myapikeys}&number=100`);

          localStorage.setItem("Foodlist", JSON.stringify(responce.data.results))
          setFoodlist(responce.data.results);
        Setpageload(false)

      } catch (error) {
        console.log(error);
      }}}

      FetchFoodData();
 }
 
  //2) nonvegtarians
 if(pageName == "nonvegtarians"){
  async function FetchFoodData() {
    const check = localStorage.getItem("NonVegFoodlist");

    if (check) {
      Setpageload(true)
        const pageno = currentPage;
        const localdata = localStorage.getItem("NonVegFoodlist");
        const LocalAllJsonData = JSON.parse(localdata);
        let displayData = LocalAllJsonData.slice(pageno*limit , (pageno + 1)*limit);
        setFoodlist(displayData)
        // console.log(displayData);
      Setpageload(false)
    } else {
      try {
      Setpageload(true)
          const responce = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?diet=paleo&apiKey=${Myapikeys}&number=100`);
          localStorage.setItem("NonVegFoodlist", JSON.stringify(responce.data.results))
          setFoodlist(responce.data.results);
      Setpageload(false)

      } catch (error) {
        console.log(error);
      }}
    }
    FetchFoodData()
 }

   //3) dessertslist
 if(pageName == "dessertslist"){
  async function FetchFoodData() {
    const check = localStorage.getItem("dessertslist");
    if (check) {
      Setpageload(true)
        const pageno = currentPage;
        const localdata = localStorage.getItem("dessertslist");
        const LocalAllJsonData = JSON.parse(localdata);
        let displayData = LocalAllJsonData.slice(pageno*limit , (pageno + 1)*limit);
        setFoodlist(displayData)
        // console.log(displayData);
      Setpageload(false)

    } else {
      try {
        Setpageload(true)
          const responce = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=dessert&apiKey=${Myapikeys}&number=100`);
          localStorage.setItem("dessertslist", JSON.stringify(responce.data.results))
          setFoodlist(responce.data.results);
        Setpageload(false)
      } catch (error) {
        console.log(error);
      }}
    }
    FetchFoodData()
 }

 //4) drinks
 if(pageName == "drinkslist"){
  async function FetchFoodData() {
    const check = localStorage.getItem("drinkslist");
    if (check) {
      Setpageload(true)
        const pageno = currentPage;
        const localdata = localStorage.getItem("drinkslist");
        const LocalAllJsonData = JSON.parse(localdata);
        let displayData = LocalAllJsonData.slice(pageno*limit , (pageno + 1)*limit);
        setFoodlist(displayData)
        // console.log(displayData);
      Setpageload(false)

    } else {
      try {
        Setpageload(true)
          const responce = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=drink&apiKey=${Myapikeys}&number=100`);
          localStorage.setItem("drinkslist", JSON.stringify(responce.data.results))
          setFoodlist(responce.data.results);
        Setpageload(false)
      } catch (error) {
        console.log(error);
      }}
    }
    FetchFoodData()
 }

 //5) snack
 if(pageName == "snacklist"){
  async function FetchFoodData() {
    const check = localStorage.getItem("snacklist");
    if (check) {
      Setpageload(true)
        const pageno = currentPage;
        const localdata = localStorage.getItem("snacklist");
        const LocalAllJsonData = JSON.parse(localdata);
        let displayData = LocalAllJsonData.slice(pageno*limit , (pageno + 1)*limit);
        setFoodlist(displayData)
        // console.log(displayData);
      Setpageload(false)
    } else {
      try {
        Setpageload(true)
          const responce = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=snack&apiKey=${Myapikeys}&number=100`);
          localStorage.setItem("snacklist", JSON.stringify(responce.data.results))
          setFoodlist(responce.data.results);
        Setpageload(false)
      } catch (error) {
        console.log(error);
      }}} FetchFoodData()
 }

 //6) soup
 if(pageName == "souplist"){
  async function FetchFoodData() {
    const check = localStorage.getItem("souplist");
    if (check) {
      Setpageload(true)
        const pageno = currentPage;
        const localdata = localStorage.getItem("souplist");
        const LocalAllJsonData = JSON.parse(localdata);
        let displayData = LocalAllJsonData.slice(pageno*limit , (pageno + 1)*limit);
        setFoodlist(displayData)
        // console.log(displayData);
      Setpageload(false)
    } else {
      try {
        Setpageload(true)
          const responce = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=snack&apiKey=${Myapikeys}&number=100`);
          localStorage.setItem("souplist", JSON.stringify(responce.data.results))
          setFoodlist(responce.data.results);
        Setpageload(false)
      } catch (error) {
        console.log(error);
      }}}  FetchFoodData()
    }

 //6) veg
 if(pageName == "veglist"){
  async function FetchFoodData() {
    const check = localStorage.getItem("veglist");
    if (check) {
      Setpageload(true)
        const pageno = currentPage;
        const localdata = localStorage.getItem("veglist");
        const LocalAllJsonData = JSON.parse(localdata);
        let displayData = LocalAllJsonData.slice(pageno*limit , (pageno + 1)*limit);
        setFoodlist(displayData)
      Setpageload(false)
    } else {
      try {
        Setpageload(true)
          const responce = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=${Myapikeys}&number=100`);
          localStorage.setItem("veglist", JSON.stringify(responce.data.results))
          setFoodlist(responce.data.results);
        Setpageload(false)
      } catch (error) {
        console.log(error);
      }}}  FetchFoodData()
    }

     //6) soup
 if(pageName == "saladlist"){
  async function FetchFoodData() {
    const check = localStorage.getItem("saladlist");
    if (check) {
      Setpageload(true)
        const pageno = currentPage;
        const localdata = localStorage.getItem("saladlist");
        const LocalAllJsonData = JSON.parse(localdata);
        let displayData = LocalAllJsonData.slice(pageno*limit , (pageno + 1)*limit);
        setFoodlist(displayData)
        // console.log(displayData);
      Setpageload(false)
    } else {
      try {
        Setpageload(true)
          const responce = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=salad&apiKey=${Myapikeys}&number=100`);
          localStorage.setItem("saladlist", JSON.stringify(responce.data.results))
          setFoodlist(responce.data.results);
        Setpageload(false)
      } catch (error) {
        console.log(error);
      }}}  FetchFoodData()
    }

}

  const onTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    FetchFoodDataFromApi();
    onTop();
  }, [currentPage,pageName]);

  const HandlePostId = (e) => {
    const postIds = e.target.name;
    setPostids(postIds);
  }

  const handlePageClick = async (data) => {    
    let currentPage = data.selected;
    setcurrentPage((cur)=>cur=currentPage);
  };

  return (
    <div className='AppHome'>

      <FallingLines
        color="#4fa94d"
        width="100"
        visible={pageload}
        ariaLabel='falling-lines-loading'
      />
        <h3 className='food__cards_title'>RECENT YUMMY RECIPES — CELEBRATING 1,400 RECIPES (AND COUNTING!!)</h3>

    { !pageload &&
        <>

    <div className='App'>

      <div className='food__cards'>
        
        {
          !foodlist ? (<h1>no food</h1>) : (
            foodlist.map((data, index) => {
              return (
                <div className='foodcard__main' key={index}>

                  <div className='Recipi_img'>
                    <img src={data.image} alt={data.title} />
                  </div>
                   
                    <h5 className='Food_title'>{data.title.slice(1,30)}</h5>

                    <div>
                      <Link className='ViewmoreBtn' onClick={HandlePostId} name={data.id} to="/fullpost"> view more</Link>
                    </div>

                  </div>
              )
            }))
        }
        <ScrollToTop smooth color="#8bc34a"/>
      </div>
    
    </div>
    </> 
  }
    <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={0}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

    </div>
  )
}

export default Home;
