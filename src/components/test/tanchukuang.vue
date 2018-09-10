<template>
	<div class="rate">
		<div class="add" >
			<!-- 添加按钮 -->
			<el-tooltip content="添加汇率" placement="right" effect="light" class="addBtn">
				<i class="el-icon-circle-plus" @click="addButton" title=""></i>
			</el-tooltip>
			<!-- 搜索区域 -->
			<el-form :inline="true" ref="searchForm" :model="searchForm" label-width="80px" class="select">
				<el-form-item label="日期：">
					<el-date-picker
						class="selectDate"
						v-model="searchForm.date"
						@change="selectDateChange"
						style="width:75%;"
						type="month"
						value-format="yyyy/MM"
						format="yyyy/MM"
						:editable='false'
						:clearable="true"
						placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
			</el-form>
		</div>
		<!-- 表格 -->
		<table class="mytable rateList">
			<thead>
				<tr>
					<th>时间</th>
					<th>源币种</th>
					<th>目的</th>
					<th>汇率</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in rateList" :key="item.rateId" @click="rateId=item.rateId">
					<td>{{item.date}}</td>
					<td>{{item.source}}</td>
					<td>{{item.target}}</td>
					<td>{{item.rate}}</td>
					<td class="text-center">
						<i class="el-icon-edit" @click="editRateData(item)"></i>
						<i class="el-icon-delete"  @click="delRateData(item)" style="margin-left:10px;"></i>
					</td>
				</tr>
				<tr v-if="!rateList.length">
					<td colspan="6" class="noRecord"><span>&nbsp;No data</span></td>
				</tr>
			</tbody>
		</table>
		<!-- 弹出层 -->
		<el-dialog
			:title="(rateType=='add'?'添加':'修改')+'汇率'"
			:visible.sync="dialogVisible"
			@close="handleClose"
			width="65%">
			<el-form label-position="right" :rules="rules" label-width="80px" :model="formLabelAlign" ref="formLabelAlign" class="formJustify">
				<el-form-item label="时间" prop="date" style="margin-left:25%;">
					<el-date-picker
						v-model="formLabelAlign.date"
						style="width:55%;"
						type="month"
						:disabled="rateType=='edit'?true:false"
						value-format="yyyy/MM"
						format="yyyy/MM"
						:clearable="true"
						placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="源币种" prop="source" style="margin-left:25%;">
					<el-select v-model="formLabelAlign.source" placeholder="请选择源币种" style="width:55%;">
						<el-option
							v-for="(item, index) in sourceList"
							:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="目的" prop="target" style="margin-left:25%;">
					<el-select v-model="formLabelAlign.target" placeholder="请选择目的" style="width:55%;">
						<el-option
							v-for="(item, index) in targetList"
							:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="汇率" prop="rate" style="margin-left:25%;">
					<el-input v-model="formLabelAlign.rate" placeholder="请输入汇率" style="width:55%;"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button size="mini" @click="dialogVisible=false">取 消</el-button>
				<el-button size="mini" type="primary" @click="submitForm('formLabelAlign')">立即{{ (rateType=='add'?'添加':'修改') }}</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'rate',
		created() {
			this.reqSourceList();
			// this.getTableList();
		},
		mounted() {
			this.getTableList();
		},
		data() {
			return {
				// 搜索区域数据
 				searchForm:{
					date: '',
				},
				// 弹出层类型
				rateType: 'add',
				// 表格绑定数据
				rateList: [],
				// 表单绑定数据
				formLabelAlign: {
          date: '',
          source: '',
          target: '',
					rate: ''
        },
				// 表单规则
				rules: {
					date: [
						{ required: true, message: '请选择日期', trigger: 'change' }
					],
					source: [
						{ required: true, message: '请选择源币种', trigger: 'change' }
					],
					target: [
						{ required: true, message: '请选择目的', trigger: 'change' }
					],
					rate: [
						{ required: true, message: '请输入汇率', trigger: 'blur' },
					]
				},
				// 源币种列表
				sourceList: [],
				// 目的列表
				targetList: [],
				// 弹出层默认不弹出
				dialogVisible:false,
			}
		},
		methods: {
			// 搜索接口请求
			getTableList() {
				let obj = {
					date: this.searchForm.date
				}
				// const obj = this.searchForm;
				// let obj = myobj || Object.assign({},this.searchForm);
				// obj.date = this.$moment(new Date(obj.date)).format('YYYY-MM');
				console.log('刚弄的',obj);
				this.$http.post('/api/setting/exchangerate/list', obj)
				.then((res)=>{
					let data =  res.data;
					if(data) {
						if(data.code=="SUCCESS"){
							this.rateList = res.data.data;
							console.log(res.data.data);
							/* 通过提示显示数据刷新 */
// 							this.$message({
// 								type:data.data.length?'success':'warning',
// 								message:data.data.length?'查询成功':'no data'
// 							});
						}
					}
				}).catch((err)=>{
					this.$message.error('请求错误');
				})
			},
			// 搜索状态改变请求
			selectDateChange() {
				// this.rateList = [];
				this.getTableList();
			},
			// 清空弹出层表单
			resetFormData() {
				for(let key in this.formLabelAlign ) {
					this.formLabelAlign[key] = '';
				}
			},
			// 添加按钮
			addButton() {
				this.rateType = 'add';
				this.resetFormData();
				this.dialogVisible = true;
			},
			// 修改按钮
			editRateData(item) {
				this.rateType = 'edit';
				this.resetFormData();
				this.dialogVisible = true;
				this.formLabelAlign = item;
			},
			// 删除按钮
			delRateData(item) {
				this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let obj = {
						rateId:item.rateId,
					}
					console.log(obj);
					this.$http.post('/api/setting/exchangerate/del', obj).then((res)=>{
						// console.log(res);
						if(res.data) {
							this.$message({
								type:res.data.code=='SUCCESS'?'success':'warning',
								message:res.data.returnMessage
							});
							if(res.data.code=="SUCCESS"){
								this.getTableList();
							}
						}
					}).catch((err)=>{
						this.$message.error('请求错误');
					})
				}).catch(() => {
					console.log("取消删除")
				});
			},
			// 表单选项列表接口请求
			reqSourceList() {
				this.$http.get('/api/common/currency/list')
					.then((res)=>{
						if(res.data) {
								this.sourceList = res.data.data;
								this.targetList = res.data.data;
						}
					})
			},
			// 添加表单步骤
			submitForm(formdata) {
				this.$refs[formdata].validate((valid) => {
					if(valid) {
						if(this.rateType=='add'){
							this.addData();
						}else{
							this.editData();
						}
					}
				})
			},
			// 添加数据处理接口请求
			addData() {
				const obj = this.formLabelAlign;
				this.$http.post('/api/setting/exchangerate/save', obj)
					.then((res) => {
						console.log(res);
						if(res.data) {
							this.$message({
								type:res.data.code=='SUCCESS'?'success':'warning',
								message:res.data.returnMessage
							});
							if(res.data.code=="SUCCESS"){
								this.getTableList();
								this.dialogVisible = false;
							}
						}
					})
			},
			// 修改数据处理接口请求
			editData(){
				const obj = this.formLabelAlign;
				this.$http.post('/api/setting/exchangerate/update',obj)
				.then((res)=>{
					if(res.data) {
						this.$message({
							type:res.data.code=='SUCCESS'?'success':'warning',
							message:res.data.returnMessage
						});
						if(res.data.code=="SUCCESS"){
							this.getTableList();
							this.dialogVisible = false;
						}
					}
				}).catch((err)=>{
					this.$message.error('请求错误');
				})
			},
			// 处理弹出层关闭
			handleClose() {
				console.log('关闭了');
				this.resetFormData();
				this.getTableList();
			}
		},
	}
</script>

<style scoped lang="scss">
.rate{
	min-height:calc(100vh - 150px);
	.rateList{
		width:97%;
		margin:0px 0px 10px 20px;
	}
	.mypagination{
		margin-left:20%;
	}
}
.add{
	// margin-left:20px;
	margin: 0 0 10px 20px;
	padding-top: 10px;
}
.add .addBtn {
	float: left;
	margin-top: 10px;
}
.add .select {
	margin-left: 50px;
}
// .add .selectDate {
//
// }
</style>
