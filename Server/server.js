import connection from './db.js';
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
const saltRounds = 10
const app = express();
import fetch from 'node-fetch';
import express from 'express'
import axios from "axios";
app.use(express.json());
// Allowing sessions and cookies to communicate with our frontend and backend/ to use sessions and cookies
// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true
// }));
app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:5000', 'http://localhost:4000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Creating Session
app.use(session({
    key: "userId",
    secret: "aivest",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 2 * 60 * 60 * 1000,
    },
}))

// Inserting data into database
app.post('/addInvestors', (req, res) => {

    const username = req.body.inputUserName;
    const email = req.body.inputInvestorsEmail;
    const address = req.body.inputInvestorsAddress;
    const phone = req.body.inputInvestorsPhone;
    const company = req.body.inputInvestorsCompany;
    const password = req.body.inputInvestorsPassword;
    const role = req.body.inputRole;

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err);
        }
        connection.query(`INSERT INTO aivestregistered(ai_username, ai_email, ai_address, ai_phone, ai_company, ai_password, ai_role) VALUES(?,?,?,?,?,?,?)`, [username, email, address, phone, company, hash, role], (err) => {
            if (err) console.log(err)
            else res.send('Registered Investors')
        })
    })

})

// Sign in / Logging In into the system
app.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    connection.query(`SELECT * FROM aivestregistered WHERE ai_email = ?`, [email],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].ai_password, (error, response) => {
                    if (response) {
                        req.session.user = result
                        // console.log(req.session.user)
                        res.send(result)
                    } else {
                        res.send({ message: "Wrong Username/Password" })
                    }
                })
            } else {
                res.send({ message: "Your not registered yet, Please sign up" })
            }

        })

})

// Get Api for checking sessions if user is logged in or not
app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
})


//Get data of category lit from Api then post it to front end

//Get data of category lit from Api then post it to front end
app.get('/categories', async (req, res) => {
    const api_url = `http://127.0.0.1:5000`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json);
})


// Predict  send and get response from the server
app.post('/predict', (req, res) => {

    const inCategory = req.body.inputCategory;
    const inTotalFunding = req.body.inputTotalFunding;
    const inYear = req.body.inputYear;

    // Send requests to API ("data", a dictionary which contain user's total_funding and founding year)
    axios({
        method: "POST",
        url: "http://127.0.0.1:5000/predict_business_success",
        data: { "category_list": inCategory, "total_funding": inTotalFunding, "founded_year": inYear }
        //  Receive a response either 0 or 1 and display the results on screen 
    }).then((response) => {
        const output = response.data
        res.send(output)
        console.log(output)

    })



    // if (output === 1) {
    //     // The id "taget" is in the Cards component, which is where the results will be shown 
    //     console.log(output)
    //     res.send(output)
    //     res.send({ message: "Your business will be successful." })
    // } else {
    //     console.log(output)
    //     res.send(output)
    //     res.send({ message: "Your business will be unsuccessful." })
    // }


    // connection.query(`INSERT INTO predict(category, fund, year) VALUES(?,?,?)`, [inCategory, inTotalFunding, inYear], (err) => {
    //     if (err) console.log(err)
    //     else res.send('Data send')
    // })
})
// Creating localhost Port
app.listen(4000, () => {
    console.log('Server running on port http://localhost:4000')
})