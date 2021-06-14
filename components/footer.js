import moment from 'moment'
import { useState,useEffect } from "react";

export default function Footer(){
   const [date,setDate] = useState(null);
   useEffect(() => {
      const interval = setInterval(() => {
         setDate(moment().format('MMMM Do YYYY, h:mm:ss a'));
      }, 1000);
      return () => clearInterval(interval);
    }, []);
 return (
    <div className='object-bottom'>
     <div className='bg-blue-800 flex flex-row justify-between text-white'>
        <div>
         <a target='_blank' href='https://github.com/samirharry/' >samirharry.inc</a>
        </div>
        <div>
           {date}
        </div>
     </div>
    </div>
 );
};