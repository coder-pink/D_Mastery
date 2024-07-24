import Link from "next/link"
import { Boxes } from "./ui/background-boxes"
import { Button } from "./ui/moving-border";


function HeroSection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0  ">
            <Boxes />
            <div className="p-4 relative z-10 w-full text-center" >
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Elevate Your Dance Mastery</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Embark on a transformative journey, mastering classic techniques and exploring innovative styles to unlock your full potential as a confident, expressive dancer</p>
            </div>

            <Link href={'/courses'}>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Explore courses
                </Button>
            </Link>
        </div>
    )
}

export default HeroSection
