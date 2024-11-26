import React from 'react'
import downarrow from '../../../../images/keyboard_arrow_down 2.png'
import customers from '../../../../images/file-shared 1.png'
import cart from '../../../../images/mdi-light_equalizer.png'
import products from '../../../../images/automated-logistics 1.png'
import categories from '../../../../images/mdi-light_folder-multiple.png'
import shoe from '../../../../images/image 4.png'
import other from '../../../../images/image 3.png'
import router from '../../../../images/image 1.png'

const Main = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 h-full flex flex-col min-h-full '>

      <div className='w-full flex flex-grow gap-4 px-2 xxs:px-4'>
        {/* Main content area (left side) */}
        <div className='w-full sm:2/3 flex flex-col gap-4 mt-5'>
    <div className='h-80 bg-white dark:bg-gray-800 flex flex-col'>
    <div className='flex justify-between py-4 px-4'>
      <h3 className='font-bold text-gray-900 dark:text-white'>Overview</h3>
      <div className='flex items-center bg-lightGray py-1 px-2 rounded dark:bg-gray-900'>
        <p className='px-2 smx:px-5 text-[0.5rem] smx:text-xs text-gray-900 dark:text-white'>All Time</p>
        <img src={downarrow} className='h-3 smx:h-4 pr-2 dark:invert dark:brightness-0' alt="down arrow" />
      </div>
    </div>
    <div className='flex flex-col flex-grow gap-4 px-4 pt-0 pb-4'>
      <div className='flex flex-wrap h-1/2 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg'>
        <div className='bg-white dark:bg-gray-800 w-1/2 flex mb-2 sm:mb-0'>
          <div className='flex flex-grow justify-start items-center'>
            <img className='px-4 h-5 lg:h-8 dark:invert dark:brightness-0' src={customers} alt="" />
            <div>
              <p className='text-xs font-lato text-gray-900 dark:text-white'>Customers</p>
              <p className='text-xs lg:text-sm font-extrabold text-gray-900 dark:text-white'>10345</p>
            </div>
          </div>
          <div className='flex justify-center items-center flex-grow'>
            <span className='bg-green-200 text-xs xl:text-base rounded-xl px-2 hidden xs:block'>8%</span>
          </div>
        </div>
        <div className='flex w-1/2 mb-2 sm:mb-0'>
          <div className='flex flex-grow justify-start items-center'>
            <img className='px-4 h-5 lg:h-8 dark:invert dark:brightness-0' src={cart} alt="cart" />
            <div>
              <p className='text-xs font-lato text-gray-900 dark:text-white'>Customers</p>
              <p className='text-xs lg:text-sm font-extrabold text-gray-900 dark:text-white'>10345666</p>
            </div>
          </div>
          <div className='flex justify-center items-center flex-grow'>
            <span className='bg-green-200 text-xs xl:text-base rounded-xl px-2 hidden xs:block'>8%</span>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap h-1/2 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg'>
        <div className='bg-white dark:bg-gray-800 w-1/2 flex mb-2 sm:mb-0'>
          <div className='flex flex-grow justify-start items-center'>
            <img className='px-4 h-5 lg:h-8 dark:invert dark:brightness-0' src={products} alt="" />
            <div>
              <p className='text-xs font-lato text-gray-900 dark:text-white'>Managables</p>
              <p className='text-xs lg:text-sm font-extrabold text-gray-900 dark:text-white'>10345</p>
            </div>
          </div>
          <div className='flex justify-center items-center flex-grow'>
            <span className='bg-green-200 text-xs xl:text-base rounded-xl px-2 hidden xs:block'>8%</span>
          </div>
        </div>
        <div className='flex w-1/2'>
          <div className='flex flex-grow justify-start items-center'>
            <img className='px-4 h-5 lg:h-8 dark:invert dark:brightness-0' src={categories} alt="cart" />
            <div>
              <p className='text-xs font-lato text-gray-900 dark:text-white'>Categories</p>
              <p className='text-xs lg:text-sm font-extrabold text-gray-900 dark:text-white'>103</p>
            </div>
          </div>
          <div className='flex justify-center items-center flex-grow'>
            <span className='bg-green-200 text-xs xl:text-base rounded-xl px-2 hidden xs:block'>8%</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Another section below */}
  <div className="w-full overflow-x-auto ">
    <table className="w-full whitespace-no-wrap">
      <thead>
        <tr className="text-[10px] xx:text-xs tracking-wide text-left text-gray-600 dark:text-gray-200 uppercase border-b bg-gray-200 dark:bg-gray-700">
          <th className="px-4 py-3 text-[10px] xx:text-xs">Client</th>
          <th className="px-4 py-3 text-[10px] xx:text-xs">Amount</th>
          <th className="px-4 py-3 text-[10px] xx:text-xs">Status</th>
          <th className="px-4 py-3 text-[10px] xx:text-xs">Date</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y dark:bg-gray-800">
        <tr className="text-gray-700 dark:text-gray-300">
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <div className="flex items-center text-[10px] xx:text-xs">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img src={downarrow} className="object-cover w-full h-full rounded-full" alt="" />
                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
              </div>
              <div>
                <p className="font-semibold text-[10px] xx:text-xs">Hans Burger</p>
                <p className="text-[10px] text-gray-600 xx:text-xs">10x Developer</p>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">$ 863.45</td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-100 rounded-full">
              Approved
            </span>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">6/10/2020</td>
        </tr>
        <tr className="text-gray-700 dark:text-gray-300">
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <div className="flex items-center text-[10px] xx:text-xs">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img src={downarrow} className="object-cover w-full h-full rounded-full" alt="" />
                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
              </div>
              <div>
                <p className="font-semibold text-[10px] xx:text-xs">Hans Burger</p>
                <p className="text-[10px] text-gray-600 xx:text-xs">10x Developer</p>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">$ 863.45</td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-100 rounded-full">
              Approved
            </span>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">6/10/2020</td>
        </tr>
        <tr className="text-gray-700 dark:text-gray-300">
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <div className="flex items-center text-[10px] xx:text-xs">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img src={downarrow} className="object-cover w-full h-full rounded-full" alt="" />
                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
              </div>
              <div>
                <p className="font-semibold text-[10px] xx:text-xs">Hans Burger</p>
                <p className="text-[10px] text-gray-600 xx:text-xs">10x Developer</p>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">$ 863.45</td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-100 rounded-full">
              Approved
            </span>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">6/10/2020</td>
        </tr>
        <tr className="text-gray-700 dark:text-gray-300">
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <div className="flex items-center text-[10px] xx:text-xs">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img src={downarrow} className="object-cover w-full h-full rounded-full" alt="" />
                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
              </div>
              <div>
                <p className="font-semibold text-[10px] xx:text-xs">Hans Burger</p>
                <p className="text-[10px] text-gray-600 xx:text-xs">10x Developer</p>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">$ 863.45</td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-100 rounded-full">
              Approved
            </span>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">6/10/2020</td>
        </tr>
        <tr className="text-gray-700 dark:text-gray-300">
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <div className="flex items-center text-[10px] xx:text-xs">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img src={downarrow} className="object-cover w-full h-full rounded-full" alt="" />
                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
              </div>
              <div>
                <p className="font-semibold text-[10px] xx:text-xs">Hans Burger</p>
                <p className="text-[10px] text-gray-600 xx:text-xs">10x Developer</p>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">$ 863.45</td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-100 rounded-full">
              Approved
            </span>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">6/10/2020</td>
        </tr>
        <tr className="text-gray-700 dark:text-gray-300">
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <div className="flex items-center text-[10px] xx:text-xs">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img src={downarrow} className="object-cover w-full h-full rounded-full" alt="" />
                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
              </div>
              <div>
                <p className="font-semibold text-[10px] xx:text-xs">Hans Burger</p>
                <p className="text-[10px] text-gray-600 xx:text-xs">10x Developer</p>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">$ 863.45</td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-100 rounded-full">
              Approved
            </span>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">6/10/2020</td>
        </tr>
        <tr className="text-gray-700 dark:text-gray-300">
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <div className="flex items-center text-[10px] xx:text-xs">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img src={downarrow} className="object-cover w-full h-full rounded-full" alt="" />
                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
              </div>
              <div>
                <p className="font-semibold text-[10px] xx:text-xs">Hans Burger</p>
                <p className="text-[10px] text-gray-600 xx:text-xs">10x Developer</p>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">$ 863.45</td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-100 rounded-full">
              Approved
            </span>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">6/10/2020</td>
        </tr>
        <tr className="text-gray-700 dark:text-gray-300">
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <div className="flex items-center text-[10px] xx:text-xs">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img src={downarrow} className="object-cover w-full h-full rounded-full" alt="" />
                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
              </div>
              <div>
                <p className="font-semibold text-[10px] xx:text-xs">Hans Burger</p>
                <p className="text-[10px] text-gray-600 xx:text-xs">10x Developer</p>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">$ 863.45</td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-100 rounded-full">
              Approved
            </span>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">6/10/2020</td>
        </tr>
        {/* Other rows here */}
      </tbody>
    </table>
  </div>
