<template>
    <div id="app">
<!--            index.html 所有人最开始进去看到的都是我的博客首页-&#45;&#45;首页-->
<!--            在首页可以登陆注册就跳转到他自己的页面-->

<!--            只有我是超级管理员-->

<!--            进入首页默认获取我的博客数据，用户登陆显示用户的数据-->
        <el-row>
            <el-col
                    style="background-color:#fff;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 30px 30px;"
                    :xs="{span:24,offset:0}"
                    :sm="{span:22,offset:1}"
                    :md="{span:20,offset:2}"
                    :lg="{span:20,offset:2}"
                    :xl="{span:20,offset:2}"
            >
                <el-row>
                    <c_title></c_title>
                </el-row>
                <el-row >
                    <el-col
                            :md="{span:18}"
                            :lg="{span:18}"
                            :xl="{span:18}"
                    >
                        <router-view></router-view>
                    </el-col>
                    <el-col
                            :md="{span:6}"
                            :lg="{span:6}"
                            :xl="{span:6}"
                    >
                        <c_side></c_side>
                    </el-col>
                </el-row>
                <el-row>
                    <c_footer></c_footer>
                </el-row>
            </el-col>
        </el-row>
        
    </div>
</template>
<script>
    import c_side from "./components/side";
    import c_con from "./components/content";
    import c_title from "./components/title";
    import c_footer from "./components/footer";
    export default {
    	name:"app",
        data(){
    		return{
    			
            }
        },
        components:{
	        c_side,
	        c_con,
	        c_title,
	        c_footer
        }
    }
</script>
<style lang="less">
    body,html{
        margin: 0 ;
        padding: 0;
    }
    body{
        padding: 50px 0;
        background-color: #eee;
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .el-calendar__header{
        font-size: 12px;
        padding: 12px 15px !important;
    }
    .el-button-group{
        display: flex;
        
    }
    .el-calendar-table .el-calendar-day{
        height: 35px !important;
        text-align: center !important;
    }
</style>
