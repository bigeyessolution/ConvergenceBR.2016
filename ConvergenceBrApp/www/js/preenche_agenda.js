var agenda = {
	"agenda10" : [
		{"salahora": "8:00", "titulo": "Registration Open", "info": "", "divisao": true},
		{"salahora": "8:30", "titulo": "Pre-processing and convergence in CFD: Improving productivity in simulation", "info": "Course 1 - part 1"},
		{"salahora": "8:30", "titulo": "Structural Analysis Pre-processing and Convergence: how to Achieve Simulation Productivity", "info": "Course 2 - part 1"},
		{"salahora": "8:30", "titulo": "Introduction to Acoustic Analysis: Simulation and Tests", "info": "Course 3 - part 1"},
		{"salahora": "8:30", "titulo": "Optimization applied to Engineering: From Single Point Analysis to Parametric Analysis", "info": "Course 4 - part 1"},
		{"salahora": "8:30", "titulo": "Introduction to Computer Simulation: from Modeling to Industry Applications", "info": "Course 5 - part 1"},
		{"salahora": "8:30", "titulo": "Introduction do High Frequency Electromagnetic Simulation: from Modelling to Industry Applications", "info": "Course 6"},
		{"salahora": "12:30", "titulo": "Lunch", "info": "", "divisao": true},
		{"salahora": "13:30", "titulo": "Pre-processing and convergence in CFD: Improving productivity in simulation", "info": "Course 1 - part 2"},
		{"salahora": "13:30", "titulo": "Structural Analysis Pre-processing and Convergence: how to Achieve Simulation Productivity", "info": "Course 2 - part 2"},
		{"salahora": "13:30", "titulo": "Introduction to Acoustic Analysis: Simulation and Tests", "info": "Course 3 - part 2"},
		{"salahora": "13:30", "titulo": "Optimization applied to Engineering: From Single Point Analysis to Parametric Analysis", "info": "Course 4 - part 2"},
		{"salahora": "13:30", "titulo": "Introduction to Computer Simulation: from Modeling to Industry Applications", "info": "Course 5 - part 2"},
		{"salahora": "13:30", "titulo": "Introduction to System Analysis using ANSYS Simplorer", "info": "Course 7"},
		{"salahora": "17:30", "titulo": "Closing", "info": "", "divisao": true}
	],
	"agenda11" : [
		{"salahora": "8:00", "titulo": "Registration Open", "info": "", "divisao": true},
		{"salahora": "8:30 - Room Lorangerie I", "titulo": "ASME Section VIII - Division 2", "info": "Jairo Mola, Unitécnica"},
		{"salahora": "8:30 - Room Lorangerie II", "titulo": "Model Verification for Finite Element Analysis", "info": "Giuseppe Mirlisenna, ESSS"},
		{"salahora": "8:30 - Room Malmaison", "titulo": "Reduced Hydraulic Models Tests", "info": "César Felipe Nardy, Bardella"},
		{"salahora": "9:30", "titulo": "Coffee break", "info": "", "divisao": true},
		{"salahora": "10:20 - Versalles (Plenary session)", "titulo": "Opening", "info": "Clóvis Maliska Jr., ESSS"},
		{"salahora": "10:30 - Versalles (Plenary session)", "titulo": "Simulation for Breakthrough Innovation: Trends, Best Practices & ANSYS Simulation Platform", "info": "Ravi Kumar, ANSYS, Inc."},
		{"salahora": "11:10 - Versalles (Plenary session)", "titulo": "SIRIUS: Brazil at the vanguard of Engineering of Accelerators", "info": "Lucas Sanfelici, LNLS"},
		{"salahora": "11:50 - Versalles (Plenary session)", "titulo": "Design Validation & Decision Making", "info": "Luiz Carlos de Castro Santos, Embraer"},
		{"salahora": "12:30", "titulo": "Lunch", "info": "", "divisao": true},
		
		
		{"salahora": "18:50", "titulo": "Cocktail", "info": "", "divisao": true}
	],
	"agenda12" : [
		{"salahora": "8:00", "titulo": "Registration Open", "info": "", "divisao": true},
	
		{"salahora": "9:50", "titulo": "Coffee break", "info": "", "divisao": true},
				
		{"salahora": "12:30", "titulo": "Lunch", "info": "", "divisao": true},
		
		{"salahora": "16:20", "titulo": "Coffee break", "info": "", "divisao": true},
	
		{"salahora": "17:50", "titulo": "Convergence Best Paper Award / Academic Award", "info": "", "divisao": true}
	]
}

function setAgenda () {
	if (localStorage.agenda) {
		agenda = JSON.parse (localStorage.agenda);
	} else {
		localStorage.agenda = JSON.stringify(agenda);
	}
}

function getAgenda (toPage) {
	function done () {
		$('#' + toPage + ' .ui-be-agenda').listview("refresh");
		
		var lista = agenda[toPage];
		var saida = '';
		
		function populate (key, linha) {
			saida += '<li data-icon="false"' + (linha.divisao? ' data-role="list-divider"' : '') + '>'+
				'<h2>' + linha.titulo + '</h2>' + 
				'<p>' + linha.info + '</p>' + 
				'<span>' + linha.salahora + '</span>' +
				'</li>';
		}
				
		$.each(lista, populate);
		
		$('#' + toPage + ' .ui-be-agenda').append(saida);
		
		$('#' + toPage + ' .ui-be-agenda').listview("refresh");
	}	

	var urlAgenda = 'http://static.bigeyessolution.com/json/agenda-convergencebr-2016.json';

	$.getJSON(urlAgenda, function (data) { console.log(JSON.stringify(data));
		agenda = data;
		localStorage.agenda = JSON.stringify(data);
	}).fail(done).done(done);
}