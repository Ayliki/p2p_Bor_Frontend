// const DEFAULT_URL = '';
// const TG = window.Telegram.webApp;

// async function request (endpoint, method, data){
//     const options = {
//         method: method,
//         headers: {
//             Authorisation: TG.initData,
//             ContentType: 'application/json',
//             Access: 'application/json'
//         },
//         body: data ? JSON.stringify(data) :  undefined
//     }

//     const response = await fetch(`${DEFAULT_URL}/api/${endpoint}`, options);
//     const jsonData = await response.json();

//     if (response.ok) return jsonData;
// }


// export {TG, request}