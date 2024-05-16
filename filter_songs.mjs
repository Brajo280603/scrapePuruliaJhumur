import { readFileSync, writeFileSync } from "fs";

let received_songs_arr = JSON.parse(readFileSync('./json/received_songs.json','utf-8'))


let sorted_arr = received_songs_arr.filter(el=>{

    // console.log(typeof el.album)
    if(typeof el.album == "string" && (el.album.includes('Purulia') || el.album.includes('Jhargram') || el.album.includes('Jhumur')) && !el.album.includes("DJ")){
        return el;
    }
})


writeFileSync('./json/filtered_songs.json',JSON.stringify(sorted_arr));

let non_dj_songs = received_songs_arr.filter(el=>{
    if(typeof el.album == 'string' && !(el.album.includes('DJ')||el.album.includes("Dj")||el.album.includes("dj"))){
        return el;
    }
})

writeFileSync('./json/non_dj_songs.json',JSON.stringify(non_dj_songs))