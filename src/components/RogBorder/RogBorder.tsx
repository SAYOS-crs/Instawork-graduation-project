import React from 'react'

import "./ROG_BorderStyle.css"
export default function RogBorder({children} : {children : React.ReactNode}) {
  const Roges = ['roge-border-1' , 'roge-border-2' , 'roge-border-3' , 'roge-border-4' ]
  return <>
  
     <section className="section mx-3 my-2">
    <div className="all-rog">
      {Roges.map( (ROG)=>
      
        <i className={`${ROG} roge-bord`}></i>
      )}
    </div>

      {children}

   </section>
  </>
}
