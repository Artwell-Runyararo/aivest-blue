const express = require(`express`);
const cors = require(`cors`);
const connection = require('./db')
const bcrypt = require(`bcrypt`)
const bodyParser = require(`body-parser`)
const cookieParser = require(`cookie-parser`)
const session = require(`express-session`)
const saltRounds = 10
const app = express();

app.use(express.json());
// Allowing sessions and cookies to communicate with our frontend and backend/ to use sessions and cookies
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

// Creating Session
app.use(session({
    key: "userId",
    secret: "aivest",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 2 * 60 * 60 *1000,
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
if(req.session.user){
    res.send({ loggedIn: true, user: req.session.user});
}else{
    res.send({ loggedIn: false});
}
})
// Creating localhost Port
app.listen(4000, () => {
    console.log('Server running on port http://localhost:4000')
})