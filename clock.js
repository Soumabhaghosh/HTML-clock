setInterval(() => {
    h=new Date().getHours()
    m=new Date().getMinutes()
    s=new Date().getSeconds()
    hrot=h*30+m/2
    mrot=m*6+s/10
    srot=s*6
    hstick.style.transform =`rotate(${hrot}deg)`
    mstick.style.transform =`rotate(${mrot}deg)`
    sstick.style.transform =`rotate(${srot}deg)`

}, 1000);