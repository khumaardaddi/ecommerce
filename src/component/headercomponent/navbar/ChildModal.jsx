import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '4px solid pink',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const ChildModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpenu = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
      <Button type="button" class="btn bg-gradient-primary w-80 mb-0" style={{marginTop:'45px',marginLeft:'40px',marginRight:'30px'}} onClick={handleOpenu}>ADD NEW ADDRESS</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400,borderRadius: 5 }}>
        <h5 class="text-center ccard">ADD NEW ADDRESS</h5>
        <form role="form" id="contact-form" method="post" autocomplete="off">
              <div class="card-body pb-2">
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-group input-group-static mb-4">
                      <label>Full Name</label>
                      <input class="form-control" placeholder="eg. John Mitch" aria-label="Full Name" type="text" />
                    </div>
                  </div>
                  <div class="col-md-6 ps-md-2">
                    <div class="input-group input-group-static">
                      <label>Mobile No</label>
                      <input type="number" class="form-control" placeholder="9999999999" />
                    </div>
                  </div>
                </div>
                <div class="row">
                
                <div class="mb-4">
                <div class="input-group input-group-static">
                  <label>Email Address</label>
                  <input type="email" class="form-control" placeholder="hello@creative-tim.com"/>
                </div>
              </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-group input-group-static mb-4">
                      <label>Address 1</label>
                      <input class="form-control" placeholder="street name" aria-label="Full Name" type="text" />
                    </div>
                  </div>
                  <div class="col-md-6 ps-md-2">
                    <div class="input-group input-group-static">
                      <label>Address 2</label>
                      <input type="text" class="form-control" placeholder="street name" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-group input-group-static mb-4">
                      <label>City</label>
                      <input class="form-control" placeholder="your city" aria-label="Full Name" type="text" />
                    </div>
                  </div>
                  <div class="col-md-6 ps-md-2">
                    <div class="input-group input-group-static">
                      <label>State</label>
                      <input type="email" class="form-control" placeholder="your state" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-group input-group-static mb-4">
                      <label>Zip</label>
                      <input class="form-control" placeholder="Zip code" aria-label="Full Name" type="text" />
                    </div>
                  </div>
                  <div class="col-md-6 ps-md-2">
                    <div class="input-group input-group-static">
                      <label>GST</label>
                      <input type="email" class="form-control" placeholder="GST" />
                    </div>
                  </div>
                </div>
               
                <div class="row">
                  <div class="col-md-12 text-center">
                    <button type="submit" onClick={handleClose} class="btn bg-gradient-primary mt-3 mb-0">SAVE</button>
                  </div>
                </div>
              </div>
            </form>
          <Button onClick={handleClose} style={{color:'black'}}>Close </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default ChildModal

