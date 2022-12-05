import React from 'react'

export const Loading = ({color= 'green'}) => {
  return (
    <div style={{display:"contents"}}>
        <div className="progress">
            <div className={`indeterminate ${color} accent-4 `}></div>
        </div>
    </div>  
  )
}
