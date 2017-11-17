import Vue from 'vue'
import App from './App.vue'

Vue.filter('hour2hangul', function(phour) {
    const hour = phour%12;
    let hHour = '';
    switch (hour) {
        case 0:
            hHour ='열두';
            break;
        case 1:
            hHour ='한';
            break;
        case 2:
            hHour ='두';
            break;
        case 3:
            hHour ='세';
            break;
        case 4:
            hHour ='네';
            break;
        case 5:
            hHour ='다섯';
            break;
        case 6:
            hHour ='여섯';
            break;
        case 7:
            hHour ='일곱';
            break;
        case 8:
            hHour ='여덟';
            break;
        case 9:
            hHour ='아홉';
            break;
        case 10:
            hHour ='열';
            break;
        case 11:
            hHour ='열한';
            break;
    }
    return hHour;
})

Vue.filter('minorsec2hangul', function(pMinOrSec) {
    const targetNum = pMinOrSec%60;
    const quotient = Math.floor(targetNum / 10);
    const remainder = targetNum % 10;
    let quotientValue = '';
    switch (quotient) {
        case 0:
            quotientValue ='';
            break;
        case 1:
            quotientValue ='십';
            break;
        case 2:
            quotientValue ='이십';
            break;
        case 3:
            quotientValue ='삼십';
            break;
        case 4:
            quotientValue ='사십';
            break;
        case 5:
            quotientValue ='오십';
            break;
    }
    let remainderValue = '';
    switch (remainder) {
        case 0:
            remainderValue ='';
            break;
        case 1:
            remainderValue ='일';
            break;
        case 2:
            remainderValue ='이';
            break;
        case 3:
            remainderValue ='삼';
            break;
        case 4:
            remainderValue ='사';
            break;
        case 5:
            remainderValue ='오';
            break;
        case 6:
            remainderValue ='육';
            break;
        case 7:
            remainderValue ='칠';
            break;
        case 8:
            remainderValue ='팔';
            break;
        case 9:
            remainderValue ='구';
            break;
        case 10:
            remainderValue ='십';
            break;
    }
    if(remainder === 0 && quotient === 0) return '';
    return (quotientValue + remainderValue)
})


new Vue({
    el: '#app',
    render: h => h(App)
})