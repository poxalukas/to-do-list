import Vue from "vue";
export default new Vue({
    methods:{
        taskDelet(task){
            this.$emit('taskDelete',task)
        },
        howTaskDelete(callback){
            this.$on('taskDeleted',callback)
        }
    }
})