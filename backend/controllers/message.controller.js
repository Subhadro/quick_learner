import Message from "../models/message.model.js";
import User from "../models/user.model.js";



export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverPostId: userToChatId },
                { senderId: userToChatId, receiverPostId: myId }
            ]
        })
        res.status(200).json({ messages: messages })
    } catch (error) {
        // console.log("error in getMessage", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export const sendMessage = async (req, res) => {
    try {
        const { text } = req.body;
        const { id: receiverPostId } = req.params;
        // console.log(receiverPostId);
        const senderId = req.user._id;


        // Ensure at least one field is provided
        if (!text) {
            return res.status(400).json({ error: "Message cannot be empty" });
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId: receiverPostId,
            text: text || ""
        });

        // console.log("before newmessage");
        // console.log(newMessage);

        // Save the message to the database
        // console.log("before newmessage save");
        await newMessage.save();

        // Real-time functionality using socket.io

        // Respond with the new message
        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};