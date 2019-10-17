




//using jquery to access api WEBAPI data we can use:
// .ajax, .get



function DataChange(){
    let year = $('#cahnge_form input[name=year]').val();
    let lap = $('#cahnge_form input[name=lap]').val();
    console.log(year)
    console.log(lap)

    $.get('https://ergast.com/api/f1/'+year+'/'+ lap+'/driverStandings.json',function(data){
        for(let i=1; i<8;i++){
        let position =data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position
        $("#position"+i).text(position)
        let name =data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
        let lastname =data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
        $("#name"+i.toString()).text(name+" "+lastname)
        let nationality =data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
        $("#nationality"+i.toString()).text(nationality)
        let sponsor =data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].constructorId
        $("#sponsor"+i.toString()).text(sponsor)
        let points =data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
        $("#points"+i.toString()).text(points)
        console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.permanentNumber)
        }
    })

}   
 




