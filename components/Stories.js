import { useSession } from "next-auth/react"
import Story from "./Story"
function Stories() {

    // i am using faker.js for fake data
    
    const {data : session} = useSession()

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {session && (
                <Story img={session?.user?.image} username={session?.user?.username} />

            )}
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />
            <Story img="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" username="Satyam" />

        </div>
    )
}

export default Stories
