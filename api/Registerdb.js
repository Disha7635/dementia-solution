//[{"Patient_Name":"rohit","Patient_Phone":"01334899999","Emergency_Phone":"01334899999","Password":"123","userId":"6ad9c658-19cc-488a-90a9-e49f7891ed1e"}]
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URL);


// const basicDetailsSchema = new mongoose.Schema({
//     Patient_Name : String,
//     Patient_Phone : String, 
//     Emergency_Phone : String,
//     Password : String 
// })

// //const User = mongoose.model('User',userSchema);

// const patientDetailsSchema = new mongoose.Schema({
//     puserId: String,
//     pname: String,
//     pemail: String,
//     p_age: String,
//     pdob: String,
//     phobbies: String,
//     p_pic: [{type:String}],
// });
// const familyDetailsSchema = new mongoose.Schema(
//     {
//         fname: String,
//         frelation: String,
//         fphone: String,
//         femail: String,
//         faddress: String,
//         fjob:String,
//         f_age: String,
//         fdob: String,
//         fhobbies: String,
//         f_pic: [{type:String}]
//       }
// )

// const DetailsSchema = new mongoose.Schema({
//     basicDetails :  basicDetailsSchema,
//     patientDetails : patientDetailsSchema,
//     familyDetails:[{familyDetailsSchema}]
// })

// const Details = mongoose.model('Details',DetailsSchema);



// // const accountSchema = new mongoose.Schema({
// //     userId: {
// //         type: mongoose.Schema.Types.ObjectId, // Reference to User model
// //         ref: 'User',
// //         required: true
// //     },
// //     balance: {
// //         type: Number,
// //         required: true
// //     }
// // });


// const Account = mongoose.model('Account', accountSchema);

// module.exports = {Details};