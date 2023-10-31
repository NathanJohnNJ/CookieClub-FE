import { writeCookie } from "../common";

export const registerUser = async (firstName, lastName, username, email, password) => {
    try {
        const response = await fetch('http://nathanjohnthedom.com:5001/users/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // mode: "cors",
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "username": username,
                "email": email,
                "password": password,
                "agreedToTerms": "true"
                })
            });
        const data = await response.json()
            console.log(data)
        } catch (error) {
        console.log(error)
        }
}

export const loginUser = async (username, password, setNewUser, setLoginCookie, setToken) => {
    try {
        const response = await fetch('http://nathanjohnthedom.com:5001/users/login', {
            method: "POST",
            // mode: "cors",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        const data = await response.json()
        console.log("data = ", data)
        const cookie = writeCookie("jwt_token", data.token, 7)
        console.log("cookie =", cookie)
        setLoginCookie(cookie)
        const token = data.token
        setToken(token)
        setNewUser(data.user)
        console.log("user =", data.user, "token =", token)
    } catch (error) {
        console.log(error)
    }
}

export const findUser = async (token, setFoundUser) => {
    const auth = `Bearer ${token}`;
    try {
        const response = await fetch('http://nathanjohnthedom.com:5001/users/find', {
            method: "GET",
            // mode: "cors",
            headers: {"Content-Type": "application/json",
            "credentials": "include",
            "Authorization": {auth}}
        })
        const data = await response.json()
        console.log(data)
        setFoundUser(data.user)
    } catch (error) {
        console.log(error)
    }
}

export const handleUpdateUsername = async (updateValue, setNewUser, token) => {
    try {
        console.log(token)
        const response = await fetch('http://nathanjohnthedom.com:5001/users/updateUsername', {
            method: "PUT",
            // mode: "cors",
            headers: {"Content-Type": "application/json",
            "credentials": "include",
            "Authorization": "Bearer ", token},
            body: JSON.stringify({
                username: updateValue
            })
        })
        const data = await response.json()
        setNewUser(data.user);
    } catch (error) {
        console.error("error updating user", error);
    }
}

export const handleUpdateEmail = async (updateValue, setNewUser, token) => {
    try {
        console.log(token)
        const response = await fetch('http://nathanjohnthedom.com:5001/users/updateEmail', {
            method: "PUT",
            // mode: "cors",
            headers: {"Content-Type": "application/json",
            "credentials": "include",
            "Authorization": "Bearer ", token},
            body: JSON.stringify({
                email: updateValue
            })
        })
        const data = await response.json()
        setNewUser(data.user);
    } catch (error) {
        console.error("error updating user", error);
    }
}

export const handleUpdatePassword = async (updateValue, setNewUser, token) => {
    try {
        console.log(token)
        const response = await fetch('http://nathanjohnthedom.com:5001/users/updatePassword', {
            method: "PUT",
            // mode: "cors",
            headers: {"Content-Type": "application/json",
            "credentials": "include",
            "Authorization": "Bearer ", token},
            body: JSON.stringify({
                password: updateValue
            })
        })
        const data = await response.json()
        setNewUser(data.user);
    } catch (error) {
        console.error("error updating user", error);
    }
}

export const handleDelete = async (userID, token, setNewUser) => {
    try {
        const response = await fetch('http://nathanjohnthedom.com:5001/users/delete', {
            method: "DELETE",
            // mode: "cors",
            headers: {"Content-Type": "application/json",
            "credentials": "include",
            "Authorization": "Bearer ", token},
            body: JSON.stringify({
                id: userID
            })
        })
        const data = await response.json()
        console.log(data);
        setNewUser('');
    } catch (error) {
        console.error("error updating user", error);
    }
}

