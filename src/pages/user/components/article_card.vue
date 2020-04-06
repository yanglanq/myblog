<template>
    <div class="article_card">
        <div class="tit"
            @click="jump"
        >
            {{article.title}}
        </div>
        <div class="description">{{article.description}}</div>
        <div>
            <span>发布于：{{article.time}}</span>
            <span>分类：{{article.classify}}</span>
            <span>标签:
                <span v-for="item in article.tag">{{item}}</span>
            </span>
            <span>浏览量：{{article.view}}</span>
        </div>
    </div>
</template>

<script>
	export default {
		name: "article_card",
        data(){
			return{
				route:{
					path: 'register',
                    query: {
						id:this.article.id
					}
                }
            }
        },
        props:{
	        article:{// 该文章信息
	        	type:Object
            }
        },
        created() {
        },
        methods:{
	        jump(){
		        this.$router.push({
			        name:'article',
			        params: {
				        id:this.article.id
			        }
		        })
            }
        }
	}
</script>

<style scoped lang="less">
    .article_card{
        padding: 15px 0;
        border-bottom:1px solid #dcdfe6;
        div.tit{
            display: block;
            text-decoration:none;
            cursor: pointer;
            color: #0086b3;
            font-size: 25px;
            line-height: 40px;
        }
        div.tit:hover{
            color: #06609b;
        }
        .description{
            margin: 10px 0;
            font-size: 14px;
            color: #555;
            line-height: 23px;
        }
        > div > span{
            padding-right: 15px;
            font-size: 14px;
            color: #666;
            > span{
                margin-right: 8px;
            }
        }
    }
</style>