import { write,appendFileSync } from 'fs';
import {DOMParser , parseHTML, toJSON} from 'linkedom'


async function scrapper( site ){
    let response = await fetch(site);

    let res_text = await response.text();

    const {window, document} = parseHTML(res_text);

    let songs_arr = [];
    let songs_info = {};

    document.querySelectorAll(".fileName").forEach(songs=>{

        let songs_info_arr= songs.toJSON();


        songs_info = {
            name:songs_info_arr[13],
            link:"https://puruliadj.in" + songs_info_arr[4],
            category: songs_info_arr[20],
            album: songs_info_arr[31],
            size: songs_info_arr[39],
        }

        songs_arr.push(songs_info);



        // console.log(parseSongInfo(String(songs)))

    })

    return songs_arr;
}



let site = 'https://puruliadj.in/files/search/find/+/sort/new2old/page/'


async function writeSongsToFile(scraping_site){
    let output_arr = [];

    for(let i = 1; i < 59;i++){
        let output = await scrapper(scraping_site+i);

        output_arr.push(output)
    }

    let cleanupArr = [];

    output_arr.forEach(arr=>{
        arr.forEach(el=>{
            cleanupArr.push(el);
        })
    })
    console.log(cleanupArr)

    appendFileSync('./received_songs.json',JSON.stringify(cleanupArr))
}

writeSongsToFile(site);