import React, { useState } from 'react';
import ToggleButton from '../../reusable-parts/ToggleButton';
import TitleComponent from '../../reusable-parts/TitleComponent';
import BookingCard from '../../reusable-parts/BookingCard';
import { sampleBookings } from '../../Constants/booking';

const BookingsPage = () => {
	const [showAll, setShowAll] = useState(false);
	const [editCardId, setEditCardId] = useState(null);
	const [bookings, setBookings] = useState(sampleBookings);

	const visibleBookings = showAll ? bookings : bookings.slice(0, 2);

	const handleChange = (id, key, value) => {
		const updated = bookings.map((b) =>
			b.cardId === id ? { ...b, [key]: value } : b
		);
		setBookings(updated);
	};

	return (
		<div className="min-h-screen my-12 px-4">
			<TitleComponent
				title="Active Tutoring Sessions"
				size="4xl"
				align="left"
				className="text-white"
			/>

			<div className="grid gap-6">
				{visibleBookings.map((booking) => {
					const isEditing = editCardId === booking.cardId;
					return (
						<BookingCard
							key={booking.cardId}
							booking={booking}
							isEditing={isEditing}
							onChange={handleChange}
							onEdit={() => setEditCardId(booking.cardId)}
							onCancel={() => setEditCardId(null)}
							onSave={() => setEditCardId(null)}
						/>
					);
				})}
			</div>

			{bookings.length > 2 && (
				<ToggleButton
					onClick={() => setShowAll((prev) => !prev)}
					isExpanded={showAll}
					expandedText="Show Less"
					collapsedText="Show More"
				/>
			)}
		</div>
	);
};

export default BookingsPage;



