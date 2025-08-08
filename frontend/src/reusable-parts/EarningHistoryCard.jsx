// EarningHistoryCard.jsx
import React, { useState } from 'react';

const EarningHistoryCard = ({ earning, onRatingSubmit }) => {
	const [rating, setRating] = useState(earning.studentRating || 0);
	const [hasRated, setHasRated] = useState(earning.hasRated || false);

	const handleRatingClick = (value) => {
		if (!hasRated) {
			setRating(value);
			setHasRated(true);
			onRatingSubmit(earning.cardId, value);
		}
	};

	const renderStars = () => {
		return [...Array(5)].map((_, index) => (
			<button
				key={index}
				className={`text-2xl ${
					index < rating ? 'text-yellow-400' : 'text-gray-300'
				} ${!hasRated ? 'hover:text-yellow-300 cursor-pointer' : 'cursor-default'}`}
				onClick={() => handleRatingClick(index + 1)}
				disabled={hasRated}
			>
				★
			</button>
		));
	};

	return (
		<div className="card bg-base-100 border border-base-300 shadow-xl p-4">
			<div className="flex flex-wrap justify-between items-center mb-4">
				<h2 className="text-xl font-bold text-primary flex items-center gap-2">
					<span className="text-primary py-1 rounded-md shadow-sm">
						Session ID:
					</span>
					<span className="text-white text-sm px-2 py-1 rounded-md shadow bg-primary">
						{earning.cardId}
					</span>
				</h2>

				<div className="flex gap-2 items-center">
					{earning.urgent && (
						<span className="badge badge-error text-white">Urgent</span>
					)}
				</div>
			</div>

			{/* Earnings Highlight Section */}
			<div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg mb-4">
				<div className="flex justify-between items-center">
					<div>
						<h3 className="text-2xl font-bold">₹{earning.amount}</h3>
						<p className="text-green-100">Total Earnings</p>
					</div>
					<div className="text-right">
						<p className="text-lg font-semibold">₹{(earning.amount / earning.sessionsCompleted).toFixed(0)}</p>
						<p className="text-green-100">Per Session</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label className="font-semibold">Student Name</label>
					<p>{earning.studentName}</p>
				</div>

				<div>
					<label className="font-semibold">Phone Number</label>
					<p>{earning.phoneNumber}</p>
				</div>

				<div>
					<label className="font-semibold">Subject Taught</label>
					<p>{earning.subject}</p>
				</div>

				<div>
					<label className="font-semibold">Sessions Completed</label>
					<p>{earning.sessionsCompleted}</p>
				</div>

				<div className="md:col-span-2">
					<label className="font-semibold">Topics Covered</label>
					<ol className="list-decimal list-inside mt-1">
						{earning.topicsCovered.map((topic, idx) => (
							<li key={idx}>{topic}</li>
						))}
					</ol>
				</div>

				<div>
					<label className="font-semibold">Duration</label>
					<p>{earning.duration}</p>
				</div>

				<div>
					<label className="font-semibold">Payment Date</label>
					<p>{earning.paymentDate}</p>
				</div>

				<div className="md:col-span-2">
					<label className="font-semibold">Rate Student</label>
					<div className="flex items-center gap-2 mt-1">
						{renderStars()}
						{hasRated && (
							<span className="text-sm text-gray-500 ml-2">
								Rating submitted!
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EarningHistoryCard;
