const Navbar = () => {
  return (
    <div className="bg-purple-400 gap-4 w-screen min-h-24 flex justify-between items-center px-3.5 shadow-lg shadow-violet-500">
      <h1 className="font-medium text-xl sm:text-xl md:text-2xl">Heart Care</h1>
      <ul className="w-2/5 sm:w-2/6 lg:w-1/4  flex justify-between text-xs sm:text-xl lg:pr-5 gap-2 font-medium">
        <li className=" hover:underline  text-slate-950 cursor-pointer">
          Home
        </li>
        <li className=" hover:underline text-slate-950 cursor-pointer">
          About
        </li>
        <li className=" hover:underline text-slate-950 cursor-pointer">
          Contact Us
        </li>
      </ul>
    </div>
  )
}

export default Navbar
