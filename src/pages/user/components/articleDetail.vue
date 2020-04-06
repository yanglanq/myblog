<template>
    <div id="articleDetail">
        文章具体内容
    </div>
</template>

<script>
	export default {
		name: "articleDetail",
        data(){
			return{
				id:this.$route.params.id,
                aiticleDetail:{
					
                }
            }
        },
        created() {
			// 通过id获取文章内容
        }
	}
</script>

<style scoped>

</style>