import { useLoaderData } from "react-router-dom";


const DetailsPage = () => {
    const details = useLoaderData()
    console.log(details)

    const { postTile, thumbnail, description, needPeoples, location, category, deadline, username, email, owenerImage } = details

    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-5 lg:flex-row lg:gap-10">
                    <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-3xl font-bold leading-none sm:text-2xl">{postTile}
                        </h1>
                        <p className=" text-lg mt-5 mb-3">Description: {description}
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <p> Category: {category}</p>
                            <p> Location: {location}</p>
                            <p> Need Peoples: {needPeoples}</p>
                        </div>
                        <div className="mt-8 flex gap-5 items-center border-2 p-4">
                            <div>
                                <img className="w-[50px] h-[50px] rounded-full" src={owenerImage} alt="" />

                            </div>
                            <div className="text-start">
                                <h4>Owener: {username}</h4>
                                <h4>Email: {email}</h4>
                                <h4>Dea;ine: {deadline}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={thumbnail} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsPage;