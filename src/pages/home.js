import './home.css';
import HOCModal from '../components/HOCModal';
import Slider from '../components/slider/slider';
import approved from "../components/images/approved.png"


const Home = (props) => {
    // useEffect(() => {
    //     const [allCookies, setAllCookies] = useState([]);
    //     setAllCookies(props.cookies)
    // }, []);

    return (

        <div className="homePage">

            <div className='homeHeader'>

                <div className='sliderHeader'>
                    <Slider />
                </div>

                <div className='textHeader'>
                    <img className='approvedLogo' src={approved} alt=""></img>
                    <p className='textHeader1'> The Best Cookie Recipes To Bake Year-Round!</p>
                    <br /><br />
                    <p className='textHeader2'> There's a cookie here for everyone.</p>
                    <a href=".recipes">
                        <button className='btnHeader' onClick={"/recipes"}>Recipes</button>
                    </a>
                </div>


            </div>

            <div className='ourFavourites'>
                <h1 className='ourFavHeader'>Our Favourites</h1>
                <div className='ourFavSlice'>
                    {props.allCookies?.slice(0, 3).map((data, index) => {
                        return (
                            <HOCModal data={data} index={index} key={index} />
                        )
                    })}
                </div>
            </div>

            {/* 
            <div className="carouselMain">
                {props.cookies?.slice(0, 3).map((cookie, index) => {
                    return <div key={index}>
                        <CookieModal cookie={cookie} index={index} />
                    </div>
                })}
            </div>  */}
        </div>
    )
}

export default Home;