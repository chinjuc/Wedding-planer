import React, { useState } from 'react'
import Collist from '../Components/Contents/Collist'
import Sidebar from '../Components/Contents/Sidebar'
import './grid.css'

const Grids = () => {

  return (
    <div className="dashboard">
      <div className="left-panel">
        <Collist />
      </div>
      {/* <div className="right-panel">
        <Sidebar selected={selected} />
      </div> */}
    </div>
  )
}

export default Grids
