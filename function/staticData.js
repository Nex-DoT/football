import FCB from "public/Teams/FCB.png";
import MNU from "public/Teams/MNU.webp";
import RLM from "public/Teams/RLM.png";
import PR from "public/League/PremierLeague.png";
import SA from "public/League/SerieA.png";
import LA from "public/League/LaLiga.png";
import BU from "public/League/78.webp";
import LE from "public/League/61.webp";
import BGPl from 'public/League/BG-Pl.jpg';
import BGSA from 'public/League/BG-SA.png';
import BGL1 from 'public/League/BG-L1.jpg';
import BGBUN from 'public/League/BG-BUN.png';
import BGLiga from 'public/League/BG-Liga.png';
export function data(){
    const data= {
        team:{
            type: "team",
            teams: [
                {
                    name: "Manchester United",
                    logo: MNU,
                    text: [
                        "English Premier League",
                        "2021-22 Premier League runners-up",
                        "Known for their passionate fan base and their tradition of playing attacking football",
                        "One of the most successful clubs in English football, with 20 Premier League titles and three Champions League titles",
                    ]
                },
                {
                    name: "Real Madrid",
                    logo: RLM,
                    text: [
                        "Spanish La Liga",
                        "Winners of the 2022-23 Champions League",
                        "Home to some of the best players in the world, including Karim Benzema, Luka Modric, and Vinícius Júnior",
                        "One of the most successful clubs in football history, with 14 Champions League titles",
                    ]
                },
                {
                    name: "FC Barcelona",
                    logo: FCB,
                    text: [
                        "Spanish La Liga",
                        "Home to some of the biggest names in football, including Lionel Messi, Pedri, and Robert Lewandowski",
                        "Known for their attractive and attacking style of play, which has been dubbed tiki-taka",
                        "One of the most successful clubs in Spanish football, with 26 La Liga titles and five Champions League titles",
                    ]
                },
            ] ,
            text: "The three most popular football teams in the world"
        },
        league:{
            type: "League",
            league:[
                {
                    name: "Premier League",
                    logo: PR,
                    text: [
                        "Average Opta Power Ranking: 87.1",
                        "Most popular football league in the world",
                        "Home to some of the biggest clubs in the world, including Manchester City, Liverpool, Arsenal, and Manchester United",
                        "Very competitive league with close matches throughout the season",
                        "Exciting and attacking style of play",
                    ]
                },
                {
                    name: "La Liga",
                    logo: LA,
                    text: [
                        "Average Opta Power Ranking: 83.43",
                        "Second most popular football league in the world",
                        "Home to two of the biggest clubs in the world, Real Madrid and Barcelona",
                        "Very competitive league with close matches throughout the season",
                        "Technical and tactical style of play",
                    ]
                },
                {
                    name: "Serei A",
                    logo: SA,
                    text: [
                        "Average Opta Power Ranking: 83.46",
                        "Third most popular football league in the world",
                        "Home to some of the biggest clubs in the world, including Juventus, Inter Milan, and AC Milan",
                        "Very competitive league with close matches throughout the season",
                        "Defensive and tactical style of play",
                    ]
                }
            ],
            text: "The World's Best Football Leagues: A Comparison "
        },
    }
    return data;
}

export function topleague(){
    const data = [
        {
            id: "135",
            name: "Serei A",
            url: SA,
            back: BGSA
        },
        {
            id: "140",
            name: "La Liga",
            url: LA,
            back: BGLiga
        },
        {
            id: "39",
            name: "Premier League",
            url: PR,
            back: BGPl
        },
        {
            id: "61",
            name: "Ligue 1",
            url: LE,
            back: BGL1
        },
        {
            id: "78",
            name: "Bundesliga",
            url: BU,
            back: BGBUN
        },

    ]

    return data
}