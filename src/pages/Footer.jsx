import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-light p-4'>
      <div className="container">
        <div className="row">
            <div className="col-md-8">
                <h3 className='text-start'> NewsLetter Subscription</h3>
                <p className='text-start widthsmall '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus necessitatibus odit sint voluptas tenetur dignissimos ratione.  </p>
                <div className="col-md-4 shift-right ">
                <div className="input-group">
                   <input type="text" className='form-control' placeholder='Enter Your Email'/>
                <span className="input-group-text">
               <img src='img/send.svg' alt='' className='icon-svg' />
               </span>
                </div>

                </div>
            </div>
        </div>
      </div>
    </div>
    <p className='text-center mt-3'>Copyright all rights reserved by Partho Programmer 2024 </p>
    </>
  )
}

export default Footer
