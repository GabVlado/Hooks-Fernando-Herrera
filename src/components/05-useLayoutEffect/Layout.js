import React, { useState ,useLayoutEffect ,useRef} from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './layout.css'

const Layout = () => {


    const { counter, increment } = useCounter(1);
    const {  data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    ///console.log(state);
    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect() );

    }, [quote])

    return (
        <div>
            <h1> Layout Effects </h1>
            <hr />


            <blockquote className="blockquote text-right">
                <p 
                    ref={pTag}
                    className="mb-2"
                >
                        
                    {quote} </p>   
            </blockquote>
            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <button
                className="btn  btn-primary"
                onClick={increment

                }
            >
                Siguiente Frase
            </button>


        </div>
    )
}

export default Layout;
