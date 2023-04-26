import styles from "../style";

const Greet = () => {
    //greet
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = ' Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = ' Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = ' Evening';

    //time
    let today = new Date().toISOString().slice(0, 10)

    const startDate = '2023-01-14';
    const endDate = today;

    const diffInMs = new Date(endDate) - new Date(startDate)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);


    return (
        <div className={`flex-1 ${styles.flexCenter} md:items-start flex-col xl:px-0 sm:px-16 px-6`}>


            <div className="flex flex-row text-center ss:text-left justify-between items-center xl:w-full">
                {/* <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"> */}
                <h1 className="flex-1 font-poppins font-semibold text-[40px] ss:text-[110px] text-white ss:leading-[140.8px] leading-[75px]">
                    Good <br className="md:block hidden" />{" "}
                    <span className="text-gradient">{greet}</span>{" "}
                </h1>
            </div>
            <h1 className="font-poppins font-semibold ss:text-[110px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] md:w-full">
                Salma
            </h1>
            
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                haloo cemaaa, may your day is filled with happiness and bliss. 
            </p>


            <div class="group relative block mt-5 ">
                <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                <div
                    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                >
                    <div
                        class=" transition-opacity group-hover:absolute group-hover:opacity-0 w-48"
                    >
                        <h2 class="m-2 text-2md font-medium">we been together for?</h2>

                    </div>

                    <div
                        class="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 w-48"
                    >
                        <h2 class="m-2 text-2md font-medium ">{diffInDays} days</h2>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Greet;
