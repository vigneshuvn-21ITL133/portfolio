"use client";

export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <div>
            <h1 className="text-3xl text-center underline underline-offset-1">Contact</h1>
            <div className="m-5 w-auto h-auto p-8 ml-12 shadow-lg rounded-sm">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-flow-row justify-center items-center">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="w-48 p-2 border border-gray-300 rounded-md font-mono"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="w-48 p-2 border border-gray-300 rounded-md font-mono"
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            className="w-48 p-2 h-24 border border-gray-300 rounded-md font-mono"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 m-5"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
