<template>
    <div id="card">
        <el-row>
            <el-col class="card"
                    :xs="{span:16,offset:4}"
                    :sm="{span:10,offset:7}"
                    :md="{span:8,offset:12}"
                    :lg="{span:7,offset:13}"
                    :xl="{span:7,offset:13}"
            >
                <el-card shadow="always">
                    <el-menu :default-active="activeIndex"
                             class="el-menu-demo" mode="horizontal"
                             router="true"

                    >
                        <el-menu-item index="/login.html/login">登陆</el-menu-item>
                        <el-menu-item index="/login.html/register">注册</el-menu-item>
                    </el-menu>
                    <div class="con">
                        <router-view></router-view>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import login from "./login";
    import register from "./register";
	export default {
		name: "card",
		components:{
			login,
            register
        },
        data(){
			return{
				activeIndex:"/login.html/login"
            }
        }
	}
</script>

<style scoped lang="less">
    #card {
        margin-top: 100px;
        .card {
            background-color: #fff;
            .con{
            }
        }
    }
</style>