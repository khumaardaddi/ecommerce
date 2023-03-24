import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ChildModal from './ChildModal';
import './navbar.css';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '4px solid pink',
  boxShadow: 24,



};

const Navbar = ({ CartItem }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>


      <nav
        class="navbar navbar-expand-lg navbar-light bg-white z-index-3 py-1">
        <div class="container-fluid" ssssss  >
          <Link class="navbar-brand font-weight-bold d-none d-md-block  " to="/ " rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" >
            <img src="../../assets/img/salarlogo.png" alt="rergerg" width='120' height='25' />
          </Link>

          <Link class="navbar-brand font-weight-bold d-block d-md-none " to="/" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" >
            <img src="../../assets/img/salarlogo.png" alt="rergerg" width='120' height='25' />
          </Link>

          <Button onClick={handleOpen} width="300" style={{ color: 'black' }}>Dehliver.to...<FiMapPin style={{ width: '45px', height: '30px' }}>cc</FiMapPin></Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 450, borderRadius: 5, height: 250 }}>

              <h5 className='mcard' id="parent-modal-title" s >Choose your location</h5>




              <ChildModal />
              <Button onClick={handleClose} style={{ marginTop: '45px', color: 'black', marginLeft: '25px' }}>Close</Button>
            </Box>
          </Modal>



          <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </span>
          </button>


          <div class="collapse navbar-collapse w-100 pt-2 pb-1 py-lg-0" id="navigation">

            <div class="col-xxl-8 m-2">
              <div class="input-group input-group-outline ">
                <input type="text" class="form-control" placeholder=" what're you looking for" style={{ backgroundColor: '#dedede', border: '2px solid black' }} />
              </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover mx-auto">


            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            English
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="hindi">Hindi</a></li>
            <li><a class="dropdown-item" href="Tamil">Tamil</a></li>
            <li><a class="dropdown-item" href="English">English</a></li>
            <li><a class="dropdown-item" href="Telugu">Telugu</a></li>
          </ul>
        </li>
              <li class="nav-item mx-2">
                <Link class="navbar-brand font-weight-bold d-block " to="/signin " rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" >
                  Sign in
                </Link>
              </li>

              <li class="nav-item mx-2">
                <Link class="navbar-brand font-weight-bold d-block " to="/signup" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" >
                  Signup
                </Link>
              </li>

            </ul>

            <ul class="navbar-nav d-lg-block d-none">
              <li class="nav-item">
                <Link to="/cartlist">

                  <FaCartPlus className='mt-0' style={{ color: 'red', width: '30px' }} >


                  </FaCartPlus>
                  <sup className='' style={{ padding: '1px', marginTop: '30px', borderRadius: '60px', color: 'black', width: '13px', }} >{CartItem.length === 0 ? "0" : CartItem.length}</sup>


                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
