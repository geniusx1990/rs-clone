import { ITask } from './components/sections/app-section';
import { apiURL } from './type';

export function userLogIn(email: string, password: string) {
    fetch(`${apiURL}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
        .then((res) => res.json())
        .then((data) => {
            const user_id = data.user_id;

            if (data.error) {
                alert(`${data.error}`)
            }
            else if (user_id) {
                localStorage.setItem("user_id", data.user_id)
                location.href = "../#application-page";

            }

        })
        .catch((err) => {

            alert('Error Signing In, please try again.')
        });
}


export function userRegister(name: string, email: string, phonenumber: string, password: string) {
    fetch(`${apiURL}/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phonenumber, password }),
    })
        .then((res) =>
            (res.json()))
        .then((data) => {
            if (data.error) {
                alert(`${data.error}`)
            }

            else {
                alert('Account created. Signing in please.')
            }
        })
        .catch((err) => {
            alert('Error Signing up, try again.')
        });
}


/// get user tasks 'http://localhost:5000/user/getusers/alex@gmail.com'


export function getUserID(email: string) {
    fetch(`${apiURL}/user/getusers/${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "same-origin",
        //body: JSON.stringify({ email })

    }
    )
        .then((res) => res.json())
        .then((data) => {
            const user = data.data[0]['user_id'];
            console.log(user);

        })
        .catch((err) => {
        });

}


/// function for adding task into tasks table;

export function addTaskIntoTable(task: Partial<ITask>): Promise<ITask> {
    return fetch(`${apiURL}/user/addtask`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    }).then((res) => res.json()) as Promise<ITask>
}


//function fot gettins tasks for user_id http://localhost:5000/user/gettasks?user_id=1

export function getAlltasksForOneUser(user_id: number): Promise<ITask[]> {
    return fetch(`${apiURL}/user/gettasks?user_id=${user_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "same-origin",

    }
    )
        .then((res) => res.json()) as Promise<ITask[]>

}

/* export function updateTask(task: ITask) {
    return fetch(`${apiURL}/user/update-task`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    }).then((res) => res.json()) as Promise<ITask>

}
 */


export function updateTask(task: Partial<ITask>): Promise<ITask>{
    return fetch(`${apiURL}/user/completed`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    }).then((res) => res.json()) as Promise<ITask>

}



export function deleteTask(id: number) {
    return fetch(`${apiURL}/user/deletetask/${id}`, {
        method: "DELETE",
/*         headers: {
            "Content-Type": "application/json",
        },
 */        body: JSON.stringify(id),
    }).then((res) => res.json())

}