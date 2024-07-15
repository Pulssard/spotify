import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img8 from './img8.jpg'
import img1 from './ABBA/ABBA - Gimme! Gimme! Gimme! (A Man After Midnight).png'
import img3 from './ABBA/ABBA - Lay All Your Love On Me.jpg'
import img2 from './ABBA/ABBA - Dancing Queen.jpg'
import img4 from './ABBA/ABBA - Mamma Mia.jpg'
import img5 from './ABBA/ABBA - The Winner Takes It All.png'
import img7 from './ACDC/ACDC.jpg'
import img6 from './ACDC/ACDC-BACK IN BLACK.jpg'
import img9 from './ACDC/ACDC-HIGHWAY.jpg'
import img10 from './ACDC/ACDC-SHOOK.jpg'
import img11 from './ACDC/ACDC-THUNDER.jpg'
import img12 from './ACDC/ACDC-TNT.jpg'
import img13 from './PDM/pdm.jpg'
import img14 from './PDM/pdm1.jpg'
import img15 from './gorillaz/gorillaz.jpg'
import img16 from './gorillaz/g1.png'
import img17 from './gorillaz/g2.jpg'
import img18 from './gorillaz/g3.jpg'
import img19 from './gorillaz/g4.jpg'
import img20 from './gorillaz/g5.jpg'
import img21 from './Daft/dp.jpg'
import img22 from './emp/emp.jpg'
import img23 from './emp/emp1.jpg'
import img24 from './emp/emp2.jpg'
import img25 from './emp/emp3.jpg'
import img26 from './emp/emp4.jpg'
import img27 from './emp/emp5.jpg'
import song1 from  './ABBA/ABBA - Gimme! Gimme! Gimme! (A Man After Midnight).mp3'
import song2 from  './ABBA/ABBA - Dancing Queen.mp3'
import song3 from  './ABBA/ABBA - Lay All Your Love On Me.mp3'
import song4 from  './ABBA/ABBA - Mamma Mia.mp3'
import song5 from  './ABBA/ABBA - The Winner Takes It All.mp3'
import song6 from './ACDC/AC-DC - Back In Black (Official 4K Video) (64).mp3'
import song7 from './ACDC/AC-DC - Highway to Hell (Official Video) (64).mp3'
import song8 from './ACDC/AC-DC - You Shook Me All Night Long (Official 4K Video) (64).mp3'
import song9 from './ACDC/AC-DC - Thunderstruck (Official Video) (64).mp3'
import song10 from './ACDC/AC-DC - T.N.T. (64).mp3'
import song13 from './PDM/Purple Disco Machine - Dopamine (Official Music Video) ft. Eyelar.mp3'
import song14 from './PDM/Purple Disco Machine - Fireworks (Ft. Moss Kena & The Knocks).mp3'
import song15 from './PDM/Purple Disco Machine, ÁSDÍS - Beat Of Your Heart (Official Video).mp3'
import song16 from './PDM/Purple Disco Machine, Chromeo - Heartbreaker (Official Video).mp3'
import song17 from './PDM/Purple Disco Machine, Sophie And The Giants - Hypnotized.mp3'
import song18 from './gorillaz/Gorillaz - 19-2000 (Official Video) (64).mp3'
import song19 from './gorillaz/Gorillaz - Clint Eastwood (Official Video) (64).mp3'
import song20 from './gorillaz/Gorillaz - Cracker Island ft. Thundercat (Official Video) (64).mp3'
import song21 from './gorillaz/Gorillaz - Feel Good Inc. (Official Video) (64).mp3'
import song22 from './gorillaz/Gorillaz - On Melancholy Hill (Official Video) (64).mp3'
import song23 from './Daft/Daft Punk - Around The World (Official Music Video Remastered) (64).mp3'
import song24 from './Daft/Daft Punk - Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers (64).mp3'
import song25 from './Daft/Daft Punk - Harder, Better, Faster, Stronger (Official Video) (64).mp3'
import song26 from './Daft/Daft Punk - Lose Yourself to Dance (Official Version) (64).mp3'
import song27 from './Daft/Daft Punk - Something About Us (Official Video) (64).mp3'
import song28 from './emp/Empire Of The Sun - Alive (Official Video) (64).mp3'
import song29 from './emp/Empire Of The Sun - Music On The Radio (64).mp3'
import song30 from './emp/Empire Of The Sun - Standing On The Shore (Official Video) (64).mp3'
import song31 from './emp/Empire Of The Sun - Walking On A Dream (Official Music Video) (64).mp3'
import song32 from './emp/Empire of the Sun - We Are The People (Official Video) (64).mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "ABBA",
        image: img8,
        desc:"Greatest songs of the greatest music group!",
        bgColor:"#2a4365",
        songsData: [
            {
                id:0,
                name: "ABBA - Gimme! Gimme! Gimme! (A Man After Midnight)",
                image: img1,
                file:song1,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:29"
            },
            {
                id:1,
                name: "ABBA - Dancing Queen",
                image: img2,
                file:song2,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:52"
            },
            {
                id:2,
                name: "ABBA - Lay All Your Love On Me",
                image: img3,
                file:song3,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:40"
            },
            {
                id:3,
                name: "ABBA - Mamma Mia",
                image: img4,
                file:song4,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:30"
            },
            {
                id:4,
                name: "ABBA - The Winner Takes It All",
                image: img5,
                file:song5,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:57"
            },
        ]
    },
    {   
        id:1,
        name: "AC/DC",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d",
        songsData:[
            {
                id:0,
                name: "AC/DC - Back In Black",
                image: img6,
                file:song6,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:13"
            },
            {
                id:1,
                name: "AC/DC - Highway To Hell",
                image: img9,
                file:song7,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:27"
            },
            {
                id:2,
                name: "AC/DC - You Shook Me All Night Long",
                image: img10,
                file: song8,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:28"
            },
            {
                id:3,
                name: "AC/DC - Thunderstruck",
                image: img11,
                file:song9,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:52"
            },
            {
                id:4,
                name: "AC/DC - T.N.T",
                image:img12 ,
                file:song10,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:36"
            },
        ]
    },
    {   
        id:2,
        name: "Purple Disco Machine",
        image: img13,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a",
        songsData:[
            {
                id:0,
                name: "Dopamine (Official Music Video) ft. Eyelar",
                image: img14,
                file:song13,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:57"
            },
            {
                id:1,
                name: "Fireworks (Ft. Moss Kena & The Knocks)",
                image: img14,
                file:song14,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:51"
            },
            {
                id:2,
                name: "Beat Of Your Heart",
                image:img14 ,
                file:song15,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:47"
            },
            {
                id:3,
                name: "Heartbreaker",
                image: img14,
                file:song16,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:05"
            },
            {
                id:4,
                name: "Hypnotized",
                image: img14,
                file:song17,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:15"
            },
        ]
    },
    {   
        id:3,
        name: "Gorillaz",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a",
                songsData:[
            {
                id:0,
                name: "Gorillaz - 19-2000",
                image: img16,
                file:song18,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:55"
            },
            {
                id:1,
                name: "Gorillaz - Clint Eastwood",
                image: img17,
                file:song19,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:28"
            },
            {
                id:2,
                name: "Gorillaz - Cracker Island ft. Thundercat",
                image: img18,
                file:song20,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:39"
            },
            {
                id:3,
                name: "Gorillaz - Feel Good Inc.",
                image: img19,
                file:song21,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:13"
            },
            {
                id:4,
                name: "Gorillaz - On Melancholy Hill",
                image: img20,
                file:song22,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:26"
            },
        ]

    },
    {   
        id:4,
        name: "Daft Punk",
        image: img21,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52",
        songsData:[
            {
                id:0,
                name: " Around The World",
                image: img21,
                file:song23,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:01"
            },
            {
                id:1,
                name: "Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers",
                image: img21,
                file:song24,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:08"
            },
            {
                id:2,
                name: "Harder, Better, Faster, Stronger",
                image: img21,
                file:song25,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:42"
            },
            {
                id:3,
                name: "Lose Yourself to Dance",
                image: img21,
                file:song26,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:10"
            },
            {
                id:4,
                name: "Something About Us",
                image: img21,
                file:song27,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:48"
            },
        ]
    },
    {   
        id:5,
        name: "Empire of The Sun",
        image: img22,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210",
        songsData:[
            {
                id:0,
                name: "Alive",
                image:img23 ,
                file:song28,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:33"
            },
            {
                id:1,
                name: "Music On The Radio",
                image: img24,
                file:song29,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:44"
            },
            {
                id:2,
                name: "Standing On The Shore",
                image: img25,
                file:song30,
                desc:"Put a smile on your face with these happy tunes",
                duration:"4:40"
            },
            {
                id:3,
                name: "Walking On A Dream",
                image: img26,
                file:song31,
                desc:"Put a smile on your face with these happy tunes",
                duration:"3:19"
            },
            {
                id:4,
                name: "We Are The People",
                image: img27,
                file:song32,
                desc:"Put a smile on your face with these happy tunes",
                duration:"5:11"
            },
        ]
    }
]

