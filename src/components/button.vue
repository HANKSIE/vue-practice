<template>
    <button :class="className" :style="inlineStyle" @mousedown="down" @mouseup="up" @mouseleave="up">{{setting.text}}</button>
</template>
<script>
export default {
    props: ['setting'],
    data: function () {
        return {
            className: [],
            style: {
                pressRed: 'btn-red-press',
                pressGreen: 'btn-green-press',
            },
            inlineStyle:{},
        };
    },
    methods: {

        down: function(){
            this.setting.event();
            this.inlineStyle = {boxShadow: 'none'};
        },

        up: function(){
            this.inlineStyle = {};
        },

    },
    created: function(){
        switch(this.setting.type){
            case 'green':
                this.className.push('btn-green');
                break;
            case 'red':
                this.className.push('btn-red');
                break;
        }
    },
}
</script>
<style lang="scss" scoped>

@mixin btn($bg: #ffffff, $fc: #222222){
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 10px;
    background-color: $bg;
    color: $fc;
    box-shadow: 0 5px 0 darken($bg, 15%);
}

$green:#2c8a31;
$red: #d85241;

.btn-green {
    @include btn($green, #ffffff);
}

.btn-red {
    @include btn($red, #ffffff);
}
</style>
