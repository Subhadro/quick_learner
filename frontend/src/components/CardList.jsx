// CardList.jsx
import React from "react";
import { Bookings as defaultBookings } from "../Constants/booking";
import Card from "../reusable-parts/Card";

const CardList = ({ bookings = defaultBookings }) => {
	return (
		<div className="flex w-screen flex-col sha">
			{bookings.map((booking, index) => (
				<Card
					key={index}
					heading={booking.heading}
					username={booking.username}
					details={booking.details}
					board={booking.board}
					topic={booking.topic}
					language={booking.language}
					preferredMode={booking.preferredMode}
					address={booking.address}
					payment={booking.payment}
					status={booking.status}
					cardId={booking.cardId}
				/>
			))}
		</div>
	);
};

export default CardList;
