import axios from "axios";

function fetchUsers() {
    const url = "http://localhost:5000/users";
    axios.get(url);
}

export {
    fetchUsers
}