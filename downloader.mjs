import {mkdir} from 'fs/promises'

import { createWriteStream,existsSync } from 'fs'

import {finished} from 'stream/promises'

import { Readable } from 'stream'

import  request  from 'request'

import path from 'path'

const downloadFile = async (url,fileName) =>{
    // const res = await fetch(url);

    if(!existsSync("downloads")) {
        await mkdir("downloads");
    }

    const destination = path.resolve("./downloads",fileName);
    // const fileStream = createWriteStream(destination, {flags: 'wx'});
    // await finished(Readable.fromWeb(res.body).pipe(fileStream));

    request.get(url).on('error',()=>{

    }).pipe(createWriteStream(destination))
}

import filter_song from './json/filtered_songs.json' with {"type" : "json"}

// console.log(filter_song);

for(let i = 0;i<5;i++){
    downloadFile(filter_song[i].direct_download_link,filter_song[i].name);
}