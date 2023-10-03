import { useState, useEffect } from 'react';
import './style.css';

const Status = () => {
    const [connected, setConnected] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://192.168.0.80:5001/health")
          .then((res) => res.json())
          .then((data) => setData(data.message));
      }, []);

    // const checkConnection = async () => {
    //     try {
    //         const response = await fetch('http://nathanjohnthedom.com:5001/health', {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "mode": "cors",
    //             }
    //         })
    //         const data = await response.json()
    //         // setConnected(true)
    //         return data;
    //     } catch (error) {
    //         console.error(error);
    //         // setConnected(false)
    //     }
    // }
    // setInterval(checkConnection(), 10000;
    return(
        <div className="status">   
            {!data 
            ?
            <>
                <div className="notConnected"></div>
                <div className="backendHint">Not connected to back-end</div>
            </>
             :
            <>
                <div className="connected"></div>
                <div className="backendHint">{data}</div>
            </>
              }
        </div>
    )
}

export default Status;