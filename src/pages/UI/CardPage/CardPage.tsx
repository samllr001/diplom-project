import "./CardPage.css";

export const CardPage = () => {
    return (
        <!-- <a href="../index.html"><button>выход</button></a> -->
      <div className="cardPage">
        <div className="header2">
           <img src="../img/Logo.png" alt="">
           <h1>Сайт надежных результатов и счетов ваших матчей!</h1>
        </div>
        <div className="matchDesc">
            <h1>Трансляции RESULTMATCHES</h1>
        </div>
        <div className="matchArea">
            <div className="leftSideArea">
                
            </div>
            <div className="mainArea">
                <h2>Понедельник, 17 июня 2024 
                </h2>
                <div className="match-data">
                    <div className="match-data-team team1 mb-2">
                    <a className="cardDesc" href="">     
                    <div className="logoName">
                     <div className="logo">
                        <div className="team-fav">
                        <div className="p-1">
                            <i className="icon-favorite-off"></i>
                        </div>
                     </div>
                        <img src="../img/BrazilFlag.jpg" alt="Сербия">  </div>
                     <div className="name" itemprop="homeTeam">
                        Сербия
                     </div>
                    </div>    
                    </a>
                    </div>
            
                    <div className="boxResult">
                       <div className="score-container">
                        <span className="scoreResult" id="score">
                        0:1
                        </span>
                        </div>
                         <div className="status">
                           <span className="label" id="status">
                            <span className="scoreResult">
                                Конец матча
                            </span>
                           </span>
                         </div>
                    </div>
                    <div className="match-data-team team2 mb-2">
                        <a className="cardDesc" href="">                    
                         <div className="logoName">
                             <div className="logo">
                         <div className="team-fav">
                            <div className="p-1">
                            <i className="icon-favorite-off"></i>
                            </div>
                        </div>
                           <img src="../img/RussiaFlag.jpg" alt="Англия">                    </div>
                        <div className="name" itemprop="awayTeam">
                            Англия
                        </div>
                         </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="rightSideArea"></div>
        </div>
        <div className="footer2">
            <ul className="column">
               <li>Контакты</li>
               <li>Наша редакция</li>
               <li>Рекламодателям</li>
               <li>Конфиденциальность</li>
               <li>Пользовательское соглашение</li>
            </ul>
            <ul className="column">
                <li>Использование материалов</li>
                <li>Вакансии</li>
                <li>Рассылка</li>
                <li>Стадионы</li>
                <li>Вебмастерам</li>
            </ul>
            <ul className="column">
                 <li>Telegram</li>
                 <li>Telegram ПРОГНОЗЫ</li>
                 <li>ВКонтакте</li>
                 <li>Одноклассники</li>
                 <li>RSS футбольных матчей</li>
            </ul>
        </div>
    </div>
    );
};