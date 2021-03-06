(function(){
    var id_reclutador;
    id_reclutador=$('.nickname_val').val();

    var primera_vez=function(){
        if($('.es_reclutador').val()==1){
            $('.r2').attr("hidden",true);
        }
    }
    primera_vez();
	var obtener_hackatones = function(){
		//GET ultimos hackatones
		var container = $(".append-ajax-hacks");

		var template = "<div class='hack-intro'>"+
		"<h3 class='hack-name'><a href='/hackatones/:id_hack:'>:name:</a></h3>"+
          "<ul class='hack-data'>"+
            "<li class='hack-place'>:place:</li>"+
            "<li class='hack-date'>:fecha:</li>"+
          "</ul>"+
        "</div>";

		$.get("/hackaton/preview",function(data){
			data.forEach(function(item){
				if(item.paso==0){
				var binding = template.replace(":name:", item.nombreHackaton)
				.replace(":place:", item.lugar)
				.replace(":fecha:", item.fecha_format)
				.replace(":id_hack:", item.id)
				}
				container.append($(binding).fadeIn(1500));
			});
		});
	}

    //Función para traer a hackatones que ya hayan pasado
    var obtener_hackatones_buscados=function()
    {
         var container = $(".hacks-buscados");
        //Obtener hackatones en los que haya buscado el reclutador
        var template = "<div class='hackatones-buscados'>" +
            "<h3 class='hack-name'><a href='/hackatones/:id_hack:'>:name:</a></h3>"+
            "<ul class='hack-data'>" +
                "<li class='hack-place'>:place:</li>"+
                "<li class='hack-date'>:fecha:</li>"+
            "</ul>" +
            "</div>";
        $.get("/hackaton/preview?id="+id_reclutador+"",function(data){
			data.forEach(function(item){
				if(item.paso==1){
				var binding = template.replace(":name:", item.nombreHackaton)
				.replace(":place:", item.lugar)
				.replace(":fecha:", item.fecha_format)
				.replace(":id_hack:", item.id)
				}
				container.append($(binding).fadeIn(1500));
			});
		});
    }
    obtener_hackatones();
    obtener_hackatones_buscados();
})();
