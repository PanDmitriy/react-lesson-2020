import React from 'react'


function Loader() { 
    return (
        // <div style={{display: 'flex', justifyContent: 'center', margin: '.5rem'}}> <div className="lds-facebook"></div> </div>
        <div style={{display: 'flex', justifyContent: 'center', margin: '.5rem'}}><div class="lds-facebook"><div></div><div></div><div></div></div></div>
    ) 
}

export default Loader