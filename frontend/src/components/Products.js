import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Products = ({cat, filters, sort}) =>{
    
    const [data , setData] = 
  
    componentDidMount() {
      this.fetchData();
    }
  
    fetchData = () => {
      axios
        .get("/api/bapz/")
        .then((res) => this.setState({ products: res.data }))
        .catch((err) => console.log(err));
    };
    
    return(
      var prdcts = this.state.products
      if (prdcts[0]) {
        console.log(prdcts)
        return(
          <div className="App">
            Bapzzzssss {prdcts[0].price}
          </div>
        )
      }
      else { return <div>null</div>}
    ) 
      
    
  }


  export default Products ;