<template>
<div class="task-grid">
    <template v-if="tasks.length">
        <Task v-for="(task,i) in tasks" :key="task.name"
        @taskDeleted="$emit('taskDeleted',i)"
        @taskStateChanged="$emit('taskStateChanged',i)"
        :task="task"></Task>
        <!--usar para no caso de passar por eventos         
            <Task v-for="task in tasks" :key="task.name"
         @taskDeleted="$emit('taskDeleted', $event)" -->
    </template>
    <p v-else class="no-task">Sua vida está em DIAS!!!</p>
</div>
</template>

<script>
import Task from './Task.vue'
export default {
    components: {Task},
    props:{
        tasks: {type: Array, required: false}
    }
}
</script>

<style>
    .task-grid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task{
        margin: 10px;
    }

    .no-task{
        color: #AAA;
        font-size: 1.7rem;
    }

    @media (max-width: 600px){
    .no-task{
        font-size: 1.2rem;
    }
    }
</style>