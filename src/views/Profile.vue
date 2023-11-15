<template>
  <div class="profile">
    <h2>User Profile</h2>
    <div class="user-info-card">
      <img :src="user.profile_image" alt="Profile Image" class="profile-image" />
      <div class="user-details">
        <h3>{{ user.name }}</h3>
        <p>Username: {{ user.username }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Role: {{ user.role }}</p>
      </div>
    </div>
    <div class="summary">
      <div class="summary-item">
        <h4>Completed Tasks</h4>
        <p>{{ completedTasks.length }}</p>
      </div>
      <div class="summary-item">
        <h4>Ongoing Projects</h4>
        <p>{{ ongoingProjects.length }}</p>
      </div>
      <div class="summary-item">
        <h4>Total Projects</h4>
        <p>{{ projects.length }}</p>
      </div>
    </div>

  <v-container>
      <v-row>
        <v-col cols="8">
          <sidebar />
        </v-col>
        <v-col cols="12">
          <h1>Projects</h1>
          <v-data-table :headers="headers" :items="projects"></v-data-table>
        </v-col>
      </v-row>
    </v-container>
    <div class="user-tasks">
      <h2>User Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Task no</th>
            <th>Description</th>
            <th>Project</th>
            <th>Priority</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in user.tasks" :key="task.id">
            <td>{{ task.title }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.project.name }}</td>
            <td>{{ task.priority }}</td>
            <td>{{ task.deadline }}</td>
            <td>{{task.pending}}</td>
          </tr>
        </tbody>
      </table>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}, 
      projects: [],
      tasks: [], 
      project: JSON.parse(localStorage.getItem("projects")) || [], 
      headers: [
        { text: "Project Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "Deadline", value: "deadline" },
        { text: "Team Lead", value: "team" },
      ],
      addProjectDialog: false,
      newProject: {
        name: "",
        description: "",
        deadline: "",
        team: "",
      },
    };
  },
  computed: {

    completedTasks() {
      return this.tasks.filter(task => task.status === 'completed');
    },

    ongoingProjects() {
      return this.projects.filter(project => !project.is_completed);
    },
  },
  methods: {
    fetchData() {
      
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.summary {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.summary-item {
  text-align: center;
  padding: 20px;
  border: 1px solid#ffe2e2;
  border-radius: 8px;
  background-color: #ffe2e2;;
}
.table-container {
  margin-top: 20px;
  background-color: #d0fcff;
  fill: #d0fcff;
  color: #d0fcff;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: #d0fcff;
  fill: #d0fcff;
}

th, td {
  border: 1px solid #a3f9ff;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
