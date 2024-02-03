




const Card = ({logo, company, neww, featured, position, postedAt,location, contract, role, level, languages, items, setItems, handleLanguageClick}) => {
  
  
    
   


  return (
    <div className='px-40 '>
      <div className="card bg-white my-5 flex justify-between shadow-lg rounded-md h-[160px] overflow-hidden ">
        <div className="left-side flex w-2/3 items-center justify-start">
      {featured && neww &&  <div className="border w-1.5 h-full rounded-lg"></div>}
        <div className='mx-10'>
        <img width={80} height={80} src ={logo} alt= "comp"></img>
        </div>
        <div className='details flex flex-col gap-2'>
      <div className='1st-row flex items-center gap-5'>
        <div className='font-bold text text-lg '>{company}</div>
       {neww &&  <div className='new-bg px-2 py-1 rounded-full text-white text-sm'>NEW!</div>}
       {featured &&  <div className='bg-black px-2 py-1 rounded-full text-white text-sm'>FEATURED</div>}

        </div>
      <div className='2nd-row flex items-center'>
       <div className='font-bold text-lg cursor-pointer'>{position}</div>
        </div>
      <div className='3rd-row flex items-center gap-5 text-gray-700'>
       <div>{postedAt}</div>
       <ul className='flex items-center gap-10 list-disc ml-5'>
        <li>{contract}</li>
        <li>{location}</li>
  
       </ul>
        </div>
        </div>
        </div>
           <div className="right-side flex space-x-3 w-1/3 items-center mr-10 ml-40">
            <div className='flex'>
              <div className='text mr-5 gray-bg p-2 font-bold cursor-pointer'>{role}</div>
              <div className='text gray-bg p-2 font-bold cursor-pointer'>{level}</div>
            </div>
           
            <div>

            </div>
         {languages.map((lang, id) => (
          <div onClick={() => handleLanguageClick(lang)} key={id} className='text gray-bg p-2 font-bold'>
             {lang}
          </div>
         ))}
           </div>
      </div>
    </div>
  );
}

export default Card;
