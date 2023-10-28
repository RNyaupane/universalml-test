import { BsCloudy, BsSun, BsMoon } from 'react-icons/bs';
import { FaSync } from 'react-icons/fa';
import React, { useState } from 'react';
import Header from '../../Header'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom';
import Footer from '../../Footer';



const MThemes = () => {
  const [selectedButton, setSelectedButton] = useState('Light Theme');
  const [isDesktopToggled, setIsDesktopToggled] = useState(false);
  const toggleDesktopSwitch = () => {
    setIsDesktopToggled(!isDesktopToggled);
  };
  const [systemThemeDivStyle, setSystemThemeDivStyle] = useState({
    background: 'conic-gradient(black 180deg, transparent 180deg 360deg)',
    border: '1px solid black',
    borderRadius: '10px', // Rounded border radius
  });

  const handleToggle = (buttonName) => {
    setSelectedButton(buttonName);

    if (buttonName === 'System Theme') {
      // Change the background color, border, and border radius of the div
      setSystemThemeDivStyle({
        background: 'conic-gradient(white 180deg, transparent 180deg 360deg)',
        border: '1px solid white',
        borderRadius: '10px', // Rounded border radius
      });
    } else {
      // Reset the background color, border, and border radius of the div for other themes
      setSystemThemeDivStyle({
        background: 'conic-gradient(black 180deg, transparent 180deg 360deg)',
        border: '1px solid black',
        borderRadius: '10px', // Rounded border radius
      });
    }
  };

  const buttonStyle = {
    backgroundColor: 'var(--card-light)',
    color: 'var(--text-color)', // Default text color
    borderRadius: '24px', // Rounded border radius
  };

  const themeColor = 'var(--theme-color)';

  // Function to get the button styles based on the selected theme
  const getButtonStyles = (theme) => {
    return {
      backgroundColor: selectedButton === theme ? themeColor : buttonStyle.backgroundColor,
      color: selectedButton === theme ? 'white' : buttonStyle.color,
      borderRadius: '24px', // Rounded border radius
    };
  };
  return (
    <>
      <Header title="My App" />
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:col-span-2 w-full">
        <div className="big-container rounded-3xl pt-6 md:pt-9 px-3 md:px-5 ">
          <div className='flex items-center text-blue-500 px-4 md:px-7'>
            <Link to='/my-app'>
              <IoIosArrowBack className='text-3xl md:text-3xl me-3' />
            </Link>
            <BsCloudy className='text-2xl md:text-3xl' style={{ strokeWidth: 0.3 }} />
            <h1 className='text-3xl md:text-4xl font-semibold m-2'>Themes</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-15" style={{ marginTop: "20px" }}>
            {/* First Row */}
            <button className="md:col-span-1 h-16 theme " style={{ ...buttonStyle, ...getButtonStyles('Light Theme') }} onClick={() => handleToggle('Light Theme')}>
              <p className='text-lg md:text-xl font-semibold ml-2 text-xs sm:text-sm md:text-base md:text-lg lg:text-xl mt-[-2px]' style={{ marginLeft: "-10px" }}>Light Theme</p>
              <BsSun size={16} className='text-xl md:text-2xl lg:text-3xl' style={{ strokeWidth: 0.3, marginTop: "-20px", marginLeft: "30px" }} />
            </button>
            <button className="md:col-span-1 h-16 theme" style={{ ...buttonStyle, ...getButtonStyles('Dark Theme') }} onClick={() => handleToggle('Dark Theme')}>
              <p className='text-lg md:text-xl font-semibold ml-2 text-xs sm:text-sm md:text-base md:text-lg lg:text-xl' style={{ marginTop: "-2px", marginLeft: "-10px" }}>Dark Theme</p>
              <BsMoon size={16} className='text-xl md:text-2xl lg:text-3xl' style={{ marginLeft: '30px', marginTop: "-20px" }} />
            </button>
            <button className="md:col-span-1 h-16 theme" style={{ ...buttonStyle, ...getButtonStyles('System Theme') }} onClick={() => handleToggle('System Theme')}>
              <p className='text-lg md:text-xl font-semibold ml-2 text-xs sm:text-sm md:text-base md:text-lg lg:text-xl' style={{ marginTop: "-2px", marginLeft: "-10px" }}>System Theme</p>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  marginTop: '-20px',
                  marginLeft: "30px",
                  ...systemThemeDivStyle, // Apply dynamic styles here
                }}
              ></div>
            </button>


            {/* Second Row */}
            <div className="md:col-span-1 h-16" style={{ ...buttonStyle, height: '250px', borderRadius: '24px', marginTop: "20px" }}>
              <FaSync size={22} color={themeColor} style={{ marginLeft: "20px", marginTop: "20px" }} />
              <h4 className='font-bold text-xl mb-2' style={{ marginTop: "10px", marginLeft: "20px" }}>Sync Theme</h4>
              <div className='text-gray-700 text-sm' style={{ padding: "0 20px 0 20px", fontSize: "14px" }}>
                Allow all devices to use the theme linked with the same account
                <div className='flex justify-between my-3'>
                  <div className=""></div>
                  <div className="px-6 py-4">


                    <div className='flex justify-between my-3'>
                      <div className=""></div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={isDesktopToggled} onChange={toggleDesktopSwitch} className="sr-only peer shadow-none" />
                        <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 ${isDesktopToggled ? 'peer-checked:right-0' : ''}`}>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 h-16" style={{ ...buttonStyle, height: '250px', borderRadius: '24px', marginTop: "20px" }}>
              <h4 className='font-bold text-xl mb-2' style={{ marginTop: "44px", marginLeft: "20px" }}>Appearance</h4>
              <div style={{ marginTop: "30px", marginLeft: "20px", display: "flex" }}>
                <div color="red" style={{ width: "45px", height: "45px", borderRadius: "50%", backgroundColor: "#E2322C" }}></div>
                <div color="red" style={{ width: "45px", height: "45px", marginLeft: "25px", borderRadius: "50%", border: "1px solid #E2322C", backgroundColor: "#FF8A3C" }}></div>
                <div color="red" style={{ width: "45px", height: "45px", marginLeft: "25px", borderRadius: "50%", border: "1px solid #E67A35", backgroundColor: "#EFCA14" }}></div>
                <div color="red" style={{ width: "45px", height: "45px", marginLeft: "25px", borderRadius: "50%", border: "1px solid #E0BC13", backgroundColor: "#74A12E" }}></div>
                <div color="red" style={{ width: "45px", height: "45px", marginLeft: "25px", borderRadius: "50%", border: "1px solid #74A12E", backgroundColor: "#1B8AF1" }}></div>
                <div color="red" style={{ width: "45px", height: "45px", marginLeft: "25px", borderRadius: "50%", border: "1px solid #177AD3", backgroundColor: "#9170FF" }}></div>
                <div
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)',
                    marginLeft: "25px"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MThemes