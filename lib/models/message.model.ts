// messageModel.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 500,
    },
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Assuming messages are associated with user accounts
    },
    attachment: {
      file: {
        type: String, // Assuming file is stored as a file path or URL
      },
      size: {
        type: Number,
        validate: {
          validator: function(value : number) {
            // Validate attachment size (max 100MB)
            return value <= 100 * 1024 * 1024;
          },
          message: 'Attachment size must be less than or equal to 100MB.',
        },
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const Message = mongoose.models.Message|| mongoose.model("Message", messageSchema);

export default Message;
