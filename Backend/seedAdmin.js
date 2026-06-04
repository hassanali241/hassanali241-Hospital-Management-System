import mongoose from "mongoose";
import { config } from "dotenv";
import { User } from "./models/userSchema.js";

config({ path: "./config/config.env" });

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Hospital_Management_System",
    });
    console.log("Connected to MongoDB...");

    const existingAdmin = await User.findOne({ email: "admin@hassanshealth.com" });
    if (existingAdmin) {
      console.log(`Admin already exists: ${existingAdmin.email}`);
      process.exit(0);
    }

    const admin = await User.create({
      firstName: "System",
      lastName: "Admin",
      email: "admin@hassanshealth.com",
      phone: "03001234567",
      nic: "1234567890123",
      dob: new Date("1990-01-01"),
      gender: "Male",
      password: "adminpassword123",
      role: "Admin",
    });

    console.log("Default Admin created successfully!");
    console.log("Email: admin@hassanshealth.com");
    console.log("Password: adminpassword123");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();
