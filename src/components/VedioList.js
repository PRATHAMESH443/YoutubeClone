import React from 'react'
import VedioItem from './VedioItem'

const VedioList=({vedios, onVedioSelect})=>{
   const renderList=vedios.map(vedio=>{
     return (
       <VedioItem
         key={vedio.id.videoId}
         vedio={vedio}
         onVedioSelect={onVedioSelect}
       />
     );
   })

    return(
    <div className='ui relaxed divided list'>{renderList}</div>
    )
}

export default VedioList;