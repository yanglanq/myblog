<template>
    <div id="content">
<!--        文章内容-->
        <article_card
                v-for="(item,index) in currentData" :key="index"
                :article="item"
        ></article_card>
<!--        分页控件-->
        <el-pagination
                style="margin-top: 20px"
                :hide-on-single-page="!value"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="size"
                layout="total, prev, pager, next"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
	import article_card from "./article_card";
	
	export default {
		components: {
			article_card
		},
		data() {
			return {
				articleData: [
					{
						title: "Apache压力测试参数",// 标题
						description: "ab是Apache自带的压力测试工具，它可以模拟各种条件，直接在服务器本地发起各种测试请求。 在命令行工具下输入：ab -V 可以查看ab工具的版本信息如下:",// 描述
						time: "2020-03-28",// 发布时间
						tag: ["压力测试", "Apache"],// 标签
						classify: "服务器",// 分类
                        view:234,
						id:1
					},
					{
						title: "Apache压力测试参数",// 标题
						description: "ab是Apache自带的压力测试工具，它可以模拟各种条件，直接在服务器本地发起各种测试请求。 在命令行工具下输入：ab -V 可以查看ab工具的版本信息如下:",// 描述
						time: "2020-03-28",// 发布时间
						tag: ["压力测试", "Apache"],// 标签
						classify: "服务器",// 分类
                        view: 131,
						id:2
					}
				],
				currentPage:1,// 当前页
                size:8,
                currentData:[]
			}
		},
        created() {
			
			// 向后端获取数据
			
	        this.currentData = this.articleData.slice(0,8);// 第 0-7 条数据
        },
		computed:{
			value:function () {// false 时不显示控件，true 显示
				let b = false;
				if(this.total > this.size){
					return true;
                }
				return b;
			},
            total:function () {
	            return this.articleData.length
            }
        },
        methods:{
	        handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		        this.currentData = this.articleData.slice((val-1)*this.size,val*this.size);
	        }
        }
	}
</script>

<style scoped lang="less">
    #content {
        padding-right: 30px;
        background-color: #fff;
    }
</style>