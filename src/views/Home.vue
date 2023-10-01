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
}
}

</script>
