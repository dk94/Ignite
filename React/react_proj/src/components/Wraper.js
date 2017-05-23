import React from 'react';
const Wraper=({children})=>(
    <div className="row justify-content-center">
        <div className="col-12 col-lg-8 ">
            <div className="row text-center">
                <div className="col-12">
                    {children}
                </div>
            </div>
        </div>
    </div>
    )

    export default Wraper;