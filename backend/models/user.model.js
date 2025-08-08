import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		fullName: {
			type: String,
			required: true,
		},
		// qualification: {
		//     type: String,
		//     required: true,
		// },
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		profilePic: {
			type: String,
			default: "",
		},
		category: {
			type: String,
			enum: ["teacher", "student"],
			required: true,
		},
		star: {
			type: Number,
			min: 1,
			max: 5,
			default: 1,
		},
		username: {
			type: String,
			required: true,
		},
		review: [
			{ type: mongoose.Schema.types.objectId, ref: "Review" }
		]
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
