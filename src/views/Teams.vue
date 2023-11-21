<template>
  <v-container>
    <!-- Header Section -->
       <v-row justify="center">
      <v-col>
        <v-sheet class="my-4">
          <v-img class="team-image"
           
            alt="Hero Image"
            height="200" 
            contain
          >
            <v-row align="center" justify="center" class="fill-height">
              <v-col>
                <h1 class="text-h2 text-center mb-4">Explore Teams</h1>
                <p class="text-center">Discover and join amazing teams!</p>
              </v-col>
            </v-row>
          </v-img>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- new team creation -->
     <v-btn class="add-team-button" @click="addTeamDialog = true">Create New Team</v-btn>
     <v-dialog v-model="addTeamDialog" max-width="800">
      <v-card>
        <v-card-title>
          <span class="dialog-title">Create New Team</span>
          <v-btn class="close-button" icon @click="addTeamDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="saveProject">
            <v-text-field v-model="newTeam.name" label="Team Name Name"></v-text-field>
            <v-text-field v-model="newTeam.lead" label="Team Lead"></v-text-field>
            <v-text-field v-model="newTeam.Members" label="Members"></v-text-field>
            <v-text-field v-model="newTeam.Pname" label="Project Title"></v-text-field>
            <v-btn type="submit" color="primary">Save</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Search Bar -->
  <v-row justify="center">
    <v-col>
      <v-text-field
        v-model="searchQuery"
        label="Search Teams"
        outlined
        dense
        clearable
        :class="{ 'expanded': isSearchBarExpanded }"
        @click="expandSearchBar"
      ></v-text-field>
    </v-col>
  </v-row>


     <v-snackbar v-model="showSuccessSnackbar" color="success" top>
      Team Registered successfully!
    </v-snackbar>
    
    <!-- Snackbar for error message -->
    <v-snackbar v-model="showErrorSnackbar" color="error">
      Please fill in all required fields.
    </v-snackbar>
    <!-- Team List (Your existing code) -->
  <v-row justify="center">
      <v-col v-for="(team, index) in teams" :key="index" cols="12" sm="6" md="4">
        <v-card class="elevation-10 team-card">
          <v-img :src="team.image" alt="Team Image" height="150" contain></v-img>
          <v-card-title>{{ team.name }}</v-card-title>
          <v-card-text>
            <v-chip>{{ team.project }}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
       isSearchBarExpanded: false,
      searchQuery: '',
      addTeamDialog: false,
      newTeam: {
        name: "",
        lead: "",
        Members: "",
        Pname: "",
      },
       showSuccessSnackbar: false,
      showErrorSnackbar: false,
       teams: [
        {
          name: 'Team A',
          lead: 'Fasih Ur Rehman',
          Members: ['Maaz', 'Fasih', 'Abdullah'],
          Pname: 'AHC',
        },
         {
          name: 'Team B',
          lead: 'Tabbasum',
          Members: ['Maaz', 'Abdullah', 'Tabbasum', 'Zasheer'],
          Pname: 'Booking.com',
        },
         {
          name: 'Team C',
          lead: 'Abdullah',
          Members: ['Abdullah'],
          Pname: 'PMCS',
        },
      ],
      
    };
  },
  methods: {
    expandSearchBar() {
      this.isSearchBarExpanded = !this.isSearchBarExpanded;
    },

    saveProject() {
      if (!this.newTeam.name || !this.newTeam.description || !this.newTeam.deadline || !this.newTeam.team) {
        this.showErrorSnackbar = true;
      } else {
        this.Team.push({ ...this.Team });
        localStorage.setItem("Teams", JSON.stringify(this.teams));
        this.newTeam = {
        name: "",
        lead: "",
        Members: "",
        Pname: "",
        };
        this.addTeamDialog = false;
        this.showSuccessSnackbar = true;
      }
    },
  },
};

</script>

<style scoped>
.team-card {
  margin-top: auto;
  margin: 16px;
  border-radius: 12px; /* Adjust the border-radius as needed */
}
.add-team-button {
  position: absolute;
  top: 32px;
  right: 25px;
  background-color: #3d9423;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
}

.add-team-button:hover {
  background-color: #1daf6b;
}

.team-image {
  background-size: cover;
  height: 100%;
  width: 100%;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
.expanded input {
  width: 200px; 
  transition: width 0.3s ease-in-out; 
}

/* Add custom styles as needed */
</style>
