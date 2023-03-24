import React from 'react'

const Signin = () => {
  return (
    <div>


      <section class="py-6 " style={{ backgroundColor: 'pink' }}>
        <div class="container"   >
          <div class="row justify-content-start" >
            <div class="col-md-5">
              <div class="card z-index-0 fadeIn3 fadeInBottom">


                <div class="card-body">

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


                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                  <form role="form" class="text-start">
                    <p>User ID</p>
                    <div class="input-group input-group-outline my-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" />
                    </div>
                    <p>password</p>
                    <div class="input-group input-group-outline mb-3">

                      <label class="form-label">Password</label>
                      <input type="password" class="form-control" />
                    </div>
                    <div class="form-check form-switch d-flex align-items-center mb-3">
                      <input class="form-check-input" type="checkbox" id="rememberMe" />
                      <label class="form-check-label mb-0 ms-3" for="rememberMe">Remember me</label>
                    </div>
                    <div class="text-center">
                      <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                    </div>
                    <p class="mt-4 text-sm text-center">
                      Don't have an account?
                      <a href="/signup" class="text-primary text-gradient font-weight-bold">Sign up</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="col-md-2 ps-2">

              </div>
              <div class="col-md-2 ps-4">
                <img src="../../assets/img/signin.png" alt="hhdfhdf" height={580} style={{ marginTop: '-82px' }} />
              </div>
              <div class="col-md-2 ps-6">

              </div>


            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Signin
