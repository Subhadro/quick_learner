// TuitionHistoryCard.jsx
import React from 'react';

const TuitionHistoryCard = ({ booking }) => {
	const getPaymentStatusBadge = () => {
		const statusClasses = {
			paid: 'badge-success',
			pending: 'badge-warning', 
			overdue: 'badge-error',
			cancelled: 'badge-neutral'
		};
		
		return (
			<span className={`badge ${statusClasses[booking.paymentStatus] || 'badge-neutral'} text-white`}>
				{booking.paymentStatus?.charAt(0).toUpperCase() + booking.paymentStatus?.slice(1) || 'Unknown'}
			</span>
		);
	};

	return (
		<div className="card bg-base-100 border border-base-300 shadow-xl p-4">
			<div className="flex flex-wrap justify-between items-center mb-2">
				<h2 className="text-xl font-bold text-primary flex items-center gap-2">
					<span className="text-primary py-1 rounded-md shadow-sm">
						Tuition ID:
					</span>
					<span className="text-white text-sm px-2 py-1 rounded-md shadow bg-primary">
						{booking.cardId}
					</span>
				</h2>

				<div className="flex gap-2 items-center">
					{getPaymentStatusBadge()}
					{booking.urgent && (
						<span className="badge badge-error text-white">Urgent</span>
					)}
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label className="font-semibold">Tutor Name</label>
					<p>{booking.tutorName}</p>
				</div>

				<div>
					<label className="font-semibold">Phone Number</label>
					<p>{booking.phoneNumber}</p>
				</div>

				<div className="md:col-span-2">
					<label className="font-semibold">Requirements</label>
					<ol className="list-decimal list-inside mt-1">
						{booking.requirements.map((req, idx) => (
							<li key={idx}>{req}</li>
						))}
					</ol>
				</div>

				<div>
					<label className="font-semibold">Timing Slab</label>
					<p>{booking.timingSlab}</p>
				</div>

				<div>
					<label className="font-semibold">Payment Date</label>
					<p>{booking.paymentDate}</p>
				</div>
			</div>
		</div>
	);
};

export default TuitionHistoryCard;