export const songsData = [
    {
        id:0,
        name: "We Are The People",
        image: img27,
        file:song32,
        desc:"Put a smile on your face with these happy tunes",
        duration:"5:11"
    },
    {
        id:1,
        name: "Lose Yourself to Dance",
        image: img21,
        file:song26,
        desc:"Put a smile on your face with these happy tunes",
        duration:"4:10"
    },
    {
        id:2,
        name: "ABBA - Lay All Your Love On Me",
        image: img3,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"4:40"
    },
    {
        id:3,
        name: "AC/DC - Thunderstruck",
        image: img11,
        file:song9,
        desc:"Put a smile on your face with these happy tunes",
        duration:"4:52"
    },
    {
        id:4,
        name: "Dopamine (Official Music Video) ft. Eyelar",
        image: img14,
        file:song13,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:57"
    },
    {
        id:5,
        name: "Gorillaz - Feel Good Inc.",
        image: img19,
        file:song21,
        desc:"Put a smile on your face with these happy tunes",
        duration:"4:13"
    },
    {
        id:6,
        name: "Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers",
        image: img21,
        file:song24,
        desc:"Put a smile on your face with these happy tunes",
        duration:"4:08"
    },
    {
        id:7,
        name: "Gorillaz - Clint Eastwood",
        image: img17,
        file:song19,
        desc:"Put a smile on your face with these happy tunes",
        duration:"4:28"
    },

]

