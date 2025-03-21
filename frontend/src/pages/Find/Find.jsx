import React from 'react';
import './Find.css';
import Maps from '../../components/Maps/Maps';
import Navigation from '../../components/Navigation/Navigation';
import Event from '../../components/Event/Event';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHippo} from '@fortawesome/free-solid-svg-icons';


const Find = () => {
  return (
    <div className='maps_comp'>
        <Maps/>
        <Navigation/>
        <Event/>

        <FontAwesomeIcon icon={faHippo} bounce />
        <i class="fa-solid fa-user"></i>
    </div>
  )
}

export default Find