"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const reviews = [
    {
        quote:
            "Dancing with this platform has completely transformed our routines. The real-time feedback feature allows us to perfect our moves instantly, making our rehearsals more productive and enjoyable.",
        name: "Samantha Lee",
        title: "Professional Dancer",
    },
    {
        quote:
            "As a choreographer, the collaborative tools are invaluable. I can work with my team remotely and still feel like we're in the same studio. It's a game-changer for our creative process.",
        name: "David Kim",
        title: "Choreographer",
    },
    {
        quote:
            "The version control system ensures that everyone is always on the same page, literally. No more confusion about which routine we're working on or who made what changes.",
        name: "Jessica Martinez",
        title: "Dance Instructor",
    },
    {
        quote:
            "This platform has made my dance classes much more interactive. Students love seeing their improvements in real-time, and I love being able to provide instant feedback.",
        name: "Emily Wang",
        title: "Dance Teacher",
    },
    {
        quote:
            "Keeping track of multiple routines used to be a nightmare, but not anymore. The ability to organize and update everything in one place is fantastic.",
        name: "Michael Brown",
        title: "Dance Studio Owner",
    },
];


function ReviewCards() {
    return (

        <div className="h-[40rem] w-full dark:bg-black  dark:bg-grid-white/[0.2]  relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="font-bold text-center mb-4 z-10 text-3xl">Our Reviews : People Thoughts</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={reviews}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>

    )
}

export default ReviewCards
