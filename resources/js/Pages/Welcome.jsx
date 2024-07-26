import { Link, Head } from '@inertiajs/react';
import '../../css/nodic.css'
import shoes from '../../images/shoe.jpg'
import img1 from '../../images/img.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const handleImageError = () => {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
  };

  return (
    <>
      <Head title="Welcome" />
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
              <Link className="inline-block no-underline hover:text-black" href={route('login')}>
                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <circle fill="none" cx="12" cy="7" r="3" />
                  <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                </svg>
              </Link>

              <Link className="pl-3 inline-block no-underline hover:text-black" href={route('login')}>
                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                  <circle cx="10.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>

        {/* Carousel */}
        <div className="carousel relative container mx-auto" style={{ maxWidth: '1600px' }}>
          <div className="carousel-inner relative overflow-hidden w-full">
            {/* Slide 1 */}
            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked style={{ display: 'none' }} />
            <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
              <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: `url(${img1})` }}>
                <div className="container mx-auto">
                  <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</p>
                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

            {/* Slide 2 */}
            <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden style={{ display: 'none' }} />
            <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
              <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: `url(${img2})` }}>
                <div className="container mx-auto">
                  <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">Real Bamboo Wall Clock</p>
                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

            {/* Slide 3 */}
            <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden style={{ display: 'none' }} />
            <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
              <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: `url(${img3})` }}>
                <div className="container mx-auto">
                  <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">Wooden Plate by Yusuke Mizuuchi</p>
                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label htmlFor="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
          </div>
          {/* Add additional indicators for each slide*/}
          <ol className="carousel-indicators flex justify-center mt-4">
            <li className="inline-block mr-3">
              <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
            </li>
          </ol>
        </div>

        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

          <nav id="store" class="w-full z-30 top-0 px-6 py-1">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

              <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                Store
              </a>

              <div class="flex items-center" id="store-nav-content">

                <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                  <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </a>

                <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                  <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </a>

              </div>
            </div>
          </nav>

          <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="#">
              <img src={shoes} class="hover:grow hover:shadow-lg" />
              <div class="pt-3 flex items-center justify-between">
                <p class="">Product Name</p>
                <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </div>
              <p class="pt-1 text-gray-900">£9.99</p>
            </a>
          </div>

          <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="#">
              <img src={shoes} class="hover:grow hover:shadow-lg" />
              <div class="pt-3 flex items-center justify-between">
                <p class="">Product Name</p>
                <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </div>
              <p class="pt-1 text-gray-900">£9.99</p>
            </a>
          </div>
          <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="#">
              <img src={shoes} class="hover:grow hover:shadow-lg" />
              <div class="pt-3 flex items-center justify-between">
                <p class="">Product Name</p>
                <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </div>
              <p class="pt-1 text-gray-900">£9.99</p>
            </a>
          </div>
          <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="#">
              <img src={shoes} class="hover:grow hover:shadow-lg" />
              <div class="pt-3 flex items-center justify-between">
                <p class="">Product Name</p>
                <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </div>
              <p class="pt-1 text-gray-900">£9.99</p>
            </a>
          </div>
          <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="#">
              <img src={shoes} class="hover:grow hover:shadow-lg" />
              <div class="pt-3 flex items-center justify-between">
                <p class="">Product Name</p>
                <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </div>
              <p class="pt-1 text-gray-900">£9.99</p>
            </a>
          </div>



        </div>
        {/* Footer */}
        <footer className="bg-white text-gray-600 body-font">
          <div className="container mx-auto px-4 py-8 flex flex-wrap">
            <div className="flex flex-col lg:flex-row lg:justify-between w-full">
              {/* About Section */}
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-center">ABOUT</h2>
                <p className="leading-relaxed text-base">
                  Craft beer & coffee corn bread pug raclette. Street art kombucha bushwick activated charcoal, air plant biodiesel hammock knausgaard. Authentic readymade vinyl knausgaard.
                </p>
              </div>

              {/* Contact Section */}
              <div className="lg:w-1/2 w-full flex flex-col items-end space-y-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-center mr-6">CONTACT US</h2>
                <div className="flex flex-col space-y-4">
                  <a className="text-gray-600 inline-flex items-center text-md font-medium" href="mailto:contact@mysite.com">
                    <svg className="fill-current text-gray-500 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12,12.15L1.5,5V19h21V5L12,12.15z M12,6l7.5,4.5L12,15,4.5,10.5L12,6z"></path>
                    </svg>
                    contact@mysite.com
                  </a>
                  <a className="text-gray-600 inline-flex items-center text-md font-medium" href="tel:+123456789">
                    <svg className="fill-current text-gray-500 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M21,15.33a3.675,3.675,0,0,1-3.69-3.69c0-.064.003-.126.008-.189a1.596,1.596,0,0,0-1.155-1.557A11.874,11.874,0,0,0,12,7.62,1.594,1.594,0,0,0,10.583,8.91a1.619,1.619,0,0,0-1.617.559A4.773,4.773,0,0,1,6.3,8.4C5.827,7.93,4.818,8.161,4.2,8.986a12.637,12.637,0,0,0,2.828,3.7A1.62,1.62,0,0,0,8.619,13.7a1.609,1.609,0,0,0,.94-.221,2.516,2.516,0,0,1,1.338-.507A1.616,1.616,0,0,0,12,12.15a4.663,4.663,0,0,1,.14-.837,1.597,1.597,0,0,0-1.504-1.912A3.633,3.633,0,0,1,9.6,6.6c0-.23-.042-.459-.12-.688A3.694,3.694,0,0,1,12,4.5a3.689,3.689,0,0,1,2.58,6.31A3.679,3.679,0,0,1,21,15.33Z"></path>
                    </svg>
                    +123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>




      </div>
    </>
  );
}
