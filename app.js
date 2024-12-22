const data = [
    {
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac elit ac risus elementum cursus.Phasellus ac elit ac risus elementum cursus. Phasellus ac elit ac risus elementum cursus. Phasellus ac elit ac risus elementum cursus. Phasellus ac elit ac risus elementum cursus. Phasellus ac elit ac risus elementum cursus. Phasellus ac elit ac risus elementum cursus.",
        imgPath: "./img/img1.png"
    },
    {
        paragraph: "Duis eget risus sed ligula accumsan mollis. Maecenas consectetur risus eu magna venenatis fringillaPhasellus ac elit ac risus elementum cursus. Phasellus ac elit ac risus elementum cursus. Phasellus ac elit ac risus elementum cursus. Phasellus ac elit ac risus elementum cursus. Phasellus ac elit ac risus elementum cursus. Phasellus ac elit ac risus elementum cursus.",
        imgPath: "./img/img3.png"
    },
    {
        paragraph: "Ut consectetur justo et lorem placerat, vel laoreet nulla eleifend. Nullam viverra velit vitae risus consequat.",
        imgPath: "./img/img2.png"
    }
];

let buttons = document.querySelectorAll('.btn');
let img = document.querySelector('.dynamic-img');
let header = document.getElementById('dynamic-header');
let paragraph = document.getElementById('dynamic-paragraph');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        img.src = data[index].imgPath;
        header.textContent = button.textContent; 
        paragraph.textContent = data[index].paragraph;
    });
});




buttons.forEach(button => {
    button.addEventListener('click', () => {
    
        buttons.forEach(btn => btn.classList.remove('selected'));

        button.classList.add('selected');
    });
});
