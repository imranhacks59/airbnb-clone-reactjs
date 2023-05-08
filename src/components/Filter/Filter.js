import React, { useState } from 'react'
import {links} from '../../assets/images-links'
import './Filter.css'
const Filter = () => {
  const [selectedFilter,setSelectedFilter] = useState()
  
  return (
    <div className='filter-data'>
        {
            links.map((link,i)=>(
                <div className={`link-box ${i==selectedFilter && "selected-box"}`}
                onClick={()=>setSelectedFilter(i)}
                
                >
                   <img key={i} className='links-img' src={link.imgSrc}  />
                   <p className='links-label'>{link.label}</p>
                 </div>   
            ))
        }
    </div>
  )
}

export default Filter