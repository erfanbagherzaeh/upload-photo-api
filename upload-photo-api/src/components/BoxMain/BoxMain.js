import React from 'react';
import './BoxMain.css'
import BoxRight from '../Boxright/BoxRight'
import BoxLeft from '../BoxLeft/BoxLeft'

export default function Variants() {

  return (
    <div className='root'>
       <BoxRight/>
       <BoxLeft/>
    </div>
  );
}
