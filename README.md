# React form include sending email without backend

## I was asked to make A form that Top-Tronics customers will fill, <br>to Summary survey the past year 2021.

## For each question if the customer took part of the event/sale ... and select yes<br> A rating bar of 5 starts open for the rate


![1](https://user-images.githubusercontent.com/86624053/153421075-8fd46ce7-c730-4c43-987a-d10adaa8640a.png)

### the link of the form after production.<br>https://www.top-tronics.net/2022

### How we send email from react without backend/server?<br>I used the emailjs service.<br>https://www.emailjs.com/

### Notice in the send code below you need a real data to make it work<br>(in file -src>poll>poll.js)<br>emailjs.send(<br>"", //service id<br>"", //template the developer build in emailjs<br>templateParams, //template of data you want to send in email<br>"" //here you need your user register in emailjs<br>)

#### please notice if you should install<br>npm install @mui/material @emotion/react @emotion/styled

