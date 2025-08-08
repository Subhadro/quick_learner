import React, { useState } from 'react';
import Alert from './components/HomeSection/Alert';
import HeroSection from './components/HomeSection/HeroSection';
import BookingsPage from './components/HomeSection/Bookings';
import TuitionHistoryList from './components/HomeSection/TutionHistoryList';
import EarningHistoryList from './components/HomeSection/EarningHistoryCardList';
import PendingRequestsList from './components/HomeSection/PendingRequestCardFromStudentList';

const Home = () => {
	const [notPremium, setNotPremium] = useState(true);

	return (
		<div className="flex flex-col justify-center min-h-screen mx-28 gap-5 my-10">
			<div className="w-full">
				{notPremium && (
					<Alert />
				)}
			</div>
			<div id="hero" className="w-full">
				<HeroSection />
			</div>
			<div id="bookings" className="w-full">
				<BookingsPage />
			</div>
			<div id="tuition-history" className="w-full">
				<TuitionHistoryList />
			</div>
			<div id="earning-history" className="w-full">
				<EarningHistoryList />
			</div>
			<div id="pending-requests" className="w-full">
				<PendingRequestsList />
			</div>

		</div>
	);
};

export default Home;
