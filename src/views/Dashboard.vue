<template>
  <div class="dashboard">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h3 class="dashboard-title">Dashboard</h3>
      <v-btn color="success" class="view-projects-btn">
        View Projects
      </v-btn>
    </v-subheader>
    <br>
    <v-row>
      <v-col lg="7" cols="12">
        <v-alert dense text type="success" class="success-alert">
          Login Successfully! Welcome to <strong>PMCS</strong>
        </v-alert>
        <v-row>
          <v-col lg="6" cols="12" v-for="(item, index) in activityLog" :key="index">
            <v-card elevation="2" class="rounded-lg activity-card " >
              <v-card-text class="d-flex justify-space-between align-center">
                <div>
                  <strong>{{ item.title }}</strong> <br>
                  <span>Last 3 weeks</span>
                </div>
                <v-avatar size="60" :color="item.color" style="border: 3px solid #444" class="activity-avatar">
                  <span>{{ item.amount }} +</span>
                </v-avatar>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between">
                <!-- Add any actions here if needed -->
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="5">
        <v-card class="tasks-card">
          <v-card-title class="tasks-title">Tasks</v-card-title>
          <v-card-text class="py-0">
            <v-timeline align-top dense>
              <v-timeline-item 
               small>
                <strong>5 Minutes ago</strong>
                <div class="text-caption">
                  You have a new task, please check it out.
                </div>
              </v-timeline-item>
              <v-timeline-item color="green" small>
                <strong>35 Minutes ago</strong>
                <div class="text-caption mb-2">
                  Task has been completed!
                </div>
              </v-timeline-item>
              <v-timeline-item color="deep-orange darken-1" small>
                <strong>44 Minutes ago</strong>
                <div class="text-caption">
                  You have a new pending task, please check it out.
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="data-table-card">
          <v-data-table
            caption="Task Details"
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.action="">
              <v-btn color="success" outlined small shaped class="view-button">View</v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      activityLog: [
        { title: 'Total Projects', amount: 50, icon: 'mdi-account', color: 'cyan darken-3' },
        { title: 'Total Tasks', amount: 3433, icon: 'mdi-account-group-outline', color: 'green darken-2' },
        {
          title: 'Pending Tasks',
          amount: 400,
          icon: 'mdi-account-group-outline',
          color: 'red darken-2',
        },
        { title: 'In Process', amount: 3033, icon: 'mdi-account-group-outline', color: 'deep-orange darken-1' },
      ],
      headers: [
        {
          text: 'Tasks',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'No.', value: 'tasks' },
        { text: 'Pending', value: 'pending' },
        { text: 'In Process', value: 'Inprocess' },
        { text: 'Completed', value: 'Completed' },
      ],
      desserts: [
        {
          name: 'User Dashboard',
          tasks: 5,
          pending: 2,
          Inprocess: 3,
          Completed: 0,
        },
        {
          name: 'Crud',
          tasks: 20,
          pending: 12,
          Inprocess: 6,
          Completed: 2,
        },
        {
          name: 'User Authentication',
          tasks: 2,
          pending: 2,
          Inprocess: 0,
          Completed: 0,
        },
        {
          name: 'Routers Missing',
          tasks: 2,
          pending: 2,
          Inprocess: 0,
          Completed: 0,
        },
        {
          name: 'Navbar',
          tasks: 1,
          pending: 1,
          Inprocess: 1,
          Completed: 0,
        },
        {
          name: 'Dashboard Statistics',
          tasks: 12,
          pending: 2,
          Inprocess: 0,
          Completed: 10,
        },
        {
          name: 'Api calls ',
          tasks: 30,
          pending: 30,
          Inprocess: 0,
          Completed: 0,
        },
        {
          name: 'Chat System',
          tasks: 1,
          pending: 1,
          Inprocess: 0,
          Completed: 0,
        },
        {
          name: 'Project Creation Form',
          tasks: 3,
          pending: 1,
          Inprocess: 0,
          Completed: 2,
        },
        {
          name: 'Team Creating Form',
          tasks: 4,
          pending: 4,
          Inprocess: 0,
          Completed: 0,
        },
      ],
    };
  },
  methods: {
    onButtonClick(item) {
      console.log('Click on ' + item.no);
    },
  },
};
</script>

<style scoped>



 .dashboard .v-card {
    background-color: rgb(255, 255, 255); 
    box-shadow: none; 
  }
.data-table-card .table{
   background-color: rgb(234, 255, 223); 
    box-shadow: none;   
}
  .dashboard .v-card-text {
    color: #000; 
  }
  .dashboard-title {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    color: #3d9423;
  } 

  /* View Projects Button */
  /* .view-projects-btn {
    background-color: #28a745;
    color: #fff;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .view-projects-btn:hover {
    background-color: #1daf6b;
  }

  /* Success Alert */
  /* .success-alert {
    background-color: #28a745;
    color: #fff;
    font-weight: 600;
    border-radius: 8px;
    padding: 10px;
  }

  /* Activity Card */
  /* .activity-card {
    margin: 10px 0;
    padding: 10px;
    background-color: #ffd700;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .activity-avatar {
    font-size: 18px;
    font-weight: 600;
    background-color: #ff6d63;
    color: #fff;
    border-radius: 50%;
    padding: 5px;
  } */

  /* Tasks Card */
  /* .tasks-card {
    margin: auto;
    padding: 20px;
    background-color: #73a8ff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    transition: box-shadow 0.3s;
  }

  .tasks-title {
    font-size: 20px;
    font-weight: bold;
  }

  .tasks-card:hover {
    box-shadow: 0 0 20px rgb(234, 255, 223); 
  } */

  /* Data Table Card */
  /* .data-table-card {
    padding: 20px;
    box-shadow: 0 4px 6px rgb(234, 255, 223); 
    border-radius: 8px;
  }

  .view-button {
    color: #fff;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .view-button:hover {
    background-color: #ff4141;
  }  */
</style>
