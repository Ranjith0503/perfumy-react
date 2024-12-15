import one from "../image/one.jpg";
import two from "../image/two.jpg";
import three from "../image/three.jpg";
function Products(){
    return(
      <div className="products">
      <div class="box">
          <img src={two} alt="one"></img>
                  <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
      </div>
          <div class="box">
          <img src={one} alt="villain"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
      </div>
      <div class="box">
          <img src={three} alt="Designs Club"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>
      </div>
    )
  }

  export default Products;