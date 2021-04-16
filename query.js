db.profiles.insert({email: 'sarasa@mail.co'})
db.profiles.updateOne({email: "sarasa@mail.co"}, {$set: {name_1: 'soy_sarasa'}});
db.profiles.updateOne({email: "sarasa@mail.co"}, {$set: {eyes_1: 'blue'}});