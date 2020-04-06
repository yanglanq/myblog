<template>
    <div id="search">
        <input type="text" placeholder="Search" v-model="mes">
        <div>
            <i class="el-icon-search"></i>
        </div>
    </div>
</template>

<script>
	export default {
		name: "search",
        data(){
			return{
				mes:""
            }
        }
	}
</script>

<style scoped lang="less">
    #search{
        position: relative;
        color: #666;
        margin-bottom: 20px;
        input{
            display: inline-block;
            box-sizing: border-box;
            padding: 10px;
            height: 30px;
            width: 180px;
            border-radius: 30px;
            border:1px solid #404040;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
        }
        input:focus{
            border:1px solid #0086b3;
            outline: none;
        }
        input:focus + div{
            color: #0086b3;
        }
        > div{
            position: absolute;
            display: inline-block;
            left: 155px;
            top: 4px;
            cursor: pointer;
        }
    }
</style>