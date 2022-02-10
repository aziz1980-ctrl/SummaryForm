I was asked to make A form that Top-Tronics customers will fill,
to Summary survey the past year 2021.

the link of the form after production.
https://www.top-tronics.net/2022

How we send email from react without backend/server?
I used the emailjs service.
https://www.emailjs.com/

Notice in the send code below you need a real data to make it work
(in file -src>poll>poll.js)

emailjs
.send(
"", //service id
"", //template the developer build in emailjs
templateParams, //template of data you want to send in email
"" //here you need your user
)

please notice if you should install

npm install @mui/material @emotion/react @emotion/styled
