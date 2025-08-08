import React, { useState } from 'react';
import ToggleButton from '../../reusable-parts/ToggleButton';
import TitleComponent from '../../reusable-parts/TitleComponent';
import { earningHistoryData } from '../../Constants/earning-history-constants';
import EarningHistoryCard from '../../reusable-parts/EarningHistoryCard';

const EarningHistoryList = () => {
	const [showAll, setShowAll] = useState(false);
	const [earningHistory, setEarningHistory] = useState(earningHistoryData);

	const visibleHistory = showAll ? earningHistory : earningHistory.slice(0, 2);

	const handleRatingSubmit = (cardId, rating) => {
		setEarningHistory(prev => 
			prev.map(earning => 
				earning.cardId === cardId 
					? { ...earning, studentRating: rating, hasRated: true }
					: earning
			)
		);
	};

	return (
		<div className="min-h-screen my-12 px-4">
			<TitleComponent
				title="My Teaching Earnings"
				size="4xl"
				align="left"
				className="text-white"
			/>

			<div className="grid gap-6">
				{visibleHistory.map((earning) => (
					<EarningHistoryCard
						key={earning.cardId}
						earning={earning}
						onRatingSubmit={handleRatingSubmit}
					/>
				))}
			</div>

			{earningHistory.length > 2 && (
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

export default EarningHistoryList;
