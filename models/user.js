const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create the User schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please fill a valid email address'], // Valid email format
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: 'default_profile_pic.png', // Default profile picture
    },
    bio: {
        type: String,
        maxlength: 280, // Limit bio to 280 characters
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought', // Reference to the Thought model
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model (self-reference)
        },
    ],
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Create a virtual property for friend count
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;