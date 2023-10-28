import React from 'react';
import { BiSolidLeftArrow } from 'react-icons/bi';
import { Link, useLocation, useParams } from 'react-router-dom';

const AppFrame = () => {
    // Get the dynamic URL from the route parameters
    const location = useLocation();
    // Extract the query parameter "dynamicUrl" from the search property
    const queryParams = new URLSearchParams(location.search);
    const dynamicUrl = queryParams.get('dynamicUrl');

    return (
        <div className='container p-5 max-w-full'>
            <div className="d-flex justify-between m-10">
                <Link to='/ai-store' className='rounded-full btn-bg px-4 py-2 flex items-center w-max'>
                    <BiSolidLeftArrow className='mr-3' /> Go Back
                </Link>
            </div>

            {/* Use the dynamicUrl in the iframe src */}
            <iframe
                className=''
                src={dynamicUrl} // Use the dynamic URL here
                title="Iframe Example"
                style={{ height: '100vh', width: '100%' }}
            ></iframe>
        </div>
    );
};

export default AppFrame;
