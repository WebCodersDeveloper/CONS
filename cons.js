const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.qr, .card, .content, .part, .menu`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`#car`,{
     origin: 'left',
 })

 sr.reveal(`#kar`,{
     origin: 'right',
     interval: 100,
 })

 sr.reveal(`.footer, #bot, .banner`,{
    origin: 'bottom',
    interval: 100,
})