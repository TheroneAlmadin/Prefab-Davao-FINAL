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
    console.log(data)
}

