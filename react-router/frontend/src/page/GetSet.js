const { useState, useEffect } = window.React;
const { Ahri } = window;
import CONFIG from '../config';

function GetSet() {
    const [myValue, setMyValue] = useState(0);
    const [newValue, setNewValue] = useState(0);

    const getValue = async () => {
        const returns = await Ahri.callByUrl(`${CONFIG.host}/api/getValue`, 'GET', []);
        setMyValue(parseInt(returns[0]));
    }
    useEffect(() => {
        getValue();
    }, [])

    return <div>
        <h1>Get Set</h1>
        <h2>{myValue}</h2>
        <input type="number" value={newValue} onChange={(e) => setNewValue(parseInt(e.target.value))}></input><button onClick={async () => {
            await Ahri.callByUrl(`${CONFIG.host}/api/setValue`, 'POST', [newValue]);
            getValue();
        }}>Submit</button>
    </div>;

}

export default GetSet;