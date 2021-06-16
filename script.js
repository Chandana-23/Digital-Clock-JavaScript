function showTime()
{
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let session = 'AM';

    if(h>12)
    {
        h = h-12;
        session = "PM";

    }
    else{
        session = "AM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    console.log(h,m,s);
    document.getElementById('time').innerHTML = h+":"+m+":"+s+" "+session;

    setTimeout(showTime, 1000);
}

showTime();