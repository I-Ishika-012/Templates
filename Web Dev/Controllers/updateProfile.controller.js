export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phone, location, profilePhoto } = req.body;

    const file = req.file;

    if (!fullname || !email || !phone || !profilePhoto || !location) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    //cloudinary logic here

    const skillsArr = skills.split(",");
    const userId = req.id;
    let user = await User.findById(userId);
    if (!user) {
      return res
        .status(400)
        .json({ message: "User does not exist", success: false });
    }
    //updating data
    user.fullname = fullname;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.location = location;
    user.profile.profilePhoto = profilePhoto;


    //save user
    await user.save();

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      profile: user.profile,
    };
   
    return res
      .status(200)
      .json({ message: "Profile updated successfully", 
        user,
        success: true });
  } catch (error) {
    console.log(error);
  }
};
