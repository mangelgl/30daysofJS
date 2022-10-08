/**
 * Create an object literal called personAccount.
 * It has firstName, lastName, incomes, expenses properties and
 * it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
 * Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
 */
console.log("Ejercicios nivel 3");

// Ejercicio 1
const personAccount = {
    firstName: "Miguel Ángel",
    lastName: "García López",
    incomes: 0,
    expenses: 0,
    totalIncome() {
        return this.incomes;
    },
    totalExpense() {
        return this.expenses;
    },
    accountInfo() {
        return `Full name:${this.firstName} ${this.lastName}.\nSalary:${this.incomes}.\nExpenses${this.expenses}.\n`;
    },
    addIncome(income) {
        this.incomes += income;
    },
    addExpense(expense) {
        this.expenses += expense;
    },
    accountBalance() {
        return this.incomes - this.expenses;
    },
};

personAccount.addIncome(1404);
personAccount.addIncome(1404);
personAccount.addIncome(1404);
personAccount.addExpense(749.99);
console.log(personAccount.totalIncome(), personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(`Account balance: ${personAccount.accountBalance()}`);

let users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];

/**
 * 2. Imagine you are getting the above users collection from a MongoDB database.
 * a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
 * b. Create a function called signIn which allows user to sign in to the application
 */

// Ejercicio 2
function signUp(usuario, email, password) {
    let result = "";
    if (existeUsuario(usuario)) {
        result = "Ya existe una cuenta con ese nombre de usuario";
    } else {
        let id = generateID(),
            now = new Date(),
            createdAt = `${now.getDay()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`,
            isLoggedIn = false;
        users.push({ _id: id, username: usuario, email: email, password: password, createdAt: createdAt, isLoggedIn: isLoggedIn });
        result = "Usuario creado";
    }
    return result;
}

function sigIn(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i]._id === id) {
            users[i].isLoggedIn = true;
        }
    }
}

function existeUsuario(usuario) {
    let result = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === usuario) {
            result = true;
        }
    }
    return result;
}

function generateRandomCharacter() {
    let pattern = "abcdefghijklmnñopqrstuvwxyzabcdefghijklmnñopqrstuvwxyz0123456789";
    return pattern[Math.floor(Math.random() * pattern.length + 1)];
}

function generateID() {
    let id = "";
    while (id.length <= 8) {
        id += generateRandomCharacter();
    }
    return id;
}

let products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            { userId: "fg12cy", rate: 5 },
            { userId: "zwf8md", rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    },
];
/**
 * 3. The products array has three elements and each of them has six properties.
 * a. Create a function called rateProduct which rates the product
 * b. Create a function called averageRating which calculate the average rating of a product
 */
// Ejercicio 3
/**
 * Función para valorar un producto
 * @param {String} idprod id del producto que se va a valorar
 * @param {String} usuario id del usuario que hace la valoración
 * @param {Number} rating valoración
 * @returns
 */
function rateProduct(idprod, usuario, rating) {
    let result = "",
        rateObj;
    for (let i = 0; i < products.length; i++) {
        if (products[i]._id === idprod) {
            rateObj = { userId: usuario, rate: rating };
            products[i].ratings.push(rateObj);
            result = "Producto valorado";
            break;
        } else {
            result = "No existe el producto indicado.";
            continue;
        }
    }
    return result;
}

function averageRating(idprod) {
    let result;
    for (let i = 0; i < products.length; i++) {
        if (products[i]._id === idprod) {
            let sum = 0,
                sumCount = 0;
            for (let j = 0; j < products[i].ratings.length; j++) {
                sum += products[i].ratings[j].rate;
                sumCount += 1;
            }
            result = Number(sum) / Number(sumCount);
            break;
        } else {
            continue;
        }
    }
    return result;
}

/**
 * 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
 */
function likeProduct(idprod, idusuario) {
    for (let i = 0; i < products.length; i++) {
        if (products[i]._id === idprod) {
            if (products[i].likes.length == 0) {
                products[i].likes = [idusuario];
            } else if (products[i].likes.length > 0 && products[i].likes[0] === idusuario) {
                products[i].likes[0] = "";
            }
            break;
        } else {
            continue;
        }
    }
    return products;
}
console.log(likeProduct("eedfcf", "fg12cy"));
