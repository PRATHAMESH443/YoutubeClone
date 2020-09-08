import React from 'react'
import './VedioItem.css'

const VedioItem=({vedio,onVedioSelect})=>{
    return (
      <div onClick={() => onVedioSelect(vedio)} className="vedio-item item">
        <img
          className="ui image"
          src={vedio.snippet.thumbnails.medium.url}
          alt={vedio.snippet.title}
        />
        <div className="content">
          <div className="header">{vedio.snippet.title}</div>
        </div>
      </div>
    );
}

export default VedioItem;