# React form include sending email without backend

## I was asked to make A form that Top-Tronics customers will fill, <br>to Summary survey the past year 2021.

### the link of the form after production.<br>https://www.top-tronics.net/2022

### How we send email from react without backend/server?<br>I used the emailjs service.<br>https://www.emailjs.com/

### Notice in the send code below you need a real data to make it work<br>(in file -src>poll>poll.js)<br>emailjs.send(<br>"", //service id<br>"", //template the developer build in emailjs<br>templateParams, //template of data you want to send in email<br>"" //here you need your user register in emailjs<br>)

#### please notice if you should install<br>npm install @mui/material @emotion/react @emotion/styled

