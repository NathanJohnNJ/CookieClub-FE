import { useState, useEffect } from 'react';
import './style.css';

const Status = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://192.168.0.80:5001/health")
          .then((res) => res.json())
          .then((data) => setData(data.message));
      }, []);

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