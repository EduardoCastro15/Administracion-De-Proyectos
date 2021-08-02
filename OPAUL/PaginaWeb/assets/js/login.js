function onLogin(){
    let userName=document.getElementById('userNameNode').value
    let passwordValue=document.getElementById('passwordNode').value
    let isLoginOk=users.filter(function(user){
        let {user_name,password}=user
        return user_name==userName&&passwordValue==password
    })
    if(isLoginOk.length!=1){
        alert("Usuario no encontrado en la base de datos")
        return
    }
    window.userName=isLoginOk[0].user_name
    window.location.replace("index.html?userName="+isLoginOk[0].user_name)
    
}