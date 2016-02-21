(function(){
    var id_reclutador;
    id_reclutador=$('nickname').val();

	var obtener_resultados = function(){
		//GET ultimos hackatones
		var container = $(".resultados-busqueda");
        var template;
            template = "<div class='resultados'>"+
                +"<h3 class='nombre-proyecto'>:nombre-proyecto:</h3>"+
                "<ul class='resultado-data'>"+
                    "<li class='language'>:language:</li>"+
                    "<li class='fecha'>:fecha:</li>"+
                    "<li class='id'>:id:</li>"
                "</ul>"+
            "</div>";
		$.get("/find",function(data){
			data.forEach(function(item){
				var binding = template.replace(":nombre-proyecto:", item.nombre)
				.replace(":language:", item.language)
				.replace(":fecha:", item.fecha_format)
				.replace(":id:", item.id)
				container.append($(binding).fadeIn(1500));
			});
		});
	}
    obtener_resultados();
        var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

$('#the-basics .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});
})();
