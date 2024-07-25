const tl = gsap.timeline();


//hero
const hero = document.querySelector('.hero')
const biscuit = document.querySelector('#biscuit')
const milk = document.querySelector('.milk')
// const letters = document.querySelectorAll('.title-text span')
const title = document.querySelector('.title-text')
const textScroll = document.querySelector('.text-scroll')



    tl.to(hero, {
        display: 'block',
        scale: 1,
        duration: 0.2
    }, '<1') //imp

    // .to(loading, {
    //     display: 'none'
    // }, '>')

    // .to(navbar, {
    //     duration: 1,
    //     scale: 1,
    //     ease: "power4.out"
    // }, '>1')

    tl.from(biscuit, {
        x: -250,
        rotate: -180,
        duration: 2,
        ease: "back.out(1.7)",
    }, '>')

    tl.from(textScroll,{
        scale:0,
        duration: 1,
        ease: 'power1.out'
    }, '<1')   

    tl.to('#brokenB1', {
        y:5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'none'
    },'<')

    tl.to('#brokenB2', {
        y:-5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'none'
    },'<')

    // tl.to(milk, {
    //     y:-5,
    //     duration: 1,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: 'none'
    // },'<')



