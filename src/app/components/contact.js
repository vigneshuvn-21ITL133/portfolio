

export default function Contact() {
    return (
        <div>
            <h1 className="text-3xl text-center underline underline-offset-1">contact</h1>
            <div className="m-5 w-auto h-auto p-8 ml-12 shadow-md rounded-sm">
                <form action="https://formspree.io/f/xvovvqzv" method="POST">
                    <div className="grid grid-flow-row justify-center items-center">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className="w-48 p-2 border border-gray-300 rounded-md font-mono" />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="w-48 p-2 border border-gray-300 rounded-md font-mono" />
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" className="w-48 p-2 h-24 border border-gray-300 rounded-md font-mono"></textarea>
                            <button type="submit" className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 m-5">Send</button>
                            </div>
                         </form>
            </div>
        </div>
    )   
    }
