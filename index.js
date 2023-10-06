const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
const connectToDatabase = require("./Config/db");
// const civilianRouter = require('./Router/civilian.route');
const civilianRouter = require('./Router/user.route');
// const policemenRouter=require('./Router/registerLoginPolicemen.route');
const bagRouter = require('./Router/missingBag.route');
const foundBagRouter = require('./Router/foundBag.route');
 const foundHumanRouter = require('./Router/foundHuman.route');
const foundMobileRouter = require('./Router/foundMobile.route');
const foundOtherRouter = require('./Router/foundOther.route');
const foundPetRouter = require('./Router/foundPet.route');
const foundVehicleRouter = require('./Router/foundVehicle.route');
const vehicleRouter = require("./Router/missingVehicle.route")
const missingOtherRouter = require("./Router/missingOther.route");
const bannerRouter = require("./Router/banner.route")
const videoRouter = require("./Router/video.route");
const newsRouter = require("./Router/news.route");
const missingMobile = require("./Router/MissingMobile.route");
const { postphonebook, getphonebook, deletephonebook } = require('./Router/phonebooks.route');
const humanRouter = require('./Router/missingHuman.route');
const PetRouter = require("./Router/missingPet.route");
const allComplaints = require("./Router/allComplaints.route")

// const HumanRouter = require('./Router/missingHuman.route');
const profileRouter = require("./Router/profile.route");
const app = express();
const port = process.env.PORT || 8080;


//image
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/files", express.static("/upload"))
app.use(cors());

// app.use('/civilian', civilianRouter);
app.use('/civilian', civilianRouter);
app.use('/missing-bag', bagRouter);
app.use('/found-bag', foundBagRouter);
app.use('/found-human', foundHumanRouter)
app.use('/found-mobile', foundMobileRouter)
app.use('/found-other', foundOtherRouter)
app.use('/found-pet', foundPetRouter)
app.use('/missing-vehicle', vehicleRouter);
app.use("/missingOther", missingOtherRouter);
app.use("/Banner", bannerRouter);
// app.use('/registerLoginPolicemen',policemenRouter);
app.use("/missingOther" ,missingOtherRouter);
app.use("/Banner" , bannerRouter);
app.use("/VideoRoute", videoRouter);
app.use("/newsRoute" ,newsRouter);
app.use("/missingHuman" , humanRouter);
app.use('/found-vehicle', foundVehicleRouter);
app.use("/complaints" , allComplaints);
app.use("/missing-pet" , PetRouter);
app.use("/missing-mobile" , missingMobile);


// user profile related routes
app.use('/user', postphonebook);
app.use('/user', getphonebook);
app.use('/user', deletephonebook);

app.use('/user' , profileRouter);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(port, async () => {
    try {
        await connectToDatabase();
        console.log(port, "<<port");
    } catch (err) {
        console.log({ message: "Failed to connect Database", err });
    }
});

