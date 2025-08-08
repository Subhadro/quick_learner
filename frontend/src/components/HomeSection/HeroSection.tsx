import React from 'react';

const HeroSection = () => {
	return (
		<div className="hero bg-base-200 min-h-screen rounded-2xl px-6">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"
					className="max-w-sm rounded-lg shadow-2xl"
					alt="Online Class"
				/>
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Find the Perfect Teacher</h1>
					<p className="py-6">
						Explore verified tutors for any subject, check their available classes, and book your slot
						instantly. Need financial help? We’ve got funding options too.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
						<button className="btn btn-primary">Browse Classes</button>
						<button className="btn btn-outline btn-secondary">Get Funding Help</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
