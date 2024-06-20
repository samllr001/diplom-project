import "./LoginPage.css";


export const LoginPage = () => {
    return (
    
<div className="header">
    <h1>Добро пожаловать на платформу надежных результатов матчей!</h1>
    <form method="POST">
        <input type="text" name="login" placeholder="Логин">
        <input type="password" name="password" placeholder="Пароль">
        <a href="../MainPage/main.html"><button>Войти</button></a>
    </form>
    <div className="forgetPass">
    <a>
       Забыли пароль?
    </a>
    </div>
    <div className="findAcc">
        <div>У вас нет аккаунта?</div>
        <a href="">Зарегистрироваться</a>
    </div>
    </div>
    
    );
};