let music = [{
        title: "Menjadi Dia",
        artis: "Tiara Andini",
        genre: "Pop",
        duration: "40:00",
    },
    {
        title: "Mengapa Kita #terlanjur mencinta",
        artis: "Lyodra",
        genre: "Pop",
        duration: "5:00",
    },
    {
        title: "Ternyata Hanya Kamu",
        artis: "Bjodie",
        genre: "Pop",
        duration: "6:00",
    },
    {
        title: "Ketka Cinta Bertasbi",
        artis: "Melly",
        genre: "Pop",
        duration: "3:00",
    },
    {
        title: "Melawan Restu",
        artis: "Mahalini",
        genre: "Pop",
        duration: "8:00",
    },
    {
        title: "Bisa Tanpamu",
        artis: "Andmesh",
        genre: "Jazz",
        duration: "4:00",
    },
    {
        title: "Kisah Sempurna",
        artis: "Mahalini",
        genre: "Jazz",
        duration: "4:30",
    },
    {
        title: "Alamat Palsu",
        artis: "Ayu Ting-Ting",
        genre: "Dangdut",
        duration: "15:40",
    },
    {
        title: "Bertahan Terluka",
        artis: "Fabio Asher",
        genre: "Pop",
        duration: "8:00",
    },
    {
        title: "Afgan",
        artis: "Jodoh Pasti Bertemu",
        genre: "Pop",
        duration: "10:00",
    },
]

// GENRE
function listGenre(listMusic, genreParams) {
    let a = listMusic.filter(data => data.genre == genreParams);
    console.log(a)
}
// menampung data yang ada di atas
listGenre(music, "Jazz")

console.log("----------------------------------------------------------")

// ARTIST
function listArtist(listMusic1, artisParams) {
    let b = listMusic1.filter(data1 => data1.artis == artisParams);
    console.log(b)
}
listArtist(music, "Bjodie")

console.log("---------------------------------------------------------")

// DURATION
function listDuration() {
    let indexLagu = 0;
    let totaldurasi = 0;
    // mengulangi sebanyak data music
    for (let index = 0; index < music.length; index++) {
        let durasi = music[index].duration.split(':');
        // console.log(misal);
        let menit = parseInt(durasi[0]) * 60
        let detik = parseInt(durasi[1]) * 1
        totaldurasi = totaldurasi + (menit + detik);
        if (totaldurasi < 3600) {
            indexLagu++
        }
    }
    
    for (let index = 0; index < indexLagu; index++) {
        console.log(music[index]);

     
    // for (let i = 0; i < indexLagu; i++) {
    //     if(i === indexLagu-1) {
    //     indexLagu -= music.length+1
    //     i=0
    //     }
    //     console.log(music[i]);
    //     }

    }
}
listDuration()