</div>


        {/* Sidebar area (right side) */}
        <div className='w-1/3 min-w-[200px] hidden lg:flex bg-white dark:bg-gray-800 p-4 mt-5'>
  <div className='w-full'>
    {/* Popular Products Section */}
    <div>
      <div className='pb-4'>
        <h2 className='font-bold text-gray-900 dark:text-white'>Popular Products</h2>
      </div>

      <div className='flex justify-between pb-2'>
        <p className='text-sm pb-2 text-gray-700 dark:text-gray-300'>product</p>
        <p className='text-sm pb-3 text-gray-700 dark:text-gray-300'>price</p>
      </div>

      {/* Product 1 */}
      <div className='flex justify-between pb-4'>
        <div className='flex'>
          <img className='h-7 pr-2' src={shoe} alt="products" />
          <p className='text-sm font-bold text-gray-900 dark:text-white'>nike shoes</p>
        </div>
        <div><p className='text-sm font-bold text-gray-900 dark:text-white'>13.99999$</p></div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-2' />

      {/* Product 2 */}
      <div className='flex justify-between pb-4'>
        <div className='flex'>
          <img className='h-7 pr-2' src={router} alt="products" />
          <p className='text-sm font-bold text-gray-900 dark:text-white'>nike shoes</p>
        </div>
        <div><p className='text-sm font-bold text-gray-900 dark:text-white'>13.99999$</p></div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-2' />

      {/* Product 3 */}
      <div className='flex justify-between pb-4'>
        <div className='flex'>
          <img className='h-7 pr-2' src={other} alt="products" />
          <p className='text-sm font-bold text-gray-900 dark:text-white'>nike shoes</p>
        </div>
        <div><p className='text-sm font-bold text-gray-900 dark:text-white'>13.99999$</p></div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-2' />
    </div>

    {/* Recent Products Section */}
    <div>
      <div className='pt-4 mb-2 pb-2'>
        <h2 className='font-bold text-gray-900 dark:text-white'>Recent Products</h2>
      </div>

      <div className='flex justify-between pb-2'>
        <p className='text-sm pb-2 text-gray-700 dark:text-gray-300'>product</p>
        <p className='text-sm pb-3 text-gray-700 dark:text-gray-300'>price</p>
      </div>

      {/* Recent Product 1 */}
      <div className='flex justify-between pb-4'>
        <div className='flex'>
          <img className='h-7 pr-2' src={shoe} alt="products" />
          <p className='text-sm font-bold text-gray-900 dark:text-white'>adidas shoes</p>
        </div>
        <div><p className='text-sm font-bold text-gray-900 dark:text-white'>9.99999$</p></div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-2' />

      {/* Recent Product 2 */}
      <div className='flex justify-between pb-4'>
        <div className='flex'>
          <img className='h-7 pr-2' src={shoe} alt="products" />
          <p className='text-sm font-bold text-gray-900 dark:text-white'>puma shoes</p>
        </div>
        <div><p className='text-sm font-bold text-gray-900 dark:text-white'>12.99999$</p></div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-2' />

      {/* Recent Product 3 */}
      <div className='flex justify-between pb-4'>
        <div className='flex'>
          <img className='h-7 pr-2' src={shoe} alt="products" />
          <p className='text-sm font-bold text-gray-900 dark:text-white'>reebok shoes</p>
        </div>
        <div><p className='text-sm font-bold text-gray-900 dark:text-white'>14.99999$</p></div>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>

  )
}

export default Main
