<template>
    <div class="login">
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="80px"
                 class="demo-ruleForm"
        >
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
	export default {
		name: "login",
        data() {
	        let validatePass = (rule, value, callback) => {
		        let reg1 = /[0-9]+/ //数字字母下划线
		        let reg2 = /[,\.?~`!@#$%^&*(){}\[\]\-+/|\\]+///特殊字符
		        let reg3 = /[A-z]+/
		        let reg4 = /.{6,16}/
		        let bool = reg4.test(this.ruleForm.password)&&reg1.test(this.ruleForm.password)&&reg2.test(this.ruleForm.password)&&reg3.test(this.ruleForm.password);
		        if (!bool) {
			        callback(new Error('密码包含数字字母及特殊字符长度6~16位'));
		        } else {
			        callback();
		        }
	        };
			return {
				ruleForm: {
					username: '',
					password: '',
				},
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'change' },
						{ validator:validatePass,trigger: 'change'}
					]}
			};
		},
        methods:{
	        submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
			        if (valid) {
				        alert('submit!');
			        } else {
				        console.log('error submit!!');
				        return false;
			        }
		        });
	        },
        }
	}
</script>

<style scoped lang="less">
    .login{
        margin-top: 20px;
    }
</style>