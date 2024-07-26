import { Link, Head } from '@inertiajs/react';

export default function Nordic() {
    return (
        <>
        <Head title="Nordic Shop" />
        <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
          {/* Nav */}
          <nav id="header" className="w-full z-30 top-0 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
              <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <title>menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </label>
              <input className="hidden" type="checkbox" id="menu-toggle" />
  
              <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                  <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                    <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Shop</a></li>
                    <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">About</a></li>
                  </ul>
                </nav>
              </div>
  
              <div className="order-1 md:order-2">
                <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl" href="#">
                  <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                  </svg>
                  NORDICS
                </a>
              </div>
  
              <div className="order-2 md:order-3 flex items-center" id="nav-content">
                <a className="inline-block no-underline hover:text-black" href="#">
                  <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <circle fill="none" cx="12" cy="7" r="3" />
                    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                  </svg>
                </a>
  
                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                  <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                    <circle cx="10.5" cy="18.5" r="1.5" />
                    <circle cx="17.5" cy="18.5" r="1.5" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
  
          {/* Carousel */}
          <div className="carousel relative container mx-auto" style={{ maxWidth: '1600px' }}>
            <div className="carousel-inner relative overflow-hidden w-full">
              {/* Slide 1 */}
              <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked />
              <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
                <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')" }}>
                  <div className="container mx-auto">
                    <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                      <p className="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</p>
                      <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
              <div className="carousel-item absolute opacity-0 bg-cover bg-right" style={{ height: '50vh' }}>
                <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80')" }}>
                  <div className="container mx-auto">
                    <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                      <p className="text-black text-2xl my-4">Real Bamboo Wall Clock</p>
                      <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
              <div className="carousel-item absolute opacity-0 bg-cover bg-right" style={{ height: '50vh' }}>
                <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599806704138-ef80c4387838?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')" }}>
                  <div className="container mx-auto">
                    <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                      <p className="text-black text-2xl my-4">Wooden Plate by Yusuke Mizuuchi</p>
                      <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Controls */}
              <label htmlFor="carousel-3" className="prev control-1 hidden md:block absolute top-0 bottom-0 left-0 w-1/12 h-full cursor-pointer">
                <svg className="fill-current text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M14.828,17.828l-5-5a1,1,0,0,1,0-1.414l5-5A1,1,0,1,1,14.828,7.828L10.828,12l4,4a1,1,0,0,1-1.414,1.414z"></path>
                </svg>
              </label>
              <label htmlFor="carousel-2" className="next control-1 hidden md:block absolute top-0 bottom-0 right-0 w-1/12 h-full cursor-pointer">
                <svg className="fill-current text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M9.172,17.828l5-5a1,1,0,0,0,0-1.414l-5-5A1,1,0,0,0,8.758,7.828L12.758,12l-4,4A1,1,0,0,0,9.172,17.828z"></path>
                </svg>
              </label>
              <label htmlFor="carousel-1" className="prev control-2 absolute top-0 bottom-0 left-0 w-1/12 h-full cursor-pointer md:hidden">
                <svg className="fill-current text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M14.828,17.828l-5-5a1,1,0,0,1,0-1.414l5-5A1,1,0,1,1,14.828,7.828L10.828,12l4,4a1,1,0,0,1-1.414,1.414z"></path>
                </svg>
              </label>
              <label htmlFor="carousel-2" className="next control-2 absolute top-0 bottom-0 right-0 w-1/12 h-full cursor-pointer md:hidden">
                <svg className="fill-current text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M9.172,17.828l5-5a1,1,0,0,0,0-1.414l-5-5A1,1,0,0,0,8.758,7.828L12.758,12l-4,4A1,1,0,0,0,9.172,17.828z"></path>
                </svg>
              </label>
            </div>
          </div>
  
          {/* Footer */}
          <footer className="bg-white text-gray-600 body-font">
            <div className="container mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
              <div className="lg:w-1/3 md:w-1/2 w-full md:pr-10">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT</h2>
                <p className="leading-relaxed text-base">Craft beer & coffee corn bread pug raclette. Street art kombucha bushwick activated charcoal, air plant biodiesel hammock knausgaard. Authentic readymade vinyl knausgaard.</p>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
                <div className="flex flex-wrap">
                  <a className="text-gray-600 inline-flex items-center text-md font-medium mb-2 md:mb-0" href="mailto:contact@mysite.com">
                    <svg className="fill-current text-gray-500 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12,12.15L1.5,5V19h21V5L12,12.15z M12,6l7.5,4.5L12,15,4.5,10.5L12,6z"></path>
                    </svg>
                    contact@mysite.com
                  </a>
                  <a className="text-gray-600 inline-flex items-center text-md font-medium mb-2 md:mb-0" href="tel:+123456789">
                    <svg className="fill-current text-gray-500 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M21,15.33a3.675,3.675,0,0,1-3.69-3.69c0-.064.003-.126.008-.189a1.596,1.596,0,0,0-1.155-1.557A11.874,11.874,0,0,0,12,7.62,1.594,1.594,0,0,0,10.583,8.91a1.619,1.619,0,0,0-1.617.559A4.773,4.773,0,0,1,6.3,8.4C5.827,7.93,4.818,8.161,4.2,8.986a12.637,12.637,0,0,0,2.828,3.7A1.62,1.62,0,0,0,8.619,13.7a1.609,1.609,0,0,0,.94-.221,2.516,2.516,0,0,1,1.338-.507A1.616,1.616,0,0,0,12,12.15a4.663,4.663,0,0,1,.14-.837,1.597,1.597,0,0,0-1.504-1.912A3.633,3.633,0,0,1,9.6,6.6c0-.23-.042-.459-.12-.688A3.694,3.694,0,0,1,12,4.5a3.689,3.689,0,0,1,2.58,6.31A3.679,3.679,0,0,1,21,15.33Z"></path>
                    </svg>
                    +123 456 789
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
}
