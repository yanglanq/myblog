<template>
    <div id="side">
<!--        这里面是导航菜单-->
<!--        搜索-->
        <search></search>
<!--        日历控件-->
        <el-calendar v-model="date">
        </el-calendar>
<!--        热门文章-->
        <div class="hot">
            <div class="hotTitle">
                热门文章
            </div>
            <div class="hotList">
                <ul>
                    <li
                            v-for="(item,index) in hotList" :key="index"
                    >
                        <span v-if="index==0">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-diyi"></use>
                            </svg>
                        </span>
                        <span v-else-if="index==1">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-dier"></use>
                            </svg>
                        </span>
                        <span v-else-if="index==2">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-third"></use>
                            </svg>
                        </span>
                        <span v-else>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-remen_main"></use>
                            </svg>
                        </span>
                        <a href="item.url">
                            <span>{{item.title}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import search from "../../../components/search";
	export default {
		name:"side",
        components:{
			search
        },
        data(){
			return{
				date:new Date(),
                hotList:[
                    {
                    	url:"q3tnatn4m4",
                        title:"文章名称"
                    },
	                {
		                url:"q3tnatn4m4",
		                title:"文章名称"
	                },{
		                url:"q3tnatn4m4",
		                title:"文章名称"
	                },{
		                url:"q3tnatn4m4",
		                title:"文章名称"
	                },{
		                url:"q3tnatn4m4",
		                title:"文章名称"
	                },{
		                url:"q3tnatn4m4",
		                title:"文章名称"
	                },{
		                url:"q3tnatn4m4",
		                title:"文章名称"
	                },{
		                url:"q3tnatn4m4",
		                title:"文章名称"
	                },
                ]
            }
        }
	}
</script>

<style scoped lang="less">
    #side{
        padding: 30px 0;
        .hotTitle{
            font-size: 14px;
            font-weight: bold;
            color: #404040;
        }
        .hotList > ul{
            list-style: none;
            padding: 0!important;
            margin-bottom: 20px;
            > li{
                line-height: 25px;
                .icon{
                    margin-right: 5px;
                }
                a{
                    text-decoration: none;
                    font-size: 14px;
                    color: #666;
                }
                a:visited{
                    color: #0086b3;
                }
            }
        }
    }
</style>