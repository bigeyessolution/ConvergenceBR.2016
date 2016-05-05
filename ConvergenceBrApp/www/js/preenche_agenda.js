var agenda = false && localStorage.agenda ? JSON.parse(localStorage.agenda) :
{
	"version": 3,
	"agenda10" : [
		{"salahora": "8:00", "titulo": "Registration Open", "info": "", "divisao": true},
		{
			"collapsible": true,
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
		{"salahora": "10:00", "titulo": "Refreshments in exhibition area", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-training_course",
			"descricao": "Training courses",
			"salahora": "10:30",
			"itens": [
				{"salahora": "10:30", "titulo": "Pre-processing and convergence in CFD: Improving productivity in simulation", "info": "Course 1 - part 1"},
				{"salahora": "10:30", "titulo": "Structural Analysis Pre-processing and Convergence: how to Achieve Simulation Productivity", "info": "Course 2 - part 1"},
				{"salahora": "10:30", "titulo": "Introduction to Acoustic Analysis: Simulation and Tests", "info": "Course 3 - part 1"},
				{"salahora": "10:30", "titulo": "Optimization applied to Engineering: From Single Point Analysis to Parametric Analysis", "info": "Course 4 - part 1"},
				{"salahora": "10:30", "titulo": "Introduction to Computer Simulation: from Modeling to Industry Applications", "info": "Course 5 - part 1"},
				{"salahora": "10:30", "titulo": "Introduction do High Frequency Electromagnetic Simulation: from Modelling to Industry Applications", "info": "Course 6"}
			]
		},
		{"salahora": "12:30", "titulo": "Lunch", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-training_course",
			"descricao": "Training courses",
			"salahora": "13:30",
			"itens": [
				{"salahora": "13:30", "titulo": "Pre-processing and convergence in CFD: Improving productivity in simulation", "info": "Course 1 - part 2"},
				{"salahora": "13:30", "titulo": "Structural Analysis Pre-processing and Convergence: how to Achieve Simulation Productivity", "info": "Course 2 - part 2"},
				{"salahora": "13:30", "titulo": "Introduction to Acoustic Analysis: Simulation and Tests", "info": "Course 3 - part 2"},
				{"salahora": "13:30", "titulo": "Optimization applied to Engineering: From Single Point Analysis to Parametric Analysis", "info": "Course 4 - part 2"},
				{"salahora": "13:30", "titulo": "Introduction to Computer Simulation: from Modeling to Industry Applications", "info": "Course 5 - part 2"},
				{"salahora": "13:30", "titulo": "Introduction to System Analysis using ANSYS Simplorer", "info": "Course 7"}
			]
		},
		{"salahora": "15:30", "titulo": "Refreshments in exhibition area", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-training_course",
			"descricao": "Training courses",
			"salahora": "16:00",
			"itens": [
				{"salahora": "16:00", "titulo": "Pre-processing and convergence in CFD: Improving productivity in simulation", "info": "Course 1 - part 2"},
				{"salahora": "16:00", "titulo": "Structural Analysis Pre-processing and Convergence: how to Achieve Simulation Productivity", "info": "Course 2 - part 2"},
				{"salahora": "16:00", "titulo": "Introduction to Acoustic Analysis: Simulation and Tests", "info": "Course 3 - part 2"},
				{"salahora": "16:00", "titulo": "Optimization applied to Engineering: From Single Point Analysis to Parametric Analysis", "info": "Course 4 - part 2"},
				{"salahora": "16:00", "titulo": "Introduction to Computer Simulation: from Modeling to Industry Applications", "info": "Course 5 - part 2"},
				{"salahora": "16:00", "titulo": "Introduction to System Analysis using ANSYS Simplorer", "info": "Course 7"}
			]
		},
		{"salahora": "17:30", "titulo": "End of 1º day", "info": "", "divisao": true}
	],
	"agenda11" : [
		{"salahora": "8:00", "titulo": "Registration Open", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-engineering-workshops",
			"descricao": "Engineering Workshops",
			"salahora": "8:30",
			"itens": [
				{"salahora": "8:30 - Room Lorangerie I", "titulo": "ASME Section VIII - Division 2", "info": "Jairo Mola, Unitécnica"},
				{"salahora": "8:30 - Room Lorangerie II", "titulo": "Model Verification for Finite Element Analysis", "info": "Giuseppe Mirlisenna, ESSS"},
				{"salahora": "8:30 - Room Malmaison", "titulo": "Reduced Hydraulic Models Tests", "info": "César Felipe Nardy, Bardella"}
			]
		},
		{"salahora": "9:50", "titulo": "Refreshments in exhibition area", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-plenary-session",
			"descricao": "Plenary session",
			"salahora": "10:20",
			"itens": [
				{"salahora": "10:20 - Versallis", "titulo": "Opening", "info": "Clóvis Maliska Jr., ESSS", "link": "#palestrantes"},
				{"salahora": "10:30 - Versallis", "titulo": "Simulation for Breakthrough Innovation: Trends, Best Practices & ANSYS Simulation Platform", "info": "Ravi Kumar, ANSYS, Inc.", "link": "#palestrantes"},
				{"salahora": "11:10 - Versallis", "titulo": "SIRIUS: Brazil at the vanguard of Engineering of Accelerators", "info": "Lucas Sanfelici, LNLS", "link": "#palestrantes"},
				{"salahora": "11:50 - Versallis", "titulo": "Design Validation & Decision Making", "info": "Luiz Carlos de Castro Santos, Embraer", "link": "#palestrantes"}
			]
		},
		{"salahora": "12:30", "titulo": "Lunch", "info": "", "divisao": true},
		{
			"collapsible": true,
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
			"collapsible": true,
			"class": "ui-be-workshop-application",
			"descricao": "Free Workshops",
			"salahora": "14:30",
			"itens": [
				{"salahora": "14:30 - Room Lorangerie I", "titulo": "Workflow and Usability Enhancements in Workbench Mechanical 17.0", "info": "Pedro Cheroto, ESSS"},
				{"salahora": "14:30 - Room Lorangerie I", "titulo": "Substructuring Analysis in Workbench Mechanical 17.0", "info": "Fabiano Diesel, ESSS"},
				{"salahora": "14:30 - Room Lorangerie II", "titulo": "Working with new features in ANSYS CFD 17.0", "info": "Bruno Contessi, ESSS"},
				{"salahora": "14:30 - Room Malmaison", "titulo": "ANSYS Enterprise Cloud", "info": "Vinicius Strugata, ESSS"},
				{"salahora": "14:30 - Room Chambord", "titulo": "ANSYS Savant Introduction", "info": "Juliano Mologni, ESSS"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Structural Mechanics",
			"salahora": "15:20",
			"itens": [
				{"salahora": "15:20 - Room Lorangerie I", "titulo": "Numerical Model Applied on Fatigue Life Predictions of In-Service Subsea Free Spanning Pipelines", "info": "Almir Sobral, PETROBRAS"},
				{"salahora": "15:40 - Room Lorangerie I", "titulo": "Comparison of Different Local Stress Approaches for Fatigue Assessment of Subsea Equipment Based on Finite Element Analysis", "info": "Hugo Bottino, Technip"},
				{"salahora": "16:00 - Room Lorangerie I", "titulo": "Temperature Profile Evaluation on a Flexible Pipe within a Bend Stiffener", "info": "Marcelo Galardo, GE Wellstream e Pedro Cheroto, ESSS"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Fluid Dynamics",
			"salahora": "15:20",
			"itens": [
				{"salahora": "15:20 - Room Lorangerie II", "titulo": "Computacional Fluid Dynamics and Static Analysis Oriented to Biopriting of Human Tissues and Organs", "info": "Fábio Albuquerque, CTI Renato Arche"},
				{"salahora": "15:40 - Room Lorangerie II", "titulo": "3D Design and Fluid-Structure Interactions Analyses of a Heart Valve Model Compared with a Polyurethane-Made Heart Valve", "info": "Janaína Dernowsek, CTI Renato Arche"},
				{"salahora": "16:00 - Room Lorangerie II", "titulo": "CFD analyses of a cement kiln", "info": "Renata Favalli, Dynamis Mecânica Aplicada Ltda."}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Structural Mechanics",
			"salahora": "15:20",
			"itens": [
				{"salahora": "15:20 - Room Malmaison", "titulo": "Structural Reinforcement of Gas Cleaning System for Blast Furnace ", "info": "Bruno Martins, ISQ Brasil"},
				{"salahora": "15:40 - Room Malmaison", "titulo": "Thermo-Structural Analysis of a Steel Shop Converter Using Thermography Data", "info": "Luiz Otavio Rocha, USIMINAS"},
				{"salahora": "16:00 - Room Malmaison", "titulo": "Intuitive, Parametric and Topology Optimization Applied on Rollover Protective Structures of Agriculture Tractors", "info": "Igor Saveljevas, VirtualCAE"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Electromagnetic",
			"salahora": "15:20",
			"itens": [
				{"salahora": "15:20 - Room Chambord", "titulo": "Multiphysics (Electromagnetics and Thermal) Simulation of a Microwave Oven", "info": "Juliano Mologni, ESSS"},
				{"salahora": "15:40 - Room Chambord", "titulo": "Slotted Waveguide Antennas for Radar Applications ", "info": "Igor Feliciano, INATEL"},
				{"salahora": "16:00 - Room Chambord", "titulo": "Optically-controlled Reconfigurable Antennas and RF Devices for mm-wave Applications", "info": "Andreia Aparecida de Castro, UNIFEI"}
			]
		},
		{"salahora": "16:20", "titulo": "Refreshments in exhibition area", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Structural Mechanics",
			"salahora": "16:50",
			"itens": [
				{"salahora": "16:50 - Room Lorangerie I", "titulo": "Simulations performed at the Brazilian Synchrotron Light Source", "info": "Allan Gilmour Anderson Jr., LNLS"},
				{"salahora": "17:10 - Room Lorangerie I", "titulo": "FEM Applications in Health Industry Equipment Evaluation", "info": "Bernardo Abrahão Campos Salles, GE Healthcare"},
				{"salahora": "17:30 - Room Lorangerie I", "titulo": "Structure Analisys of a Shiploader - Upper and Lower Structures", "info": "Cristian Zarichta, TMSA"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Fluid Dynamics",
			"salahora": "16:50",
			"itens": [
				{"salahora": "16:50 - Room Lorangerie II", "titulo": "CFD Analysis on LNG Spheres Deluge System According to API Standard", "info": "Carlos Eduardo Reuther, PETROBRAS"},
				{"salahora": "17:10 - Room Lorangerie II", "titulo": "Simulation CFD of a riser-FCC using the approach continuous lumping on the cracking reactions", "info": "José Luis Gomez Vergel, UNICAMP"},
				{"salahora": "17:30 - Room Lorangerie II", "titulo": "Multiphase CFD Analysis of Submerged Air Blowing into a Copper Converter", "info": "Alexandre Dolabella, Magnesita"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Fluid Dynamics",
			"salahora": "16:50",
			"itens": [
				{"salahora": "16:50 - Room Malmaison", "titulo": "CFX in the Pump Improvements and in Business Opportunities", "info": "Ismael Nicholas, Higra Industrial"},
				{"salahora": "17:10 - Room Malmaison", "titulo": "Geometry Evaluation of PIG Iron Channel Using Computer Simulation", "info": "Leonardo Camilo dos Reis, Usiminas"},
				{"salahora": "17:30 - Room Malmaison", "titulo": "Analysis of Cavity Modes in a Compressor Suction Muffler", "info": "Vitor Ferreira de Almeida, Tecumseh do Brasil"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Electromagnetic",
			"salahora": "16:50",
			"itens": [
				{"salahora": "16:50 - Room Chambord", "titulo": "Interoperability Analysis Between Different Radiant Systems Installed in the Same Metal Structure", "info": "Bruno Rodrigues Ferraz, SAVIS"},
				{"salahora": "17:10 - Room Chambord", "titulo": "Design of X-Band Band-Pass Filter of Three Resonant Cavities based on SIW Technology", "info": "Ricardo Caranicola, EPUSP"},
				{"salahora": "17:30 - Room Chambord", "titulo": "Engineering the 'Internet of Things' Using Simulation", "info": "Juliano Mologni, ESSS"}
			]
		},
		{"salahora": "17:50", "titulo": "Technical Discussion", "info": "", "divisao": true},
		
		{"class": "ui-be-cocktail", "salahora": "18:10", "titulo": "Cocktail - atração musical", "info": "", "divisao": true}
	],
	"agenda12" : [
		{"salahora": "8:00", "titulo": "Registration Open", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-engineering-workshops",
			"descricao": "Engineering Workshops",
			"salahora": "8:30",
			"itens": [
				{"salahora": "8:30 - Room Lorangerie I", "titulo": "Considerations about Mechanics and Materials Science Fundamentals that Support Integrity Evaluations of Cracked Components Due to Fatigue and Fracture", "info": "Prof. Gustavo Donato, FEI"},
				{"salahora": "8:30 - Room Lorangerie II", "titulo": "Tips and Tricks for CFD Modeling ", "info": "Carlos Fontes, ESSS"},
				{"salahora": "8:30 - Room Malmaison", "titulo": "Design and Analysis of Computer Experiments", "info": "Guilherme Jenovêncio, ESSS"}
			]
		},
		{"salahora": "9:50", "titulo": "Refreshments in exhibition area", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-plenary-session",
			"descricao": "Plenary session",
			"salahora": "10:20",
			"itens": [
				{"salahora": "10:20 - Versallis", "titulo": "Opening", "info": "Clóvis Maliska Jr., ESSS"},
				{"salahora": "10:30 - Versallis", "titulo": "CAE at Embraco: a Journey of 30 Years", "info": "Marcos Giovani de Bortoli, EMBRACO"},
				{"salahora": "11:10 - Versallis", "titulo": "Horizons for Numerical Simulation", "info": "Cassiano Antunes Cezario, WEG"},
				{"salahora": "11:50 - Versallis", "titulo": "Panel Discussion: Framework for Simulation", "info": ""}
			]
		},
		{"salahora": "12:30", "titulo": "Lunch", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-software-update",
			"descricao": "Software Update",
			"salahora": "14:00",
			"itens": [
				{"salahora": "14:00 - Room Lorangerie I", "titulo": "Geometry", "info": ""},
				{"salahora": "14:00 - Room Lorangerie II", "titulo": "ANSYS AIM", "info": ""},
				{"salahora": "14:00 - Room Malmaison", "titulo": "ROCKY", "info": ""},
				{"salahora": "14:00 - Room Malmaison", "titulo": "Rocky & SpaceClaim: An Efficient Design Tool For Bulk Solids Handling Processes.", "info": "Leon White, ESSS"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-workshop-application",
			"descricao": "Free Workshops",
			"salahora": "14:30",
			"itens": [
				{"salahora": "14:30 - Room Lorangerie I", "titulo": "ANSYS SpaceClaim Direct Modele", "info": "Rafael Vetturazzi, ESSS"},
				{"salahora": "14:30 - Room Lorangerie II", "titulo": "ANSYS AIM: Simulation for Every Engineer", "info": "Luiz Amaral, ESSS"},
				{"salahora": "14:30 - Room Malmaison", "titulo": "ROCKY and ANSYS CFD Coupling", "info": "Lucilla Almeida, ESSS"},
				{"salahora": "14:30 - Room Chambord", "titulo": "CFD: CHEMKIN overview and hands on", "info": "Ana Paula Faria, ESSS"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Structural Mechanics",
			"salahora": "15:20",
			"itens": [
				{"salahora": "15:20 - Room Lorangerie I", "titulo": "Stress Analysis of the Support Structure of a Reactor Bed for Allowable Head Loss Calculation of the Process Gas Stream Using Elastic and Limit Load Method", "info": "Flavio Pereira, Braskem"},
				{"salahora": "15:40 - Room Lorangerie I", "titulo": "Evaluation of Critical Buckling Load Value Through Different Analyzes Applied to Aluminum Cans", "info": "Rodrigo Villaca, UTFPR"},
				{"salahora": "16:00 - Room Lorangerie I", "titulo": "FEM in Standard External Pressure Equipment", "info": "Ricardo Vendrame, Welding"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Fluid Dynamics",
			"salahora": "15:20",
			"itens": [
				{"salahora": "15:20 - Room Lorangerie II", "titulo": "Analysis of Turbulence Models Applied to CFD Drag Simulations of a Small Hatchback Vehicle", "info": "Filipe Fabian, GM do Brasil"},
				{"salahora": "15:40 - Room Lorangerie II", "titulo": "Best Practices for Simulation of Vortex Induced Motions (VIM)", "info": "Bianca Almeida, ESSS"},
				{"salahora": "16:00 - Room Lorangerie II", "titulo": "Influence of Wheel Airflow Induction on Vehicle Total Drag Coefficient", "info": "Flavio Koiti Maruyama, GM do Brasil"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "DEM / Customization",
			"salahora": "15:20",
			"itens": [
				{"salahora": "15:20 - Room Malmaison", "titulo": "Use of Rocky DEM to Analyze Particulate Behavior Inside an Asphalt Plant Equipment", "info": "Emerson Elias Dewes, Bomag e Lucilla Coelho, ESSS"},
				{"salahora": "15:40 - Room Malmaison", "titulo": "ANSYS Workbench Customization Applied to Tundish CFD Analysis", "info": "Alexandre Dolabella, Magnesita"},
				{"salahora": "16:00 - Room Malmaison", "titulo": "Using ANSYS ACT for Running a Topology Optimization Analysis and Importing Residual Stress from Casting Simulation", "info": "Valmir Fleischman, VirtualCAE"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Fluid Dynamics",
			"salahora": "15:20",
			"itens": [
				{"salahora": "15:20 - Room Chambord", "titulo": "CFD Simulation of Green Water Events on FPSOs exposed to Beam and Quartering Seas", "info": "Daniel Fonseca de Carvalho, PETROBRAS"},
				{"salahora": "15:40 - Room Chambord", "titulo": "Water Meter Design and the Computational Fluid Dynamics", "info": "Bruno Brasselotti, Itron Brazil"},
				{"salahora": "16:00 - Room Chambord", "titulo": "Multiphase Fuel Filling Simulation Methodology to Evaluate Different Filler Neck Designs", "info": "Leonardo José Volpe, GM do Brasil"}
			]
		},
		{"salahora": "16:20", "titulo": "Refreshments in exhibition area", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Structural Mechanics",
			"salahora": "16:50",
			"itens": [
				{"salahora": "16:50 - Room Lorangerie I", "titulo": "Use of Structural Analysis in Radiated Noise: a Study of Case in an Hermetic Compressor", "info": "Vitor Ferreira, Tecumseh do Brasil"},
				{"salahora": "17:10 - Room Lorangerie I", "titulo": "Powertrain Air Intake System Acoustic Optimization Through Numerical Simulation", "info": "Diego Willian da Silva, Vibroacustica"},
				{"salahora": "17:30 - Room Lorangerie I", "titulo": "Topology Optimization using ANSYS and Virtual Pyxis at ZF do Brasil", "info": "Janaina Rodrigues, ZF do Brasil"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Fluid Dynamics",
			"salahora": "16:50",
			"itens": [
				{"salahora": "16:50 - Room Lorangerie II", "titulo": "Fluid Dynamics Simulation of Diesel Injection for the Preservation of a Flowline in Ultra-Deepwaters", "info": "Gabriel Guimarães, Queiroz Galvão E&P"},
				{"salahora": "17:10 - Room Lorangerie II", "titulo": "Numerical Evaluation of Centrifugal Pumps in hermetic compressors", "info": "Luigi Carvalho Greco, EMBRACO"},
				{"salahora": "17:30 - Room Lorangerie II", "titulo": "Front Brake Design for Air Drag and Rotor Temperature Reduction", "info": "Julio Cesar Lelis, GMB"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Structural Mechanics",
			"salahora": "16:50",
			"itens": [
				{"salahora": "16:50 - Room Malmaison", "titulo": "Reducing GD&T using FEA", "info": "Mattias da Silva Castro, EMBRACO"},
				{"salahora": "17:10 - Room Malmaison", "titulo": "Cost Reduction Through the use of Simulation", "info": "Luis Paulo de Oliveira, Electrolux"},
				{"salahora": "17:30 - Room Malmaison", "titulo": "Frequency Domain Approach - Fatigue Life", "info": "José Guilherme, ENSUS"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-technical-session",
			"descricao": "Fluid Dynamics",
			"salahora": "16:50",
			"itens": [
				{"salahora": "16:50 - Room Chambord", "titulo": "Fluid Dynamic Study of the Rich Oil Distribution Pan in Delayed Coking Fractionators", "info": "André Gonçalves Oliveira, PETROBRAS"},
				{"salahora": "17:10 - Room Chambord", "titulo": "Reactors Optimization with Efficient Mixing", "info": "Alexandre Sampaio de Lima Malagodi, SEMCO Equipamentos"},
				{"salahora": "17:30 - Room Chambord", "titulo": "Evaluation of the Accuracy of RANS Models on the Prediction of Reactive Flows on a DLE Combustor", "info": "Diogo Dantas, PETROBRAS"}
			]
		},
	
		{"class": "ui-be-award", "salahora": "17:50", "titulo": "Convergence Best Paper Award / Academic Award", "info": "", "divisao": true, "link": "#sobre2"}
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
	var linhaID = 0;

	function populateSub (key, sub) {
		$('<li data-icon="false"><a '+
		( sub.link ? 'href="' + sub.link + '"' : '' ) +
		'><h2>' + sub.titulo + '</h2>' +
		'<p>' + sub.info + '</p>' +
		'<span>' + sub.salahora + '</span>' +
		'</a></li>').appendTo('#' + toPage + ' #item-agenda-' + linhaID);
	}

	function populate (key, linha) {
		if (linha.collapsible)  {
			linhaID ++;

			$('<li class="' + linha.class + ' ui-be-collapsible" data-role="collapsible" data-iconpos="false" data-inset="false">' +
			'<h2>' + linha.descricao + '</h2>' +
			'<ul id="item-agenda-' + linhaID + '" data-role="listview">')
			.appendTo('#' + toPage + ' .ui-be-agenda');

			$.each(linha.itens, populateSub);

		} else {
			$('<li class="' + linha.class + '" data-icon="false"' + (linha.divisao? ' data-role="list-divider"' : '') + '>'+
			'<a ' + ( linha.link ? 'href="' + linha.link + '"' : '' ) + '>' +
			'<h2>' + linha.titulo + '</h2>' +
			'<p>' + linha.info + '</p>' + 
			'<span>' + linha.salahora + '</span>' +
			'</a></li>')
			.appendTo('#' + toPage + ' .ui-be-agenda');
		}
	}
				
	$.each(lista, populate);
		
	hideLoading();

	$('#' + toPage + ' .ui-be-agenda').listview("refresh");

	$('#' + toPage + ' .ui-be-collapsibleset').collapsibleset("refresh");
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
