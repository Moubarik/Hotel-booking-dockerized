import React from 'react'
import Navbar from '../../components/Nav_dash'
import ShowProfile from '../../components/profile/Show_profile'
import './Pages.css'

const Profiles = () => {
  return (
    <>
      <Navbar />
      <div className='Profiles'>

      <h1>Profiles</h1>
      </div>

      <div className='col-md-10 text-center m-auto'>

      <ShowProfile/>
      </div>

    </>
  )
}

export default Profiles