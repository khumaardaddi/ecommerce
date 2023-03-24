import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer class="footer py-lg-7 py-4 pb-lg-2 pb-2 " style={{backgroundColor: 'black'  }}>
  <div class="container footer-dark">
    <div class="row">
      <div class="col-lg-3 mb-5 mb-lg-0">
        <h6 class="text-uppercase mb-2" style={{color: 'white' }}>Salar</h6>
        <p class="mb-4 pb-2" style={{color: 'white' }}>
           Connect us on social Media
        </p>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3"  >
          <span class="text-lg fab fa-facebook" style={{color: 'white' }}></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-twitter" style={{color: 'white' }}></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-instagram" style={{color: 'white' }}></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-pinterest" style={{color: 'white' }}></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-github" style={{color: 'white' }}></span>
        </a>
      </div>
      <div class="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4">
        <h6 class="text-sm"  style={{color: 'white' }}>About us</h6>
        <ul class="flex-column ms-n3 nav">
        <li class="nav-item">
            <a class="nav-link text-secondary" href="/corporateinformation">
            Corporate Information
            </a>
          </li>
         

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/ourLeaderShip" >
              Our Leadership
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/career" >
              Career
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/career" >
              Work with us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="/ourLeaderShip">
              Press Release
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/corporateinformation">
              Latest Updated
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/career">
              Corporate Responsibility & sustainibilty
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/ourLeaderShip">
              Ethics
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="/corporateinformation">
              Political engagement
            </a>
          </li>

         

         
        </ul>
      </div>

      <div class="col-md-2 col-6 mb-md-0 mb-4">
        <h6 class="text-sm"  style={{color: 'white' }}>Grow Money With Us</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary" href="/career">
              Sell on Salar
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/corporateinformation">
              Promote Your product
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/ourLeaderShip">
              Seller Registration
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/career">
              Sell Globally
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="/corporateinformation">
              Fees Pricing
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/corporateinformation">
              Account Management
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/ourLeaderShip">
              FAQS
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-2 col-6 mb-md-0 mb-4">
        <h6 class="text-sm"  style={{color: 'white' }}>Salar Benefits</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary"  href="/corporateinformation">
              Rewards & Points
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/ourLeaderShip">
              Testimonials
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="/career">
              Blog
            </a>
          </li>

         
        </ul>
      </div>

      <div class="col-md-2 col-6 mb-md-0 mb-4">
        <h6 class="text-sm" style={{color: 'white' }} >Help & Support</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary"  href="/corporateinformation">
              Contact us
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="/ourLeaderShip">
              Gravice Redressal
            </a>
          </li>

         
        </ul>
      </div>
    </div>
    <hr class="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1"/>
    <div class="row">
      <div class="col-8 mx-lg-auto text-lg-center">
        <p class="text-sm text-secondary">
          All right Reserved Copyright © <script>document.write(new Date().getFullYear())</script> <span style={{color: 'white' }} >SALAR</span>  
        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
