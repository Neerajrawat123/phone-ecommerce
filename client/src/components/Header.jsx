
function Header() {
  return (
    <header className='md:h-20 h-10 md:px-4 md:py-6 p-2 border-b-[1.5px] w-screen'>
      <div className=" flex justify-between">

        {    /* logo section */    }

      <div className="flex  ">
        <div className="w-5 md:w-8 md:h-4 ">
        <img src="images/mortarboard.png" alt="" />

        </div>
        <div className="font-semibold md:text-lg text-blue-600 px-1">
          <span>buyPhone</span>
        </div>
      </div>


          {    /* navigation section */   }
      <div className="px-12">
        <nav>
          <ul className="flex gap-8 text-xl font-semibold text-blue-800">
            <li>Login</li> 
            <li>register</li>
          </ul>
        </nav>
      </div>

      </div>

  </header>
  )
}

export default Header