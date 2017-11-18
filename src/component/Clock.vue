<template>
    <div id="clock">
        <div id="ampm">
            <span v-show="ampm == 0">오전</span>
            <span v-show="ampm == 1">오후</span>
        </div>
        <div id="time">
            <span>{{ hour | hour2hangul }}시</span><br />
            <span>{{ min | minorsec2hangul }}분</span><br />
            <span>{{ sec | minorsec2hangul }}초</span><br />
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
export default {
    name: 'clock',
    data () {
        return {
            ampm: 0,
            hour: 0,
            min: 0,
            sec: 0
        }
    },
    created () {
        this.setTime()
    },
    methods: {
        setTime: function () {
            const currentDate = new Date()
            this.hour = currentDate.getHours()
            this.min = currentDate.getMinutes()
            this.sec =  currentDate.getSeconds()

            if(this.hour >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
                this.ampm = 1
                this.hour = this.hour - 12;
            } else {
                this.ampm = 0
            }

            setTimeout(this.setTime,1000);
        }
    }
}
</script>

<style scoped>
    @import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);

    #clock {
        border:1px solid #dedede;
        width:800px;
        height: 300px;
        color: #dedede;
        font-size:80px;
        margin: 100px auto;
        font-family: 'Jeju Gothic', serif;
    }

    #ampm {
        width: 200px;
        height: 300px;
        float: left;
        line-height: 300px;
        text-align:center;
        font-family: 'Jeju Gothic', serif;
    }

    #time {
        width: 600px;
        height: 300px;
        margin-top: 10px;
        float: left;
        text-align:right;
        font-family: 'Jeju Gothic', serif;
    }
</style>