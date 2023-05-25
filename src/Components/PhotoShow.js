import React from 'react'

export default function PhotoShow({photos}) {
  return (
    <>
    <div className="container" key={photos.id}>
                <img className="img"  src={photos.photo} style={{width: `${photos.width}` +'px'}}/>

            </div>
    </>
  )
}
