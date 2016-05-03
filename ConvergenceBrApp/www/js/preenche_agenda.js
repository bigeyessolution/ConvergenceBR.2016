var agenda = localStorage.agenda ? JSON.parse(localStorage.agenda) :
{
	"version": 0,
	"agenda10" : [
		{"salahora": "8:00", "titulo": "Registration Open", "info": "", "divisao": true},
		{
			"class": "ui-be-training_course",
			"descricao": "Training courses",
			"salahora": "8:30",
			"itens": [
				{"salahora": "8:30", "titulo": "Pre-processing and convergence in CFD: Improving productivity in simulation", "info": "Course 1 - part 1"},
				{"salahora": "8:30", "titulo": "Structural Analysis Pre-processing and Convergence: how to Achieve Simulation Productivity", "info": "Course 2 - part 1"},
				{"salahora": "8:30", "titulo": "Introduction to Acoustic Analysis: Simulation and Tests", "info": "Course 3 - part 1"},
				{"salahora": "8:30", "titulo": "Optimization applied to Engineering: From Single Point Analysis to Parametric Analysis", "info": "Course 4 - part 1"},
				{"salahora": "8:30", "titulo": "Introduction to Computer Simulation: from Modeling to Industry Applications", "info": "Course 5 - part 1"},
				{"salahora": "8:30", "titulo": "Introduction do High Frequency Electromagnetic Simulation: from Modelling to Industry Applications", "info": "Course 6"}
			]
		},
		{"salahora": "12:30", "titulo": "Lunch", "info": "", "divisao": true},
		{
			"class": "ui-be-training_course",
			"descricao": "Training courses",
			"salahora": "8:30",
			"itens": [
				{"salahora": "13:30", "titulo": "Pre-processing and convergence in CFD: Improving productivity in simulation", "info": "Course 1 - part 2"},
				{"salahora": "13:30", "titulo": "Structural Analysis Pre-processing and Convergence: how to Achieve Simulation Productivity", "info": "Course 2 - part 2"},
				{"salahora": "13:30", "titulo": "Introduction to Acoustic Analysis: Simulation and Tests", "info": "Course 3 - part 2"},
				{"salahora": "13:30", "titulo": "Optimization applied to Engineering: From Single Point Analysis to Parametric Analysis", "info": "Course 4 - part 2"},
				{"salahora": "13:30", "titulo": "Introduction to Computer Simulation: from Modeling to Industry Applications", "info": "Course 5 - part 2"},
				{"salahora": "13:30", "titulo": "Introduction to System Analysis using ANSYS Simplorer", "info": "Course 7"}
			]
		},
		{"salahora": "17:30", "titulo": "Closing", "info": "", "divisao": true}
	],
	"agenda11" : [
		{"salahora": "8:00", "titulo": "Registration Open", "info": "", "divisao": true},
		{
			"class": "ui-be-engineering-workshops",
			"descricao": "Engineering Workshops",
			"salahora": "8:30",
			"itens": [
				{"salahora": "8:30 - Room Lorangerie I", "titulo": "ASME Section VIII - Division 2", "info": "Jairo Mola, Unitécnica"},
				{"salahora": "8:30 - Room Lorangerie II", "titulo": "Model Verification for Finite Element Analysis", "info": "Giuseppe Mirlisenna, ESSS"},
				{"salahora": "8:30 - Room Malmaison", "titulo": "Reduced Hydraulic Models Tests", "info": "César Felipe Nardy, Bardella"}
			]
		},
		{"salahora": "9:50", "titulo": "Coffee break", "info": "", "divisao": true},
		{
			"class": "ui-be-plenary-session",
			"descricao": "Plenary session",
			"salahora": "10:20",
			"itens": [
				{"salahora": "10:20 - Versalles", "titulo": "Opening", "info": "Clóvis Maliska Jr., ESSS"},
				{"salahora": "10:30 - Versalles", "titulo": "Simulation for Breakthrough Innovation: Trends, Best Practices & ANSYS Simulation Platform", "info": "Ravi Kumar, ANSYS, Inc."},
				{"salahora": "11:10 - Versalles", "titulo": "SIRIUS: Brazil at the vanguard of Engineering of Accelerators", "info": "Lucas Sanfelici, LNLS"},
				{"salahora": "11:50 - Versalles", "titulo": "Design Validation & Decision Making", "info": "Luiz Carlos de Castro Santos, Embraer"}
			]
		},
		{"salahora": "12:30", "titulo": "Lunch", "info": "", "divisao": true},
		{
			"class": "ui-be-software-update",
			"descricao": "Software Update",
			"salahora": "14:00",
			"itens": [
				{"salahora": "14:00 - Room Lorangerie I", "titulo": "ANSYS Structural Mechanics", "info": ""},
				{"salahora": "14:00 - Room Lorangerie II", "titulo": "ANSYS Fluid Dynamics", "info": ""},
				{"salahora": "14:00 - Room Malmaison", "titulo": "modeFRONTIER", "info": ""},
				{"salahora": "14:00 - Room Chambord", "titulo": "Eletromagnetics", "info": ""}
			]
		},
		{
			"class": "ui-be-workshop-application",
			"descricao": "Workshop/Application",
			"salahora": "14:30",
			"itens": [
				{"salahora": "14:30 - Room Lorangerie I", "titulo": "Workflow and Usability Enhancements in Workbench Mechanical 17.0", "info": "Pedro Cheroto, ESSS"},
				{"salahora": "14:30 - Room Lorangerie I", "titulo": "Substructuring Analysis in Workbench Mechanical 17.0", "info": "Fabiano Diesel, ESSS"},
				{"salahora": "14:30 - Room Lorangerie II", "titulo": "Working with new features in ANSYS CFD 17.0", "info": "Bruno Contessi, ESSS"},
				{"salahora": "14:30 - Room Malmaison", "titulo": "ANSYS Enterprise Cloud", "info": "Vinicius Strugata, ESSS"},
				{"salahora": "14:30 - Room Chambord", "titulo": "ANSYS Savant Introduction", "info": "Juliano Mologni, ESSS"},
				{"salahora": "14:30 - Room Chambord", "titulo": "Eletromagnetics LF", "info": "Diogo Figueiredo, ESSS"}
			]
		},
		{
			"class": "ui-be-technical-session",
			"descricao": "Technical Session",
			"salahora": "15:20",
			"itens": [
				{"salahora": "15:20 - Room Lorangerie I (FEA)", "titulo": "Numerical Model Applied on Fatigue Life Predictions of In-Service Subsea Free Spanning Pipelines", "info": "Almir Sobral, PETROBRAS"},
				{"salahora": "15:20 - Room Lorangerie II (CFD)", "titulo": "Computational Fluid Dynamics and Static Analysis Oriented to Bioprinting of Human Tissues and Organs", "info": "Fábio Albuquerque, CTI Renato Arche"},
				{"salahora": "15:20 - Room Malmaison (FEA)", "titulo": "Structural Reinforcement of Gas Cleaning System for Blast Furnace", "info": "Bruno Martins, ISQ Brasil"},
				{"salahora": "15:20 - Room Chambord (EMAG)", "titulo": "Multiphysics (Electromagnetics and Thermal) Simulation of a Microwave Oven", "info": "Juliano Mologni, ESSS"}
			]
		},
		{
			"class": "ui-be-technical-session",
			"descricao": "Technical Session",
			"salahora": "15:40",
			"itens": [
				{"salahora": "15:40 - Room Lorangerie I (FEA)", "titulo": "Comparison of Different Local Stress Approaches for Fatigue Assessment of Subsea Equipment Based on Finite Element Analysis", "info": "Hugo Bottino, Technip"},
				{"salahora": "15:40 - Room Lorangerie II (CFD)", "titulo": "3D Design and Fluid-Structure Interactions Analyses of a Heart Valve Model Compared with a Polyurethane-Made Heart Valve", "info": "Janaína Dernowsek, CTI Renato Arche"},
				{"salahora": "15:40 - Room Malmaison (FEA)", "titulo": "Thermo-Structural Analysis of a Steel Shop Converter Using Thermography Data", "info": "Luiz Otavio Rocha, USIMINAS"},
				{"salahora": "15:40 - Room Chambord (EMAG)", "titulo": "Slotted Waveguide Antennas for Radar Applications ", "info": "Igor Feliciano, INATEL"},
				{"salahora": "16:00 - Room Lorangerie I (Technical Session-FEA)", "titulo": "Temperature Profile Evaluation on a Flexible Pipe within a Bend Stiffener", "info": "Marcelo Galardo, GE Wellstream e Pedro Cheroto, ESSS"},
				{"salahora": "16:00 - Room Lorangerie II (Technical Session-CFD)", "titulo": "CFD analyses of a cement kiln", "info": "Renata Favalli, Dynamis Mecânica Aplicada Ltda."},
				{"salahora": "16:00 - Room Malmaison (Technical Session-FEA)", "titulo": "Intuitive, Parametric and Topology Optimization Applied on Rollover Protective Structures of Agriculture Tractors", "info": "Igor Saveljevas, VirtualCAE"},
				{"salahora": "16:00 - Room Chambord (Technical Session-EMAG)", "titulo": "Optically-controlled Reconfigurable Antennas and RF Devices for mm-wave Applications", "info": "Andreia Aparecida de Castro, UNIFEI"}
			]
		},
		{"salahora": "16:20", "titulo": "Coffee break", "info": "", "divisao": true},

		{"salahora": "16:50 - Room Lorangerie I (Technical Session-FEA)", "titulo": "Simulations performed at the Brazilian Synchrotron Light Source", "info": "Allan Gilmour Anderson Jr., LNLS"},
		{"salahora": "16:50 - Room Lorangerie II (Technical Session-CFD)", "titulo": "CFD Analysis on LNG Spheres Deluge System According to API Standard", "info": "Carlos Eduardo Reuther, PETROBRAS"},
		{"salahora": "16:50 - Room Malmaison (Technical Session-CFD)", "titulo": "CFX in the Pump Improvements and in Business Opportunities", "info": "Ismael Nicholas, Higra Industrial"},
		{"salahora": "16:50 - Room Chambord (Technical Session-EMAG)", "titulo": "Interoperability Analysis Between Different Radiant Systems Installed in the Same Metal Structure", "info": "Bruno Rodrigues Ferraz, SAVIS"},

		{"salahora": "17:10 - Room Lorangerie I (Technical Session-FEA)", "titulo": "FEM Applications in Health Industry Equipment Evaluation", "info": "Bernardo Abrahão Campos Salles, GE Healthcare"},
		{"salahora": "17:10 - Room Lorangerie II (Technical Session-CFD)", "titulo": "Simulation CFD of a riser-FCC using the approach continuous lumping on the cracking reactions", "info": "José Luis Gomez Vergel, UNICAMP"},
		{"salahora": "17:10 - Room Malmaison (Technical Session-CFD)", "titulo": "Geometry Evaluation of PIG Iron Channel Using Computer Simulation", "info": "Leonardo Camilo dos Reis, Usiminas"},
		{"salahora": "17:10 - Room Chambord (Technical Session-EMAG)", "titulo": "Design of X-Band Band-Pass Filter of Three Resonant Cavities based on SIW Technology", "info": "Ricardo Caranicola, EPUSP"},
		
		{"salahora": "17:30 - Room Lorangerie I (Technical Session-FEA)", "titulo": "Structure Analisys of a Shiploader - Upper and Lower Structures", "info": "Cristian Zarichta, TMSA"},
		{"salahora": "17:30 - Room Lorangerie II (Technical Session-CFD)", "titulo": "Multiphase CFD Analysis of Submerged Air Blowing into a Copper Converter", "info": "Alexandre Dolabella, Magnesita"},
		{"salahora": "17:30 - Room Malmaison (Technical Session-CFD)", "titulo": "Analysis of Cavity Modes in a Compressor Suction Muffler", "info": "Vitor Ferreira de Almeida, Tecumseh do Brasil"},
		{"salahora": "17:30 - Room Chambord (Technical Session-EMAG)", "titulo": "Engineering the 'Internet of Things' Using Simulation", "info": "Juliano Mologni, ESSS"},

		{"salahora": "17:50 - Room Lorangerie I (Technical Session-FEA)", "titulo": "Impact Energy Absorption by Steel Plates", "info": "Mario Augusto Castro, Technip"},
		{"salahora": "17:50 - Room Lorangerie II (Technical Session-CFD)", "titulo": "How CFD can help us: the past and future", "info": "Karolline Ropelato, ESSS"},
		{"salahora": "17:50 - Room Malmaison (Technical Session-CFD)", "titulo": "Coefficients of added mass for conceptual phase of platforms design", "info": "Thiago Pontin Tancredi, UFSC"},
		
		{"salahora": "18:10 - Room Lorangerie I (Technical Session-FEA)", "titulo": "Technical Discussion FEA", "info": ""},
		{"salahora": "18:10 - Room Lorangerie II (Technical Session-CFD)", "titulo": "Technical Discussion CFD", "info": ""},
		{"salahora": "18:10 - Room Chambord (Technical Session-EMAG)", "titulo": "", "info": "Technical Discussion EMAG"},

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
;

function setAgenda () {
	if (localStorage.agenda) {
		agenda = JSON.parse (localStorage.agenda);
	} else {
		localStorage.agenda = JSON.stringify(agenda);
	}
}

function populateAgenda(toPage) {
	$('#' + toPage + ' .ui-be-agenda').empty();
	$('#' + toPage + ' .ui-be-agenda').listview("refresh");

	showLoading();
	
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
	
	hideLoading();
		
	$('#' + toPage + ' .ui-be-agenda').listview("refresh");
}


function getAgenda (toPage) {
	function done () {
		populateAgenda(toPage);
	}	

	var urlAgenda = 'http://static.bigeyessolution.com/json/agenda-convergencebr-2016.json';

	$.getJSON(urlAgenda, function (data) {
		if (data.version <= agenda.version) return;
	
		agenda = data;
		localStorage.agenda = JSON.stringify(data);
	});
}
