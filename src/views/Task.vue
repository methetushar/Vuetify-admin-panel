<template>
  <div class="Task">
       <v-container>
      <v-row>
        <v-col cols="8">
          <!-- Your Sidebar Component -->
          <sidebar />
        </v-col>
        <v-col cols="12">
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
     
      <div id="chart">
        <apexchart type="rangeBar" height="450" :options="chartOptions" :series="series"></apexchart>
      </div>

        <apexchart type="radialBar" height="390" :options="chartOptions2" :series="series2"></apexchart>
      </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "Task",
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
      series: [
            {
              name: 'Booking.com',
              data: [
                {
                  x: 'Design',
                  y: [
                    new Date('2019-03-05').getTime(),
                    new Date('2019-03-08').getTime()
                  ]
                },
                {
                  x: 'Code',
                  y: [
                    new Date('2019-03-02').getTime(),
                    new Date('2019-03-05').getTime()
                  ]
                },
                {
                  x: 'Code',
                  y: [
                    new Date('2019-03-05').getTime(),
                    new Date('2019-03-07').getTime()
                  ]
                },
                {
                  x: 'Test',
                  y: [
                    new Date('2019-03-03').getTime(),
                    new Date('2019-03-09').getTime()
                  ]
                },
                {
                  x: 'Test',
                  y: [
                    new Date('2019-03-08').getTime(),
                    new Date('2019-03-11').getTime()
                  ]
                },
                {
                  x: 'Validation',
                  y: [
                    new Date('2019-03-11').getTime(),
                    new Date('2019-03-16').getTime()
                  ]
                },
                {
                  x: 'Design',
                  y: [
                    new Date('2019-03-01').getTime(),
                    new Date('2019-03-03').getTime()
                  ],
                }
              ]
            },
            {
              name: 'PMCS',
              data: [
                {
                  x: 'Design',
                  y: [
                    new Date('2019-03-02').getTime(),
                    new Date('2019-03-05').getTime()
                  ]
                },
                {
                  x: 'Test',
                  y: [
                    new Date('2019-03-06').getTime(),
                    new Date('2019-03-16').getTime()
                  ],
                  goals: [
                    {
                      name: 'Break',
                      value: new Date('2019-03-10').getTime(),
                      strokeColor: '#CD2F2A'
                    }
                  ]
                },
                {
                  x: 'Code',
                  y: [
                    new Date('2019-03-03').getTime(),
                    new Date('2019-03-07').getTime()
                  ]
                },
                {
                  x: 'Deployment',
                  y: [
                    new Date('2019-03-20').getTime(),
                    new Date('2019-03-22').getTime()
                  ]
                },
                {
                  x: 'Design',
                  y: [
                    new Date('2019-03-10').getTime(),
                    new Date('2019-03-16').getTime()
                  ]
                }
              ]
            },
            {
              name: 'E-care',
              data: [
                {
                  x: 'Design',
                  y: [
                    new Date('2019-03-02').getTime(),
                    new Date('2019-03-05').getTime()
                  ]
                },
                {
                  x: 'Test',
                  y: [
                    new Date('2019-03-06').getTime(),
                    new Date('2019-03-16').getTime()
                  ],
                  goals: [
                    {
                      name: 'Break',
                      value: new Date('2019-03-10').getTime(),
                      strokeColor: '#CD2F2A'
                    }
                  ]
                },
                {
                  x: 'Code',
                  y: [
                    new Date('2019-03-03').getTime(),
                    new Date('2019-03-07').getTime()
                  ]
                },
                {
                  x: 'Deployment',
                  y: [
                    new Date('2019-03-20').getTime(),
                    new Date('2019-03-22').getTime()
                  ]
                },
                {
                  x: 'Design',
                  y: [
                    new Date('2019-03-10').getTime(),
                    new Date('2019-03-16').getTime()
                  ]
                }
              ]
            },
            {
              name: 'AHC',
              data: [
                {
                  x: 'Code',
                  y: [
                    new Date('2019-03-10').getTime(),
                    new Date('2019-03-17').getTime()
                  ]
                },
                {
                  x: 'Validation',
                  y: [
                    new Date('2019-03-05').getTime(),
                    new Date('2019-03-09').getTime()
                  ],
                  goals: [
                    {
                      name: 'Break',
                      value: new Date('2019-03-07').getTime(),
                      strokeColor: '#CD2F2A'
                    }
                  ]
                },
              ]
            },
           
          ],
          chartOptions: {
            chart: {
              height: 450,
              type: 'rangeBar'
            },
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '80%'
              }
            },
            xaxis: {
              type: 'datetime'
            },
            stroke: {
              width: 1
            },
            fill: {
              type: 'solid',
              opacity: 0.6
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left'
            }
          },
          
          series2: [95, 50, 69, 90],
          chartOptions2: {
            chart: {
              height: 390,
              type: 'radialBar',
            },
            plotOptions2: {
              radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                  margin: 5,
                  size: '30%',
                  background: 'transparent',
                  image: undefined,
                },
                dataLabels2: {
                  name: {
                    show: false,
                  },
                  value: {
                    show: false,
                  }
                }
              }
            },
            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
            labels: ['AHC', 'Booking.com', 'PMCS', 'E-care'],
            legend: {
              show: true,
              floating: true,
              fontSize: '16px',
              position: 'left',
              offsetX: 160,
              offsetY: 15,
              labels: {
                useSeriesColors: true,
              },
              markers: {
                size: 0
              },
              formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              },
              itemMargin: {
                vertical: 3
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                    show: false
                }
              }
            }]
          },
          
      //  chartOptions: {
      //   chart: {
      //     type: "bar",
      //     // height: "50"
      //   },
      //   xaxis: {
      //     categories: ["Project 1", "Project 2", "Project 3"],
      //   },
      // },
      // chartData: [
      //   {
      //     name: "Deadlines",
      //     data: [10, 15, 5],
      //   },
      // ],
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
/* .chart{
  height: 1000px;
  width: 700px;
} */
</style>