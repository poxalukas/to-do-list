<template>
	<div id="app">
		<h1>Tarefas</h1>
		<task-progress :progress="progress"></task-progress>
		<NewTask @taskAdded="addTask"/>
		<TaskGrid :tasks="tasks"
		@taskDeleted="deletedTask"
		@taskStateChanged="tooggleTaskState"/>
		<footer>
		<button v-if="tamanhoTask()" class="btn-del" @click="deleteAll">Deletar todas as Tarefas</button>
		</footer>
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue'
import NewTask from './components/NewTask.vue'
import TaskProgress from './components/TaskProgress.vue'
export default{
	components:{TaskGrid, NewTask, TaskProgress},
data(){
	return{
		tasks: []
	}
},
computed: {
	progress(){
		const total=this.tasks.length
		const done=this.tasks.filter(t => !t.pending).length
		return Math.round(done/total *100) ||0

	}
}, watch:{
	tasks:{
		deep: true,
		handler(){
			localStorage.setItem('tasks',JSON.stringify(this.tasks))
		}
	}
},
methods:{
	addTask(task){
		const sameName = t => t.name === task.name
		const reallyNew = this.tasks.filter(sameName).length==0
		reallyNew && this.tasks.push({
			name: task.name,
			pending:task.pending || true
		})
	},
	tamanhoTask(){
		if(this.tasks.length>1){
			return true
		}
	},
	deletedTask(i){
		this.tasks.splice(i,1)
		// caso passe por eventos, essa é a funçao
		// deletedTask(task){
		// 	cosnt i= this.tasks.indexOf(task)
		// 	if(i>=0) this.tasks.slice(i,1)
		// }
	},
	deleteAll(){
			var r=confirm("Voce deseja apagar todas as tarefas?");
			if (r==true){
					this.tasks=[]
			}	

		},
	tooggleTaskState(i){
		this.tasks[i].pending= !this.tasks[i].pending
	}
},
created(){
	const json=localStorage.getItem('tasks')
	const array=JSON.parse(json)
	this.tasks=Array.isArray(array) ? array : []
}
}
</script>
<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		position: relative;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
	.task-grid{
		margin-bottom: 50px;
	}
	footer{
		display: flex;
		justify-content: center;
		bottom: 0;
		width: 100%;

	}
	.btn-del{
		background: #B73229;
		color: white;
		height: 30px;
		margin: 1px solid #B73229;
		cursor: pointer;
		border-radius: 10px;
		align-content: center;
		justify-content: center;
		position:absolute;
	}
	@media (max-width: 600px){
	#app h1 {
		margin-bottom: 10px;
		font-weight: 300;
		font-size: 2rem;
	}
    }
</style>
