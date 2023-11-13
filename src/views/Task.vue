<template>
  <div class="Tasks">
    <h1>Task Management</h1>
    <!-- Project selection dropdown -->
    <v-select
      v-model="selectedProject"
      :items="projectList"
      label="Select Project"
      @change="loadTasks"
    ></v-select>
    <v-data-table :headers="taskHeaders" :items="tasks"></v-data-table>
    <v-dialog v-model="addTaskDialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="dialog-title">Add Task</span>
          <v-btn class="close-button" icon @click="addTaskDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="addTask">
            <v-text-field v-model="newTask.name" label="Task Name" required></v-text-field>
            <v-select
              v-model="newTask.status"
              :items="statusOptions"
              label="Status"
            ></v-select>
            <v-btn type="submit" color="primary">Save</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      projectList: [], 
      selectedProject: "", 
      tasks: [], 
      taskHeaders: [
        { text: "Task Name", value: "name" },
        { text: "Status", value: "status" },

      ],
      addTaskDialog: false,
      newTask: {
        name: "",
        status: "", 

      },
      statusOptions: ["Pending", "In Process", "Completed"], 
    };
  },
 created() {
  this.projectList = this.$route.params.projects || [];
},
  methods: {
    loadTasks() {
      this.tasks = JSON.parse(localStorage.getItem(`task_${this.selectedProject}`)) || [];
    },
    addTask() {
      if (!this.newTask.name || !this.newTask.status) {
        alert("Task name and status are required");
        return;
      }
      this.tasks.push({ ...this.newTask })
      localStorage.setItem(`tasks_${this.selectedProject}`, JSON.stringify(this.tasks));
      this.newTask = {
        name: "",
        status: "",
      };
      this.addTaskDialog = false;
    },
  },
};
</script>
<style scoped>

</style>
