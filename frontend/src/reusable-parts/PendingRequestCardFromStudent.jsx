import React, { useState } from "react";
import { Phone, CalendarDays, AlarmClock } from "lucide-react";

// Helper to convert number to Roman numerals
const toRoman = (num) => {
	const romanMap = [
		["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
		["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
		["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
	];
	return romanMap.reduce((acc, [roman, val]) => {
		while (num >= val) {
			acc += roman;
			num -= val;
		}
		return acc;
	}, "");
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const PendingRequestCard = ({ request }) => {
	const statusList = [
		{ label: "Active", value: "active" },
		{ label: "Pending", value: "pending" },
		{ label: "Finished", value: "finished" },
	];

	const [selectedStatus, setSelectedStatus] = useState(request.status);

	return (
		<div className="rounded-lg border border-base-300 p-4 bg-base-100 shadow-md">
			<div className="flex flex-wrap justify-between items-center mb-2">
				<h2 className="text-xl font-bold text-primary flex items-center gap-2">
					<span className="text-primary py-1 rounded-md shadow-sm">Booking ID:</span>
					<span className="text-white text-sm px-2 py-1 rounded-md shadow bg-primary">
						{request.cardId}
					</span>
				</h2>
			</div>

			<div className="flex justify-between items-center mb-2">
				<h3 className="text-lg font-bold">{request.studentName}</h3>
				<span className={`badge ${request.urgent ? "badge-error" : "badge-ghost"}`}>
					{request.urgent ? "Urgent" : "Normal"}
				</span>
			</div>

			<div className="mb-3">
				<p className="text-sm font-semibold">Requirements:</p>
				<ul className="list-none ml-4 mt-1 text-sm text-base-content space-y-1">
					{request.requirements.map((req, index) => (
						<li key={index}>
							<span className="font-semibold">{toRoman(index + 1)}.</span> {req}
						</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col gap-2 text-sm mb-4">
				<span className="flex items-center gap-2">
					<AlarmClock className="w-4 h-4 text-blue-500" />
					{`${request.timingSlab} ( last date )`}
				</span>
				<span className="flex items-center gap-2">
					<CalendarDays className="w-4 h-4 text-green-500" />
					{request.paymentDate}
				</span>
				<span className="flex items-center gap-2">
					<Phone className="w-4 h-4 text-orange-500" />
					{request.phoneNumber}
				</span>
			</div>

			{/* Status Selector */}
			<div className="form-control flex gap-2 flex-col">
				<div className="flex">
					<label className="label">
						<span className="label-text font-medium mr-5">Update Status</span>
					</label>
					<select
						className="select select-bordered select-sm w-auto"
						value={selectedStatus}
						onChange={(e) => setSelectedStatus(e.target.value)}
					>
						{statusList.map((status) => (
							<option key={status.value} value={status.value}>
								{capitalize(status.value)}
							</option>
						))}
					</select>
				</div>
				{selectedStatus !== request.status && (
					<button className="btn btn-sm btn-primary w-max mt-2">
						Update to {capitalize(selectedStatus)}
					</button>
				)}
			</div>
		</div>
	);
};

export default PendingRequestCard;
