<template>
    <div id="app">
<!--         登陆注册页面-->
        <background :ball_color="ball_color" :bg_color="bg_color"></background>
        
        <card></card><!-- 登陆注册卡片 -->
    </div>
</template>
<script>
    import background from "../../components/background";
    import card from "./components/card";
    export default {
    	name:"app",
        data(){
    		return{
			    ball_color:{//小球颜色
				    r: 64,
				    g: 158,
				    b: 255
			    },
			    bg_color:"rgba(236, 245, 255,0.3)",//背景颜色
            }
        },
        components:{
            background,
            card
        }
    }
</script>

<style lang="less">

</style>
