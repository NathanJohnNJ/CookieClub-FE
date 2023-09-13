import './allCookies.css';
import HOCModal from './HOCModal';

const Allcookies = (props) => {

    return (
        <div className="allCookies">

            <div className='row1'>
            {props.allCookies?.slice(0, 3).map((data, index) => {
                return (
                    <HOCModal data={data} index={index} key={index} />
                )
            })}
            </div>

            <div className='row2'>
            {props.allCookies?.slice(4,7).map((data, index) => {
                return (
                    <HOCModal data={data} index={index} key={index} />
                )
            })}
            </div>

            <div className='row3'>
            {props.allCookies?.slice(8,11).map((data, index) => {
                return (
                    <HOCModal data={data} index={index} key={index} />
                )
            })}
            </div>

            <div className='row3'>
            {props.allCookies?.slice(12,15).map((data, index) => {
                return (
                    <HOCModal data={data} index={index} key={index} />
                )
            })}
            </div>
        </div>
    );
}

export default Allcookies;