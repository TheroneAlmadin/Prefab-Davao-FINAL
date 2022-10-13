export async function auth(username, password){
    const constUSER = username
    const constPASS = password
    const api_url_auth = "http://127.0.0.1:5000/auth_login/" + constUSER + "/" + constPASS

    const response = await fetch(api_url_auth,{
        method: "POST",
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    });

    const data = await response.json();
    return data
}


export async function allEmployees(){
    const api_url_allEmployees = "http://127.0.0.1:5000/allEmployeesDetails"

    const response = await fetch(api_url_allEmployees,{
        method: "POST",
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    });

    const data = await response.json();
    return data
}

export async function employeeDetails(employeeID){
    const f_employeeID = employeeID
    const api_url_employee = "http://127.0.0.1:5000/employeeDetails/" + f_employeeID
    
    const response = await fetch (api_url_employee, {
        method: "POST",
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    });
    
    const data = await response.json();
    return data
}
