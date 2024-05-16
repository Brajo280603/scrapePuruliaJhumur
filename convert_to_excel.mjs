import { readFileSync, writeFileSync } from 'fs'
import jsonrawtoxlsx from 'jsonrawtoxlsx'

let non_dj_songs = JSON.parse(readFileSync("./json/non_dj_songs.json"))
let filtered_songs = JSON.parse(readFileSync("./json/filtered_songs.json"))
let all_songs = JSON.parse(readFileSync("./json/received_songs.json"))


let non_dj_songs_xlsx = jsonrawtoxlsx(non_dj_songs)
let filtered_songs_xlsx = jsonrawtoxlsx(filtered_songs)
let all_songs_xlsx = jsonrawtoxlsx(all_songs)


writeFileSync('./xlsx/non_dj_songs.xlsx',non_dj_songs_xlsx,'binary')
writeFileSync('./xlsx/filtered_songs.xlsx',filtered_songs_xlsx,'binary')
writeFileSync('./xlsx/all_songs.xlsx',all_songs_xlsx,'binary')