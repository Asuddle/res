// import { config } from "../config/config.js";
// import nodemailer from "nodemailer";

// const user = config.emailUser;
// const pass = config.emailPassword;
// const transport = nodemailer.createTransport({
//   service: "Gmail",
//   auth: { user, pass },
//   tls: {
//     rejectUnauthorized: false,
//   },
//   secureConnection: "false",
// });

// const borderStyle = `border: 1px solid;
// 	color: blue;
// 	padding: 6px;
// 	text-align: center;`;

// const confirmEmailUrl =
//   process.env.NODE_ENV === "production"
//     ? process.env.HOST
//     : `${process.env.HOST}:${process.env.PORT}`;

// export const sendConfirmationEmail = (name, email, confirmationCode) => {
//   try {
//     transport.sendMail({
//       from: user,
//       to: email.toLowerCase(),
//       subject: "Please confirm your 1stUsers account",
//       html: `
//             <div style="border:1px solid #ececec; padding:12px 25px 25px 12px">
//                 <h1 style="color:green;">1stUsers Email Confirmation</h1>
//                 <h2>Hello ${name}</h2>
//                 <p>Thank you for creating account. Please confirm your email by clicking on the following link</p>
//                 <a href=${confirmEmailUrl}/api/auth/confirm?code=${confirmationCode}> Click here</a>
//                 <br>
//                 <br>
//                 The 1stUsers Team
//             </div>`,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const sendCheckoutEmail = (data) => {
//   try {
//     let {
//       amount,
//       firstName,
//       lastName,
//       appName,
//       appleUrl,
//       googlePlayUrl,
//       registration,
//       userPack,
//       email,
//       category,
//       gender,
//       minAge,
//       maxAge,
//       socialMedia,
//     } = data;

//     var maillist = [email.toLowerCase(), "duwofit@gmail.com"];

//     //Email to user
//     var mailOptions = {
//       from: "info@1stusers.com",
//       to: maillist,
//       subject: "You have successfully purchased " + userPack + " Users Pack",
//       html: `
//             <div style="text-align:left; margin:10px">
//             <p style="font-size:14px; font-weight:bold">Hello ${firstName} ${lastName}</p>
//             <p>Thank you for using our service, you have successfully purchased ${userPack} Users pack</p>
//                 <table>
//                     <tr>
//                         <th style="${borderStyle}"">First Name</th>
//                         <th style="${borderStyle}"">Last Name</th>
//                         <th style="${borderStyle}"">Email</th>
//                         <th style="${borderStyle}"">App name</th>
//                         <th style="${borderStyle}"">Apple store url</th>
//                         <th style="${borderStyle}"">Google play url</th>
//                         <th style="${borderStyle}"">Target Category</th>
//                         <th style="${borderStyle}"">Gender</th>
//                         <th style="${borderStyle}"">Age</th>
//                         <th style="${borderStyle}"">Social Media</th>
//                         <th style="${borderStyle}"">App Information</th>
//                         <th style="${borderStyle}"">Users pack</th>
//                         <th style="${borderStyle}"">Total Amount</th>
//                     </tr>
//                     <tr>
//                         <td style="${borderStyle}">${firstName}</td>
//                         <td style="${borderStyle}">${lastName}</td>
//                         <td style="${borderStyle}">${email}</td>
//                         <td style="${borderStyle}">${appName}</td>
//                         <td style="${borderStyle}">${appleUrl}</td>
//                         <td style="${borderStyle}">${googlePlayUrl}</td>
//                         <td style="${borderStyle}">${category}</td>
//                         <td style="${borderStyle}">${gender}</td>
//                         <td style="${borderStyle}">${minAge}-${maxAge}</td>
//                         <td style="${borderStyle}">${socialMedia}</td>
//                         <td style="${borderStyle}">${registration}</td>
//                         <td style="${borderStyle}">${userPack} Users</td>
//                         <td style="${borderStyle}">${(amount / 100).toFixed(
//         2
//       )}</td>
//                     </tr>
//                 </table>
//             </div>
//         `,
//     };

//     //Send email
//     transport.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + info.response);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const sendForgotPasswordEmail = (name, email, token) => {
//   try {
//     transport.sendMail({
//       from: user,
//       to: email.toLowerCase(),
//       subject: "1st Users password reset request",
//       html: `
//                 <div style="border:1px solid #ececec; padding:12px 25px 25px 12px">
//                     <h1 style="color:green;">Email Confirmation</h1>
//                     <h2>Hello ${name}</h2>
//                     <p><p>You are receiving this because you (or someone else) have requested the reset of the password for your 1stUsers account.\n\n Please click on the following link, or paste this into your browser to complete the process:\n\n</p>
//                     <a href="${process.env.FRONTEND_URL}/reset-password?token=${token}" style="color:blue;">Click here to reset password</a>
//                     <br>
//                     <br>
//                     The 1stUsers Team
//                 </div>`,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
