// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const session = require("express-session");
// const bodyParser = require("body-parser");

// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var conn = mysql.createConnection({
//     host: 'localhost',
//     user: "root",
//     password: "",
//     database: "restaurant"
// });

// app.set('view engine', 'hbs');


// app.get('/welcome', function (req, res) {
//     res.render('welcome');
// });

// app.get('/', function (req, res) {
//     res.redirect('/welcome');
// });

// app.get('/signup', function (req, res) {
//     res.render('signup');
// });
// app.post('/signup', function (req, res) {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
  
//     const phone = req.body.phone;

//     var sql = SELECT email FROM users WHERE email = ?;
//     conn.query(sql, [email], function (error, result) {
//         if (error) {
//             console.error(error);
//             return res.render('signup', { message: 'Error occurred' });
//         }

//         if (result.length > 0) {
//             return res.render('signup', { message: 'Email is already in use' });
//         }

//         var insertSql = INSERT INTO users (Name, email, password, phoneno) VALUES (?, ?, ?, ?);
//         conn.query(insertSql, [name, email, password, phone], function (insertError, insertResult) {
//             if (insertError) {
//                 console.error(insertError);
//                 return res.render('signup', { message: 'Error occurred during registration' });
//             }
          
//             return res.redirect("/login");
         
  
//         });
//     });
// });


// app.get('/login', function (req, res) {
//     res.render('login');
// });
// app.get('/signup', function (req, res) {
//     res.render('signup');
// });
// app.get('/welcome', function (req, res) {
//     res.render('welcome');
// });
// app.post('/login', function (req, res) {
//     var email = req.body.email;
//     var password = req.body.password;

//     if (email && password) {
//         var sql = SELECT * FROM users WHERE email = ? AND password = ?;
//         conn.query(sql, [email, password], function (err, result) {
//             if (err) {
//                 console.error(err);
//                 res.render('login', { message: 'An error occurred. Please try again.' });
//             } else if (result.length > 0) {
//                 var user = result[0];
//                 req.session.loggedin = true;
//                 req.session.email = email;
//                 req.session.userId = user.Id; // Storing user's ID in the session
//                 var email = user.email;

              
//                 res.render('welcome', { email: email });// replace it with welcome page
//                 res.redirect("/welcome");//same goes here
//             } else {
//                 res.render('login', { message: 'Incorrect email or password.' });
//             }
//         });
//     } else {
//         res.render('login', { message: 'Please enter email and password.' });
//     }
// });
// // app.post('/login', function (req, res) {
// //     var username = req.body.email;
// //     var password = req.body.password;
    
// //     if (username && password) {
// //         var sql = SELECT * FROM users WHERE email='${username}' && password='${password}';
// //         conn.query(sql, function (err, result) {
// //             if (result.length > 0) {
// //                 req.session.loggedin = true;
// //                 req.session.username = username;
// //                 res.redirect('/welcome');
// //             } else {
// //                 res.render('login', { message: 'Incorrect details' });
// //             }
// //         });
// //     } else {
// //         res.render('login', { message: 'Please enter details' });
// //     }
// // });

// app.get('/dash', function (req, res) {
//     if (req.session.loggedin) {
//         res.render('dash', { user: email });
//     } else {
//         res.redirect('/login');
//     }
// });

// app.get('/logout', function (req, res) {
//     req.session.destroy(function (err) {
//         if (err) {
//             console.error(err);
//         }
//         res.redirect('/login');
//     });
// });

// app.listen(20000, () => {
//     console.log('Server is running on port 20000');
// });




const express = require("express");
const app = express();
const mysql = require("mysql");
const session = require("express-session");
const bodyParser = require("body-parser");

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var conn = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "restaurant"
});

app.set('view engine', 'hbs');

app.get('/welcome', function (req, res) {
    res.render('welcome');
});
// app.get('/', function (req, res) {
//     res.render('about');
// });
app.get('/', function (req, res) {
    res.redirect('/welcome');
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/signup', function (req, res) {
    res.render('signup');
});
app.get('/contact', function (req, res) {
    res.render('contact');
});
app.get('/loc', function (req, res) {
    res.render('loc');
});
app.get('/reservation', function (req, res) {
    res.render('reservation');
});
app.get('/mumbai1', function (req, res) {
    res.render('mumbai1');
});
app.get('/mumbai2', function (req, res) {
    res.render('mumbai2');
});
app.get('/mumbai3', function (req, res) {
    res.render('mumbai3');
});
app.get('/delhi1', function (req, res) {
    res.render('delhi1');
});
app.get('/delhi2', function (req, res) {
    res.render('delhi2');
});
app.get('/delhi3', function (req, res) {
    res.render('delhi3');
});
app.get('/kolkata1', function (req, res) {
    res.render('kolkata1');
});
app.get('/kolkata2', function (req, res) {
    res.render('kolkata2');
});
app.get('/kolkata3', function (req, res) {
    res.render('kolkata3');
});
app.get('/varanasi1', function (req, res) {
    res.render('varanasi1');
});
app.get('/varanasi2', function (req, res) {
    res.render('varanasi2');
});
app.get('/varanasi3', function (req, res) {
    res.render('varanasi3');
});
app.get('/confirmation', function (req, res) {
    res.render('confirmation');
});
app.get('/thankyou', function (req, res) {
    res.render('thankyou');
});

