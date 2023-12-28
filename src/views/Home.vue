<template>
<v-container class="d-flex ">
    <v-row class="d-flex justify-space-evenly">
    <v-card class=" d-flex align-center justify-center v-col-auto"  width="45%" >
            <canvas id="mychart1"></canvas>
    </v-card>
    <v-card class="d-flex align-center justify-center v-col-auto"  width="45%">
            <canvas id="other2"></canvas>
    </v-card>
    </v-row>
</v-container>

  <v-col cols="12">
    <v-autocomplete
     v-model="friends"
      :disabled="isUpdating"
      :items="people"
      :chips="true"
      closable-chips
      color="blue-grey-lighten-2"
      item-title="errorCodes"
      item-value="name"
      label="Select"
      return-object
      :multiple="true"
    >
      <template v-slot:chip="{ props, item }">
        <v-chip
          v-bind="props"
          :text="item.raw.name"
        ></v-chip>
      </template>

      <template v-slot:item="{ props, item }">
        <v-list-item
          v-bind="props"
          :title="item?.raw?.errorCodes"
        ></v-list-item>
      </template>
    </v-autocomplete>
    <v-col cols="12">
        <v-combobox
                v-model="select"

                :chips="true"
                closable-chips
                color="blue-grey-lighten-2"
                item-title="errorCodes"
                item-value="name"
                label="Select"
                return-object
                :multiple="true"
                @change="getUpdatedValue"
        ></v-combobox>
    </v-col>
    <v-btn @click="consoleloge">asd</v-btn>
  </v-col>
</template>
<script>
import Chart from "chart.js/auto"

export default{
name: "Home",
mounted(){
    new Chart(mychart1, {
    type: 'pie',
    data: {
        labels: ['red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
            'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,



        }]
    },
    options: {
        responsive: false,
        plugins: {
        legend: {
          position: 'right',
          }

        }
    }
}),
 new Chart(other2, {
    type: 'pie',
    data: {
        labels: ['red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '#',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
            'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,



        }]
    },
    options: {
        onClick: (e) => {
            const move = Chart.call(router.push(data.labels.link));
        },
            responsive: false,
            plugins: {
        legend: {
          position: 'right',
          labels:{
          }
          }

        }
    }
});
},
data() {
  return {
      autoUpdate: true,
    select: [
      {
        errorCodes: 'asdasdasd1',
        asdasd: '',
        asdasd2: ''
      },
      {
        errorCodes: 'asdasdasd8',
        asdasd: '',
        asdasd2: ''
      }
    ],
      friends: [
        {
          errorCodes: 'asdasdasd1',
          asdasd: ''
        },
        {
          errorCodes: 'asdasdasd8',
          asdasd: ''
        }
      ],
      isUpdating: false,
      name: 'Midnight Crew',
      people: [
        // TODO: https://github.com/vuetifyjs/vuetify/issues/15721
        // { header: 'Group 1' },
        {
          errorCodes: 'asdasdasd1',
          asdasd: ''
        },
        {
          errorCodes: 'asdasdasd2',
          asdasd: ''
        },
        {
          errorCodes: 'asdasdasd3',
          asdasd: ''
        },
        {
          errorCodes: 'asdasdasd4',
          asdasd: ''
        },
        {
          errorCodes: 'asdasdasd5',
          asdasd: ''
        },
        {
          errorCodes: 'asdasdasd6',
          asdasd: ''
        },
        {
          errorCodes: 'asdasdasd7',
          asdasd: ''
        },
        {
          errorCodes: 'asdasdasd8',
          asdasd: ''
        }
      ],
      title: 'The summer breeze',
      timeout: null,
    }
},
  methods: {
      getUpdatedValue() {
          this.select.map(item => {
                  const newObj = {
                      errorCodes: item,
                      asdasd: '',
                      asdasd2: ''
                  };
                  item = newObj
                  this.select.push(newObj);
              return item;
          })
          console.log(this.select);
      },
    consoleloge() {
      console.log(this.select)
    }
  //
  }
}

</script>
