import {motion} from "framer-motion";

const CardDetailsPage = () => {
	const cardData = {
		heading: "Learn TailwindCSS with Gatsby",
		username: "JohnDoe",
		details:
			"Master TailwindCSS with Gatsby in a comprehensive course that walks you through real-world examples, UI/UX design best practices, responsive layouts, dark mode support, utility-first thinking, and more. Whether you're transitioning from traditional CSS or looking to expand your React knowledge, this hands-on learning experience ensures you build production-ready applications with modern design tools. Dive deep into component styling, accessibility, and performance optimization. Ideal for both beginners and professionals.",
		board: "WBCHSE",
		topic: "TailwindCSS",
		language: "English",
		preferredMode: "Online",
		address: "Remote",
		payment: 5000,
		status: "available",
		phone: "44333",
		email: "johndoe@example.com",
		telegram: "https://t.me/johndoechannel",
	};

	return (
		<div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16 rounded-xl shadow-xl font-poppins">
			<motion.div
				className="overflow-hidden flex flex-col"
				initial={{opacity: 0, y: 30}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.7}}
			>
				<h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
					{cardData.heading}
				</h1>

				<p className="text-gray-300 text-md italic mb-6">
					— by {cardData.username}
				</p>

				<p className="text-gray-400 text-lg leading-relaxed mb-8">
					{cardData.details}
				</p>

				<div className="flex flex-wrap gap-3 mb-8">
					<span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
						{cardData.board}
					</span>
					<span className="px-3 py-1 bg-teal-500 rounded-full text-sm font-medium">
						{cardData.topic}
					</span>
					<span className="px-3 py-1 bg-purple-600 rounded-full text-sm font-medium">
						{cardData.language}
					</span>
				</div>

				<div className="flex flex-col sm:flex-row justify-between text-base mb-10 gap-6">
					{/* Left Column */}
					<div className="flex flex-col gap-2">
						<p>
							<span className="font-semibold">Mode:</span>{" "}
							{cardData.preferredMode}
						</p>
						<p>
							<span className="font-semibold">Payment:</span> ₹
							{cardData.payment}
						</p>
					</div>

					{/* Right Column */}
					<div className="flex flex-col gap-2 text-right">
						<p>
							<span className="font-semibold">Address:</span>{" "}
							{cardData.address}
						</p>
						<p>
							<span className="font-semibold">Status:</span>{" "}
							<span
								className={`inline-block px-3 py-1 rounded-full text-white text-sm ${
									cardData.status === "available"
										? "bg-green-500"
										: "bg-red-500"
								}`}
							>
								{cardData.status}
							</span>
						</p>
					</div>
				</div>

				<hr className="border-gray-300 my-6" />

				<div className="text-sm text-gray-600 flex justify-between items-center mb-6">
					<span className="flex items-center gap-2">
						<svg
							className="text-indigo-600"
							height="16"
							width="16"
							fill="currentColor"
							viewBox="0 0 512 512"
						>
							<path d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0z M277.333 256c0 11.797-9.536 21.333-21.333 21.333h-85.333c-11.797 0-21.333-9.536-21.333-21.333s9.536-21.333 21.333-21.333h64v-128c0-11.797 9.536-21.333 21.333-21.333s21.333 9.536 21.333 21.333V256z" />
						</svg>
						Posted 6 mins ago
					</span>
					<span className="flex items-center gap-2">
						<svg
							className="text-indigo-600"
							height="16"
							width="16"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
							/>
						</svg>
						By {cardData.username}
					</span>
				</div>

				<div className="bg-indigo-100 border border-indigo-300 rounded-lg p-6 mt-6 text-center space-y-4">
					<h3 className="text-xl font-semibold text-indigo-800">
						Get connected
					</h3>
					<p className="text-lg text-indigo-700 font-bold tracking-wider">
						📞 {cardData.phone}
					</p>
					<a
						href={`tel:${cardData.phone}`}
						className="inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
					>
						Call Now
					</a>
					<p className="text-lg text-indigo-700 font-bold tracking-wider">
						📧 {cardData.email}
					</p>
					<a
						href={`mailto:${cardData.email}`}
						className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
					>
						Send Email
					</a>
					<p className="text-lg text-indigo-700 font-bold tracking-wider">
						📢 Join our Telegram
					</p>
					<a
						href={cardData.telegram}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
					>
						Join Telegram Channel
					</a>
				</div>
			</motion.div>
		</div>
	);
};

export default CardDetailsPage;
