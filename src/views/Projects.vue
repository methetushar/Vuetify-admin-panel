<template>
  <div class="Projects">
       <v-container>
      <v-row>
        <v-col cols="4">
          <!-- Your Sidebar Component -->
          <sidebar />
        </v-col>
        <v-col cols="11">
          <h1>Projects</h1>
          <!-- "Add Project" button -->
          <v-btn class="add-project-button" @click="addProjectDialog = true">Add Project</v-btn>
          <!-- Table to display projects -->
          <v-data-table :headers="headers" :items="projects"></v-data-table>
        </v-col>
      </v-row>
    </v-container>

    <!-- Dialog for adding a new project -->
    <v-dialog v-model="addProjectDialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="dialog-title">Add Project</span>
          <v-btn class="close-button" icon @click="addProjectDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="saveProject">
            <v-text-field v-model="newProject.name" label="Project Name"></v-text-field>
            <v-text-field v-model="newProject.description" label="Description"></v-text-field>
            <v-text-field v-model="newProject.deadline" label="Deadline"></v-text-field>
            <v-text-field v-model="newProject.team" label="Team Lead"></v-text-field>
            <v-btn type="submit" color="primary">Save</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Snackbar for success message -->
    <v-snackbar v-model="showSuccessSnackbar" color="success" top>
      Project added successfully!
    </v-snackbar>
    
    <!-- Snackbar for error message -->
    <v-snackbar v-model="showErrorSnackbar" color="error">
      Please fill in all required fields.
    </v-snackbar>
     <apexchart  type="bar" :options="chartOptions" :series="chartData" />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "Projects",
   components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      showSuccessSnackbar: false,
      showErrorSnackbar: false,
      projects: JSON.parse(localStorage.getItem("projects")) || [], // Initialize from localStorage or as an empty array
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
       chartOptions: {
        chart: {
          type: "bar",
        },
        xaxis: {
          categories: ["Project 1", "Project 2", "Project 3"],
        },
      },
      chartData: [
        {
          name: "Deadlines",
          data: [10, 15, 5],
        },
      ],
    };
  },
  methods: {
    saveProject() {
      if (!this.newProject.name || !this.newProject.description || !this.newProject.deadline || !this.newProject.team) {
        this.showErrorSnackbar = true;
      } else {
        this.projects.push({ ...this.newProject });
        localStorage.setItem("projects", JSON.stringify(this.projects));
        this.newProject = {
          name: "",
          description: "",
          deadline: "",
          team: "",
        };
        this.addProjectDialog = false;
        this.showSuccessSnackbar = true;
      }
    },
  },

};
</script>
<style scoped>
.Projects {
  background-color: #f2f2f2;
}

.add-project-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #3d9423;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
}

.add-project-button:hover {
  background-color: #1daf6b;
}

.dialog-title {
  font-size: 24px;
  font-weight: bold;
  color: #3d9423;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.v-data-table {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.v-data-table-header th {
  background-color: #3d9423;
  color: #fff;
}

.show-success-snackbar {
  background-color: #4caf50;
}

.show-error-snackbar {
  background-color: #f44336;
}
</style>