////////////////////////////////
app.post('/signup', function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;

    var sql = "SELECT email FROM users WHERE email = ?";
    conn.query(sql, [email], function (error, result) {
        if (error) {
            console.error(error);
            return res.render('signup', { message: 'Error occurred' });
        }

        if (result.length > 0) {
            return res.render('signup', { message: 'Email is already in use' });
        }

        var insertSql = "INSERT INTO users (Name, email, password, phoneno) VALUES (?, ?, ?, ?)";
        conn.query(insertSql, [name, email, password, phone], function (insertError, insertResult) {
            if (insertError) {
                console.error(insertError);
                return res.render('signup', { message: 'Error occurred during registration' });
            }

            return res.redirect("/login");
        });
    });
});
app.post('/reservation', function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const date = req.body.date;
    const time = req.body.time;
    const guests = req.body.guests;

    var sql = "INSERT INTO book (Person, Email, Phone, Date, TIme, Guest) VALUES (?, ?, ?, ?, ?, ?)";
    conn.query(sql, [name, email, phone, date, time, guests], function (error, result) {
        if (error) {
            console.error(error);
            return res.render('reservation', { message: 'Error occurred while booking reservation' });
        }

        return res.redirect("/confirmation"); // Redirect to confirmation page after successful booking
    });
});


app.post('/reservation', (req, res) => {
    const username = req.session.Email;
    console.log(username); // Corrected: Retrieve username from session
    const query = 'SELECT Person,Email,Phone,Date,TIme,Guest FROM book WHERE Email= ?';

    connection.query(query, [username], (error, results, fields) => {
        if (error) {
            console.error('Error executing query: ' + error);
            res.status(500).send('Internal Server Error');
            return;
        }

        // If results exist, send the data, otherwise send null
        if (results.length > 0) {
            const reserve = {
                Person: results[0].Person,
                Email: results[0].Email, // Corrected: Use 'Email' instead of 'Name'
                Phone: results[0].Phone,
                Date: results[0].Date,
                TIme: results[0].TIme,
                Guest: results[0].Guest,
            };
            
            res.send(reserve);
        } else {
            res.send(null);
        }
    });
});
app.post('/reservation', (req, res) => {


    // Construct SQL query based on the provided parameters
    const username = req.session.Email;
    console.log(username); // Corrected: Retrieve username from session
    const query = 'SELECT Person,Email,Phone,Date,TIme,Guest FROM book WHERE Email= ?';

    conn.query(query, [username], (error, results, fields) => {
        if (error) {
            console.error('Error executing query: ' + error);
            res.status(500).send('Internal Server Error');
            return;
        }

    // Add condition to filter by transaction type = "rent"
    // sql += ' AND transaction_type = "rent"';

    // Execute the SQL query with the parameters
  

        // Render the HBS template with the search results
        res.render('confirmation', { results });
    });
});



app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/login', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    if (email && password) {
        var sql = "SELECT * FROM users WHERE email = ? AND password = ?";
        conn.query(sql, [email, password], function (err, result) {
            if (err) {
                console.error(err);
                res.render('login', { message: 'An error occurred. Please try again.' });
            } else if (result.length > 0) {
                req.session.loggedin = true;
                req.session.email = email;
                // var email = user.email; // This line is not needed

                res.redirect("/loc");
            } else {
                res.render('login', { message: 'Incorrect email or password.' });
            }
        });
    } else {
        res.render('login', { message: 'Please enter email and password.' });
    }
});


/////////***************///////
// app.post('/login', function (req, res) {
//     var email = req.body.email;
//     var password = req.body.password;

//     if (email && password) {
//         var sql = "SELECT * FROM users WHERE email = ? AND password = ?";
//         conn.query(sql, [email, password], function (err, result) {
//             if (err) {
//                 console.error(err);
//                 res.render('login', { message: 'An error occurred. Please try again.' });
//             } else if (result.length > 0) {
//                 req.session.loggedin = true;
//                 req.session.email = email;

//                 // Get the user's name from the database result
//                 var userName = result[0].name; // Assuming the name column is 'name'

//                 // Pass the user's name to the view
//                 res.render('loc', { userName: userName }); // Assuming 'loc' is the view to render after successful login
//             } else {
//                 res.render('login', { message: 'Incorrect email or password.' });
//             }
//         });
//     } else {
//         res.render('login', { message: 'Please enter email and password.' });
//     }
// });


//////////////////**********////////////////////////////////



app.get('/welcome', function (req, res) {
    if (req.session.loggedin) {
        // Access email from session
        res.render('loc');
        // { email: req.session.email });
    } else {
        res.redirect('/login');
    }
});
app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.error(err);
        }
        res.redirect('/login');
    });
});

app.listen(20000, () => {
    console.log('Server is running on port 20000');
});
