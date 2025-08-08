import React, { useState } from 'react';
import ToggleButton from '../../reusable-parts/ToggleButton';
import TitleComponent from '../../reusable-parts/TitleComponent';
import TuitionHistoryCard from '../../reusable-parts/TutionHistory';
import { tuitionHistoryData } from '../../Constants/tution-history';
import { TuitionHistoryIO } from '../../typeIO/priliminaryIO';

const TuitionHistoryList: React.FC = () => {
	const [showAll, setShowAll] = useState<boolean>(false);
	const [tuitionHistory] = useState<TuitionHistoryIO[]>(tuitionHistoryData);

	const visibleHistory = showAll ? tuitionHistory : tuitionHistory.slice(0, 2);
	return (
		<div className="min-h-screen my-12 px-4">
			<TitleComponent
				title="Learning History"
				size="4xl"
				align="left"
				className="text-white"
			/>

			<div className="grid gap-6">
				{visibleHistory.map((booking:TuitionHistoryIO) => (
					<TuitionHistoryCard
						key={booking.cardId}
						booking={booking}
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
