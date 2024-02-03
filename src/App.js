import './App.css';
import HeaderImg from "./images/bg-header-desktop.svg"

import data from "./data.json"
import { useEffect, useState } from 'react';

function App() {


  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(data);


  useEffect(() => {
    const filtered = data.filter((job) => selectedLanguages.every((language) => job.level.includes(language) || job.languages.includes(language) || job.role.includes(language)));
    setFilteredJobs(filtered);
  }, [selectedLanguages]);




  const handleLanguageClick = (event) => {
    const clickedLanguage = event.currentTarget.innerText;
    



    
    setSelectedLanguages((prevLanguages) => {
      if (prevLanguages.includes(clickedLanguage)) {
            // Remove the language from the selected languages
            return prevLanguages;
          } else {
            // Add the language to the selected languages
            return [...prevLanguages, clickedLanguage];
          }
      
    });



    // Filter jobs based on selected languages
    // const filteredLang = data.filter((job) => selectedLanguages.every((language) => job.languages.includes(language)));
    const filtered = data.filter((job) => selectedLanguages.every((language) => job.level.includes(language) || job.languages.includes(language) || job.role.includes(language)));
  
    setFilteredJobs(filtered);
  };


  const handleRemoveClick = (clickedLanguage) =>
   setSelectedLanguages((prevLanguages) =>  prevLanguages.filter((language) =>
   language !== clickedLanguage )) 






  return (
    <main className="flex min-h-screen flex-col justify-between relative">
      <header className='w-100 h-100 relative'>
        <div className=' header-bg h-full opacity-50 absolute w-full z-2'></div>
        <div className='header-img-overlay z-10 right-0  '> <img src={HeaderImg} alt='HaederImage' className='w-full'></img></div>
      </header>
      <main>
      <div className='my-40 px-20 max-md:px-5'>
        
         {/* Render the clicked languages */}
         <div className='px-40 md:px-5 max-md:p-5'>

      <div className=" absolute bg-white left-40  right-40 top-20 max-lg:top-5
     max-md:flex-wrap max-md:left-5 
      max-md:h-auto max-md:py-5 flex gap-5 items-center pl-5 max-md:w-[90%] shadow-lg rounded-md h-[160px] overflow-hidden  ">

        {selectedLanguages.length === 0 ? <h3 className='items-center justify-center font-bold text-lg text-gray-500 w-full align-center text-center'>Select an item</h3> : selectedLanguages.map((language, index) => (
          <div key={index}  className='flex gap-1 text-lg font-bold max-md:text-sm'>
            <span className='cursor-pointer'>{language}</span>
          <span onClick={() => handleRemoveClick(language)} className='cursor-pointer bg-black text-white px-1 rounded-md'>X</span>
        </div>
        ))}
      </div>
        </div>
        {filteredJobs.map((item, index) => (
            <div key={index} className='max-md:px-5 md:px-5 max-md:my-10'>
            <div className="card bg-white w-full my-5 max-md:py-0 flex max-lg:flex-col py-5 justify-between shadow-lg rounded-md h-auto">
              <div className="left-side max-md:relative max-md:mt-20 
               flex w-1/2 max-lg:w-full max-lg:py-2  max-md:px-4 
               items-center justify-start">
            {item.featured && item.neww &&  <div className="border w-1.5 h-full rounded-lg"></div>}
              <div className='mx-10 max-md:absolute max-md:-mt-60 max-md:mx-5'>
              <img width={80} height={80} src ={item.logo} alt= "comp"></img>
              </div>
              <div className='details flex flex-col gap-2'>
            <div className='1st-row flex items-center gap-5 max-md:gap-2'>
              <div className='font-bold text text-lg '>{item.company}</div>
             {item.neww &&  <div className='new-bg px-2 py-1 rounded-full text-white text-sm'>NEW!</div>}
             {item.featured &&  <div className='bg-black px-2 py-1 rounded-full text-white text-sm'>FEATURED</div>}
      
              </div>
            <div className='2nd-row flex items-center'>
             <div className='font-bold text-lg cursor-pointer'>{item.position}</div>
              </div>
            <div className='3rd-row flex items-center gap-5 max-md:text-xs text-gray-700'>
             <div>{item.postedAt}</div>
             <ul className='flex items-center gap-10 list-disc ml-5 '>
              <li>{item.contract}</li>
              <li>{item.location}</li>
        
             </ul>
              </div>
              </div>
              </div>
              <hr className={`hidden max-md:block`} />
                 <div className="right-side flex space-x-3 w-1/2 max-lg:w-full max-lg:py-5 flex-wrap items-center  ml-10 max-md:ml-0">
                  <div className='flex'>
                    <div className='text mr-5 gray-bg p-2 font-bold cursor-pointer' onClick={handleLanguageClick}>{item.role}</div>
                    <div className='text gray-bg p-2 font-bold cursor-pointer' onClick={handleLanguageClick}>{item.level}</div>
                  </div>
                 
                  <div>
      
                  </div>
               {item.languages.map((lang, index) => (
                <div onClick={handleLanguageClick} key={index} className='text gray-bg p-2 font-bold cursor-pointer'>
                   {lang}
                </div>
               ))}
                 </div>
            </div>
          </div>
       
          
        ))}

        

</div>
      </main>
    </main>
  );
}

export default App;
