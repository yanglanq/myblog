<template>
    <div id="title">
        <div class="title">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-ziyuan"></use>
            </svg>
            雨歇微凉的个人博客
        </div>
        
        <div class="des">
            <span>这是一个关注代码学习的个人博客，提供一些在学习过程中的总结经验</span>
        </div>
    </div>
</template>

<script>
	export default {
	
	}
</script>

<style scoped lang="less">
    @media only screen and (min-width: 320px){
        .title{
            text-align: center;
            font-size: 25px;
            letter-spacing: 3px;
        }
        .des{
            
            text-align: center;
        }
    }
    @media only screen and (min-width: 992px){
        .title{
            text-align: left;
            font-size: 30px;
            letter-spacing: 5px;
        }
        .des{
            text-align: left;
        }
    }
    #title{
        padding-bottom: 10px;
        border-bottom:1px solid #dcdfe6;
        .title{
            color: #555;
        }
        .des{
            padding: 10px 0;
            font-size: 14px;
            line-height: 20px;
            color: #424242;
        }
    }
    
    
</style>