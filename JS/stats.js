let newCases=[];
let dates=[];
 

 function fetchUser() {

    fetch('https://corona-api.com/countries/TN')
    .then(response => response.json())
    .then(data => data.data)
	.then(generateHTML)
	.catch(err => {
		console.log(new Error(err));
		gallery.innerHTML = '<h3>Please wait for our server to update the daily data !</h3>';
	});
}
fetchUser();

function generateHTML(data) {
	
	
	data.timeline.map( (user,index) =>{
	
	if(index % 2 ===0){
		newCases.unshift(user.new_confirmed);
    dates.push('Day '+parseInt(index+1));
    
	}
		
		});	}	 
          console.log(newCases);
          let myChart = document.getElementById('myChart').getContext('2d');
         

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = '#777';

const data =newCases;
console.log(data);
const labels=dates;
console.log(labels);

let chartTN={
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels,
        datasets:[{
          label:'new Cases',
          data
         ,
         backgroundColor:
          '#5fcf80'
                ,
          borderWidth:2,
          borderColor:'#777',
          hoverBorderWidth:2,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Statistiques quotidiennes de Covid-19 en Tunisie  ',
          fontSize:15,
         
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    }
    


    let massPopChart = new Chart(myChart, chartTN);
   