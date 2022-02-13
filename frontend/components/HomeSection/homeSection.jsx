import React from 'react';
import HomeSectionStyle from "./HomeSection.style";
import Link from 'next/link';

const head = {
    fontSize: '5rem',
    fontWeight: 'bold',
    marginBottom: '30px'
};
const box = {
    fontSize: '1.5em',
    borderRadius: '50px',
    padding: '1em',
    width: '500px',
    height: '50px'
};
const btn = {
    fontWeight: 'bold',
    position: 'absolute',
    alignItems: 'center',
    right: '0px',
    marginRight: '5px',
    marginTop: '4.5px',
    marginBottom: '3px',
    height: '40px',
    width: '100px',
    borderRadius: '50px'

};
const searchBox = {
    position: 'relative',

};
function HomeSection(props) {

    const setMinfy = async () => {
        var API_URL = 'http://localhost:5000';
        const res = await fetch(`${API_URL}/minify/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'

            },
            body: JSON.stringify({
                originalUrl: props.longUrl
            }),
        });

        if (res===null) {
            console.log("error"); 
            return;
        }

        const data = await res.json();
        props.setShortUrl(data.minifiedUrl);
        navigator.clipboard.writeText(props.shortUrl);
    }



    return (
        <HomeSectionStyle>
            <div className="content">
                <h1 style={head} className="title">
                    URL MINIFY
                </h1>

                <div style={searchBox}>
                    <input style={box} placeholder="Enter the url to be minified......" value={props.longUrl} onChange={(e) => { props.setLongUrl(e.target.value) }} />
                    <button style={btn} id="minify" onClick={setMinfy}>MINIFY</button>
                </div>
                <div>
                    <h3>Need more advanced features? | <Link href="/signup">Create an account</Link></h3>
                </div>
            </div>
        </HomeSectionStyle>
    );
}


export default HomeSection;
