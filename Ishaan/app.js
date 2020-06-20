window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://api.covid19india.org/state_district_wise.json ')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		
        let cases = data.Rajasthan.districtData.Jaipur.confirmed; 
        document.getElementById('cases').innerHTML = cases.toLocaleString('en');

        let deaths = data.Rajasthan.districtData.Jaipur.active; 
        document.getElementById('Deaths').innerHTML = deaths.toLocaleString('en');

        let active = data.Rajasthan.districtData.Jaipur.deceased; 
        document.getElementById('active').innerHTML = active.toLocaleString('en');
        
        let recovered = data.Rajasthan.districtData.Jaipur.recovered; 
        document.getElementById('recovered').innerHTML = recovered.toLocaleString('en');
        
        let newCases = data.Rajasthan.districtData.Jaipur.delta.confirmed; 
        document.getElementById('newcases').innerHTML = newCases.toLocaleString('en');
        
        let newdeaths = data.Rajasthan.districtData.Jaipur.delta.deceased; 
        document.getElementById('newDeaths').innerHTML = newdeaths.toLocaleString('en');    
        
        let newrecov = data.Rajasthan.districtData.Jaipur.delta.recovered; 
        document.getElementById('todayrecov').innerHTML = newrecov.toLocaleString('en');    
        
        console.log(data);


	}).catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 5000)
}