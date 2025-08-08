// BookingCard.jsx
import React from 'react';

const BookingCard = ({
	booking,
	isEditing,
	onChange,
	onEdit,
	onCancel,
	onSave,
}) => {
	return (
		<div className="card bg-base-100 border border-base-300 shadow-xl p-4">
			<div className="flex flex-wrap justify-between items-center mb-2">
				<h2 className="text-xl font-bold text-primary flex items-center gap-2">
					<span className="text-primary py-1 rounded-md shadow-sm">
						Booking ID:
					</span>
					<span className="text-white text-sm px-2 py-1 rounded-md shadow bg-primary">
						{booking.cardId}
					</span>
				</h2>

				{booking.urgent && (
					<span className="badge badge-error text-white">Urgent</span>
				)}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label className="font-semibold">Tutor Name</label>
					{isEditing ? (
						<input
							type="text"
							className="input input-bordered w-full"
							value={booking.tutorName}
							onChange={(e) => onChange(booking.cardId, 'tutorName', e.target.value)}
						/>
					) : (
						<p>{booking.tutorName}</p>
					)}
				</div>

				<div>
					<label className="font-semibold">Phone Number</label>
					{isEditing ? (
						<input
							type="text"
							className="input input-bordered w-full"
							value={booking.phoneNumber}
							onChange={(e) => onChange(booking.cardId, 'phoneNumber', e.target.value)}
						/>
					) : (
						<p>{booking.phoneNumber}</p>
					)}
				</div>

				<div className="md:col-span-2">
					<label className="font-semibold">Your Requirements</label>
					{isEditing ? (
						<textarea
							className="textarea textarea-bordered w-full"
							value={booking.requirements.join('\n')}
							onChange={(e) =>
								onChange(booking.cardId, 'requirements', e.target.value.split('\n'))
							}
						/>
					) : (
						<ol className="list-decimal list-inside mt-1">
							{booking.requirements.map((req, idx) => (
								<li key={idx}>{req}</li>
							))}
						</ol>
					)}
				</div>

				<div>
					<label className="font-semibold">Timing Slab</label>
					{isEditing ? (
						<input
							type="text"
							className="input input-bordered w-full"
							value={booking.timingSlab}
							onChange={(e) => onChange(booking.cardId, 'timingSlab', e.target.value)}
						/>
					) : (
						<p>{booking.timingSlab}</p>
					)}
				</div>

				<div>
					<label className="font-semibold">Last Date</label>
					{isEditing ? (
						<input
							type="text"
							className="input input-bordered w-full"
							value={booking.lastDate}
							onChange={(e) => onChange(booking.cardId, 'lastDate', e.target.value)}
						/>
					) : (
						<p>{booking.lastDate}</p>
					)}
				</div>
			</div>

			<div className="flex justify-end gap-4 mt-4">
				{isEditing ? (
					<>
						<button className="btn btn-success btn-sm" onClick={onSave}>
							Save
						</button>
						<button className="btn btn-ghost btn-sm" onClick={onCancel}>
							Cancel
						</button>
					</>
				) : (
					<>
						<button className="btn btn-outline btn-sm btn-primary" onClick={onEdit}>
							Modify
						</button>
						<button className="btn btn-outline btn-sm btn-error">Cancel</button>
					</>
				)}
			</div>
		</div>
	);
};

export default BookingCard;
