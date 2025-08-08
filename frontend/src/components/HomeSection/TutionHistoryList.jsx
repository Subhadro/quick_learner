import React, { useState } from 'react';
import ToggleButton from '../../reusable-parts/ToggleButton';
import TitleComponent from '../../reusable-parts/TitleComponent';
import TuitionHistoryCard from '../../reusable-parts/TutionHistory';
import { tuitionHistoryData } from '../../Constants/tution-history';

const TuitionHistoryList = () => {
	const [showAll, setShowAll] = useState(false);
	const [tuitionHistory] = useState(tuitionHistoryData);

	const visibleHistory = showAll ? tuitionHistory : tuitionHistory.slice(0, 2);

	// Sample payment statuses - you can modify this logic based on your data
	const getPaymentStatus = (booking) => {
		const statuses = ['paid', 'pending', 'overdue', 'cancelled'];
		return statuses[booking.cardId % statuses.length];
	};

	return (
		<div className="min-h-screen my-12 px-4">
			<TitleComponent
				title="Learning History"
				size="4xl"
				align="left"
				className="text-white"
			/>

			<div className="grid gap-6">
				{visibleHistory.map((booking) => (
					<TuitionHistoryCard
						key={booking.cardId}
						booking={booking}
						paymentStatus={getPaymentStatus(booking)}
					/>
				))}
			</div>

			{tuitionHistory.length > 2 && (
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

export default TuitionHistoryList;
