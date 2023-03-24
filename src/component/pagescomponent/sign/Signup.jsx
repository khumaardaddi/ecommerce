import React from 'react'



const Signup = () => {
  return (
    <div>


      <section class="py-1" style={{ backgroundColor: 'pink' }}>
        <div class="container"   >
          <div class="row justify-content-start" >
            <div class="col-md-6">
              <div class="card z-index-0 fadeIn3 fadeInBottom">


                <div class="card-body">

                  <div class="col-xl-12 col-lg-8 col-md-6 d-flex flex-column mx-auto">
                    <div class="  mt-sm-2 mt-2">
                      <div class="row">
                        <div class="col-md-2">

                        </div>

                        <div class="col-md-5">
                          <div class="form-check form-check-info text-left">
                            <h3>Welcome</h3>
                          </div>
                        </div>

                        <div class="col-md-3 "  >

                          <img src="../../assets/img/salarlogo.png" alt="" width={110} height={25} style={{ marginLeft: '-40px', marginTop: '12px' }} />

                        </div>
                        <div class="col-md-2 ps-2">

                        </div>
                      </div>
                      <div class="card-body pb-1">
                        <form role="form" id="contact-form" method="post" autocomplete="off">
                          <div class="card-body" >
                            <div class="row">

                              <div class="col-md-6">
                                <div class="form-check form-check-info text-left">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                  <label class="form-check-label" for="flexCheckDefault">
                                    User(individual)
                                  </label>
                                </div>
                              </div>
                              <div class="col-md-6 ps-2">
                                <div class="form-check form-check-info text-left">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheck" />
                                  <label class="form-check-label" for="flexCheck">
                                    User(Organisation)
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <label> Name (As per Government id)</label>
                              <div class="input-group input-group-outline my-2">
                                <input type="text" class="form-control" placeholder='name' />
                              </div>
                            </div>
                            <div class="row">

                              <div class="col-md-6">
                                <label>DOB</label>
                                <div class="input-group input-group-outline my-2">
                                  <input type="date" class="form-control" placeholder='Password' />
                                </div>
                              </div>
                              <div class="col-md-6 ps-2">
                                <label>Sponser ID</label>
                                <div class="input-group input-group-outline my-2">
                                  <input type="text" class="form-control" placeholder='sponser id' />
                                </div>
                              </div>
                            </div>
                            <div class="row">

                              <div class="col-md-6">
                                <label>Gender</label>
                                <div class="input-group ">
                                  <select name="gender" class="form-select " aria-label="Default select example"><option value="female">Female</option><option value="male">Male</option></select>
                                </div>
                              </div>
                              <div class="col-md-6 ps">
                                <label>Country</label>
                                <div class="input-group">
                                  <select name="gender" class="form-select " aria-label="Default select example">
                                    <option value="india">india</option>
                                    <option value="usa">usa</option>
                                    <option value="india">uae</option>
                                    <option value="usa">china</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="row">

                              <div class="col-md-6">
                                <label>User ID</label>
                                <div class="input-group input-group-outline my-2">
                                  <label class="form-label">Email</label>
                                  <input type="email" class="form-control" />
                                </div>
                              </div>
                              <div class="col-md-6 ps-2">
                                <label class="form-label">Mobile No</label>
                                <div class="input-group input-group-outline my-2">
                                  <input type="email" class="form-control" placeholder='Moblie no' />
                                </div>
                              </div>
                            </div>
                            <div class="row">

                              <div class="col-md-6">
                                <label>password</label>
                                <div class="input-group input-group-outline my-2">
                                  <input type="password" class="form-control" placeholder='password' />
                                </div>
                              </div>
                              <div class="col-md-6 ps-2">
                                <label>Confirm password</label>
                                <div class="input-group input-group-outline my-2">
                                  <input type="password" class="form-control" placeholder='Password' />
                                </div>
                              </div>
                            </div>


                            <div class="row">
                              <div class="col-md-12">
                                <div class="form-check form-check-info text-left">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                  <label class="form-check-label" for="flexCheckDefault">
                                    I agree the <a href="../../pages/privacy.html" class="text-dark font-weight-bolder">Terms and Conditions</a>
                                  </label>
                                </div>
                              </div>
                              <div class="col-md-12">
                                <button type="submit" class="btn bg-gradient-dark w-100">Sign up</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="card-footer text-center pt-0 px-sm-4 px-1 col-md-12">
                      <p class="mb-4 mx-auto ">
                        Already have an account?
                        <a href="/signin" class="text-primary text-gradient font-weight-bold">Sign in</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                    <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: "url('.../../../assets/img/curved-images/curved11.jpg')" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">

              <div class="col-md-2 ps-4">
                <img src="../../assets/img/signup.png" alt="hhdfhdf" width={680} height={580} style={{ marginTop: '32px' }} />
              </div>



            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
