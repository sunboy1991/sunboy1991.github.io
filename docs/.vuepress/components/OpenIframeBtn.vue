<template>
    <a @click="onClick" href="#">{{isRun?'停止':'运行'}}</a>
</template>
<script>
export default {
    props:{
        src:String,
        width:{
            type:Number,
            default:300
        },
        height:{
            type:Number,
            default:300
        }
    },
    data(){
        return {
            isRun:false
        }
    },
    methods:{
        onClick(e){
            e.preventDefault();
            let $p = this.$el.parentElement;
            if(!this.isRun){
                this.div = this.createContent();
                $p.insertBefore(this.div,this.$el);
                this.isRun=true;
            }else{
                this.div&&$p.removeChild(this.div);
                this.div=null;
                this.isRun=false;
            }
        },
        createContent(){
            let div = document.createElement('div')
            let iframe = document.createElement('iframe');
            iframe.src=this.src;
            iframe.height=this.height;
            iframe.width=this.width;
            div.appendChild(iframe);
            return div
        }
    }
}
</script>