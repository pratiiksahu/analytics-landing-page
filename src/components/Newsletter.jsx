const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-5    ">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="col-span-2">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tip & tricks to optimize your flexibility</h1>
                <p className="mb-2">Sign up to our newsletter and stay up to date</p>
            </div>
            <div>
                <input className='p-3 w-full rounded-md text-black' type="email" placeholder="Enter Email"/>
                <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 px-6 py-3'>Notify Me</button>
                <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter