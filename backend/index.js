import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// import path from "path";
// import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

// import { createServer } from 'http';
// import { Server } from 'socket.io';

const app = express();
const secretKey = process.env.JWT_SECRET;

app.use(bodyParser.urlencoded({ extended: false , limit:'10mb'}));
app.use(bodyParser.json({limit:'10mb'}));

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/FriendQuest", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("DB connected");
    })
    .catch(err => {
        console.log("DB connection error: ", err);
    });

// ImageDetails Schema
const imageDetailsSchema = new mongoose.Schema(
    {
        image: String,  // This is where the base64 image will be stored
    },
    {
        collection: "ImageDetails",
    }
);

const Images = mongoose.model("ImageDetails", imageDetailsSchema); // Make sure to register this properly

// User Schema (This needs the 'imageId' field to reference ImageDetails)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: String,
    age: Number,
    gender: String,
    phone: String,
    aadhar: String,
    address: String,
    imageId: { type: mongoose.Schema.Types.ObjectId, ref: "ImageDetails" } // Reference to ImageDetails
});

const User = mongoose.model("User", userSchema); // Register the User model

// const server = createServer(app); // Create the HTTP server
// const io = new Server(server); // Initialize socket.io with the server

// export { server, io }; // Export server and io if needed
// // Create __dirname equivalent in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Use __dirname with express.static
// app.use(express.static(path.join(__dirname, 'public')));
// io.on("connection", function (socket) {
//     socket.on("newuser", function (username) {
//         socket.broadcast.emit("update", username + " joined the conversation");
//     });
//     socket.on("exituser", function (username) {
//         socket.broadcast.emit("update", username + " left the conversation");
//     });
//     socket.on("chat", function (message) {
//         socket.broadcast.emit("chat", message);
//     });
// });


//Routes
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        // populate('imageId') automatically fetches the associated image from the ImageDetails collection.
        //The populate() method in Mongoose is used to automatically replace a field in a document with the actual data from a related document.
        const user = await User.findOne({ email }).populate('imageId'); // 🔥 Populate image details

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });

        res.json({
            success: true,
            jwtToken: token,
            email: user.email,
            name: user.name,
            profilePicture: user.imageId ? user.imageId.image : "", // 🔥 Fetch image from ImageDetails
        });

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


app.post("/register", async (req, res) => {
    const { name, email, password, dob, age, gender, phone, aadhar, address, image } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).send({ message: "User already registered" });
        }

        const hashpassword = await bcrypt.hash(password, 10);

        let imageId = null;
        if (image) {
            const newImage = await Images.create({ image });
            imageId = newImage._id;
        }

        const user = new User({
            name,
            email,
            password: hashpassword,
            dob,
            age,
            gender,
            phone,
            aadhar,
            address,
            imageId
        });

        await user.save();
        res.status(201).send({ message: "Successfully Registered!", user });
    } catch (err) {
        res.status(500).send({ message: "Error while registering", error: err });
    }
});



app.post("/upload-image", async (req, res) => {
    const { base64 } = req.body;
    try {
        const newImage = await Images.create({ image: base64 });
        res.status(201).send({ Status: "ok", imageId: newImage._id }); // Send back the created image ID
    } catch (error) {
        console.error("Error saving image:", error); // Log the error for debugging
        res.status(500).send({ Status: "error", data: error });
    }

})

app.get("/profile", async (req, res) => {
    try {
        const token = req.headers.authorization; // Get token from headers
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }


        // If the JWT is valid, decoded will contain the payload(user data) from the token.
        // Example of decoded data:
        // {
        //     "userId": "123456789", //userId → User’s ID from the database.
        //     "iat": 1700000000, //iat(Issued At) → When the token was created.
        //     "exp": 1700003600  //exp(Expiration Time) → When the token will expire.
        // }
        // Headers, jwt.verify() Function
        // Purpose: Checks if the JWT(token) is valid and not tampered with.
        // If the token is valid, it decodes the payload(data stored inside).
        // If invalid(expired or incorrect signature), it throws an error.
                  
        const decoded = jwt.verify(token, secretKey); // Verify token

        // Finds the user in the database using decoded.userId.
        // populate('imageId') automatically fetches the associated image from the ImageDetails collection.
        //The populate() method in Mongoose is used to automatically replace a field in a document with the actual data from a related document.
        const user = await User.findById(decoded.userId).populate('imageId'); // Fetch user with image

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            name: user.name,
            email: user.email,
            dob: user.dob,
            age: user.age,
            gender: user.gender,
            phone: user.phone,
            aadhar: user.aadhar,
            address: user.address,
            profilePicture: user.imageId ? user.imageId.image : "", // Fetch profile picture
        });

    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

app.put("/profile", async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) return res.status(401).json({ message: "Unauthorized: No token provided" });

        const decoded = jwt.verify(token, secretKey);
        let user = await User.findById(decoded.userId);

        if (!user) return res.status(404).json({ message: "User not found" });

        // ✅ Update text fields
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.phone = req.body.phone || user.phone;
        user.dob = req.body.dob || user.dob;
        user.address = req.body.address || user.address;
        user.gender = req.body.gender || user.gender;

        // ✅ Ensure user.profilePicture is updated if image exists
        if (req.body.image) {
            let image;
            if (user.imageId) {
                image = await Images.findById(user.imageId);
                if (image) {
                    image.image = req.body.image;
                    await image.save();
                } else {
                    image = new Images({ image: req.body.image });
                    await image.save();
                    user.imageId = image._id;
                }
            } else {
                image = new Images({ image: req.body.image });
                await image.save();
                user.imageId = image._id;
            }
            // user.profilePicture = req.body.image; // ✅ Update user profile picture
        }


        await user.save(); // Save user with updated data

        // ✅ Populate image to return profile picture
        const updatedUser = await User.findById(user._id).populate("imageId");

        res.json({
            message: "Profile updated successfully",
            user:{
                name: updatedUser.name,
                email: updatedUser.email,
                dob: updatedUser.dob,
                age: updatedUser.age,
                gender: updatedUser.gender,
                phone: updatedUser.phone,
                aadhar: updatedUser.aadhar,
                address: updatedUser.address,
                profilePicture: updatedUser.imageId ? updatedUser.imageId.image : "", // ✅ Correctly returning Base64 image
            }// Fetch profile picture
        });

        // console.log(updatedUser); now gives profilePicture form Image collection by Populate image

    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Server error" });
    }
});


app.listen(9002, () => {
    console.log("Backend started at port 9002");
})

// server.listen(5000);