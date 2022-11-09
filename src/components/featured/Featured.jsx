import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://is1-3.housingcdn.com/4f2250e8/2218a90fe1768b190052b1e63064a411/v5/_m/rajapushpa_the_atria_kokapet-hyderabad-rajapushpa_properties.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kokapet</h1>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://i.ytimg.com/vi/x6_TW9_0MJ4/maxresdefault.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Gandipet</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://qph.fs.quoracdn.net/main-qimg-79cf21474d81f60e03ab30cdfffac83a-c"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Narsingi</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
