import React from "react";
import NavBar from "./header-footer/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./authPage/SignUp";
import LogIn from "./authPage/Login";
import Footer from "./header-footer/Footer";
import Card from "./components/CardList";
import CardDetailsPage from "./components/CardDetailSection";
import Home from "./Home";
import UserProfile from "./components/ProfileSection/ProfilePage";
import { dummyUser } from "./Constants/dummy-user";
import BookTuitionSlot from "./components/BookTution/BookTutionSlot";
import PremiumPlans from "./components/Premium/PremiumPage";


const App = () => {
	return (
		<>
			<div>

				<div className="min-h-screen ">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/login" element={<LogIn />} />
						<Route path="/card" element={<Card />} />
						<Route path="/profile" element={<UserProfile user={dummyUser} />} />
						<Route path="/user-details" element={<CardDetailsPage />} />
						<Route path="/tution-slot" element={<BookTuitionSlot />} />
						<Route path="/premium-plans" element={<PremiumPlans />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default App;
