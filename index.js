// Add your code here
function submitData(name,email) {
    const formData = {
        name: name,
        email: email,
    };
    const configurationObject = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
         Accept: "application/json",
        },
    body: JSON.stringify(formData)
     };
  
  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
        let h1 = document.createElement('h1');
        h1.innerHTML = object.id;
        document.body.appendChild(h1);
        console.log(object);
    })
    .catch(error => {
        let p = document.createElement('p');
        p.innerHTML = error.message;
        document.body.appendChild(p);
        console.log(error.message);
      });
    
}
