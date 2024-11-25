import Image from "next/image";
export default function Herosection(){
    return(
        <div className="bg-sky-300 lg:h-screen">
            <h1 className="text-center text-3xl font-sans font-bold bg-gray-400 ">Class 9 Assignment</h1>
            <div className="flex md:flex-row flex-col justify-around">
                <div className="font-sans ">
                    <h1 className="text-center text-2xl font-bold p-3">Water Perfume For Men</h1>
                    <p className="text-sm lg:text-base text-center px-5 ">
                    The scent embodies the spirit of the ocean's depths. This fragrance takes you to the calm waves of the Mediterranean Sea with its energizing top notes of bergamot and marine accord.As the fragrance evolves, rich and aromatic hints of cypress emerge, evoking the rugged beauty of the coastal landscape. The heart of fragrance is anchored by deep and notes of lavender, patchouli and ambergris, creating a sense of depth and intensity.
                    </p>
                    <p className="font-semibold text-center p-2">PKR 3,790</p>
                    <div className="flex justify-center items-center p-2">
                    <button className="font-bold bg-blue-600 px-8 py-3 rounded  ">Buy Now</button>
                    </div>
                </div>

                <div className="mr-8 ml-8">
                <Image src="/water.webp" alt="water" width={950} height={950}/>
                
                </div>

            </div>
        {/* <div className="flex md:flex-row flex-col justify-around   ">
            
        <div className="md:w-5/12 w-full mt-10 mb-10">
        <Image src="/memory.jpg" alt="memory 1 " width={500}height={500}/>
        <p className="text-center pt-10">pkr 5000</p>
        <div className=" flex justify-center items-center my-3">
        <button className="px-10 py-4 bg-blue-600 text-white rounded-md mx-auto">
            buy now
        </button>
        </div>
    </div>

    <div className="md:w-5/12 w-full mt-10 mb-10">
        <Image src="/memory.jpg" alt="memory 1 " width={500}height={500}/>
        <p className="text-center pt-10">pkr 5000</p>
        <div className=" flex justify-center items-center my-3">
        <button className="px-10 py-4 bg-blue-600 text-white rounded-md mx-auto">
            buy now
        </button>
        </div>
    </div>

    <div className="md:w-5/12 w-full mt-10 mb-10">
        <Image src="/memory.jpg" alt="memory 1 " width={500}height={500}/>
        <p className="text-center pt-10">pkr 5000</p>
        <div className=" flex justify-center items-center my-3">
        <button className="px-10 py-4 bg-blue-600 text-white rounded-md mx-auto">
            buy now
        </button>
        </div>
    </div>
    </div>   */}
    </div>
    )
}