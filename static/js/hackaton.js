(function(){
	function obtener_proyectos(){

		//Hackaton tencology
		var bind_hack;
		var id = $('#id_hack').val();
		var container_hackaton = $('.hack-data');
		var template_hackatones = "<div class='hack-intro list-group'><div class='list-group-item'><h3>Nombre: :nombre:</h3><ul class='hack-data'><div class='list-group-item-text'><p>Descripcion: :descripcion:</p><p>Fecha: :fecha:</p><p>Lugar: :lugar:</p><ul><p>Nuestros Patrocinadores</p>";
		$.get('/hackaton/'+id, function(data){

			bind_hack=template_hackatones.replace(':nombre:',data.nombreHackaton).replace(':descripcion:', data.descripcion)
			.replace(':fecha:', data.fecha_format).replace(':lugar:', data.lugar);
			$.ajax({url:'/hackaton/'+id+'/sponsores',
				success: function(data_sponsores){
				data_sponsores.forEach(function(item_sponsor){
					bind_hack += "<li>"+item_sponsor.nombre+"</li><li><img src='"+item_sponsor.logo+"'</li>"+
					"<li><a href='"+item_sponsor.pagina+"'>"+item_sponsor.pagina+"</a></li></div></ul></div></div>";
					console.log("Este es el maldto_--- " +bind_hack);
				});
					bind_hack+="</ul>";
					container_hackaton.append($(bind_hack));
			}
		});

			console.log("Final_--- " +bind_hack);

		});



		//Hakcton project
		var project
		var container_projects = $('.hackaton-proyectos');
		var template_projects = "<div class='project-div col-md-4 alert alert-dismissible alert-warning'> <h3><a href='/hackaton/proyecto/:id:'>Equipo: :equipo:</a></h3><h4>Proyecto: :proyecto:</h4><p>Descripción: :desc:</p>";
		$.get('/hackaton/'+id+'/equipos', function(data){
			var bind_projecto;
			var design=0;
			data.forEach(function(item_project){
				bind_projecto= template_projects.replace(':id:', item_project.id).replace(':equipo:', item_project.nombreEquipo).replace(':proyecto:', item_project.nombreProyecto)
				.replace(':desc:', item_project.descripcionProyecto);
				bind_projecto += "<ul><p>Tecnologias</p>";
				//Tecnologias
				$.ajax({url:"/hackaton/equipos/"+item_project.id,
					success: function(data,txtStatus,xhr){
						$.ajax({url:"/hackaton/tech/"+data.id,
						success: function(data) {
							data.forEach(function(item){
								debugger;
								bind_projecto += "<li>"+item.nombreLenguaje+"</li>"
							});
							bind_projecto += "</ul></div>"
							if(design==0){
								bind_projecto += "<div class='col-md-1'></div>"
									design =1;
							}
							container_projects.append($(bind_projecto).fadeIn(1200));
						}})
					}
				});
			})
		})
	}
	obtener_proyectos();
})();
