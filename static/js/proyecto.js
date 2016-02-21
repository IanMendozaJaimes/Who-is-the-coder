(function(){
	var id = $('#id_proyecto').val();
	var github_repo;
	//GET Proyecto
	var container_proyecto = $('.project-info');
	var template_proyecto = "<div class='proyecto-div'><h2>:nombre:</h2><h3>¿Que hacemos?</h3><p>:desc:</p><p>Encuentra el proyecto: <a href=':github:'></a></p><a href=':link:'></a><p></p></div>";
	$.get("/hackaton/proyecto/"+id,function(data){
		var bind_proyecto = template_proyecto.replace(':nombre:',data.nombreProyecto).replace(':desc:', data.descripcionProyecto)
		.replace(':github:', data.githubProyecto).replace(':link:', data.linkProyecto);
		container_proyecto.append($(bind_proyecto).fadeIn(1000));
	});
	//GET Participants
	var container_participant = $('.project-participants');
	var template_participant = "<div class='participants-div'><h3>Our Team</h3><ul>"
	$.ajax({
		url:"/hackaton/proyecto/"+id
		success:function(data){
			data.forEach(item_participant){
				template_participant += "<li>"+item_participant.nickname+"</li>"
				template_participant += "<li>"+item_participant.lugar+"</li>"	
			}
			template_participant += "</ul></div>"
			container_participant.append()
		}
	})

	//GET Commits
	$.get("http://api.github.com/repos/"+Owner+"/"+Repository+"/commits",function(data){
		var container = $('.project-commits');
		var template = "<div class='github-div'><h4>Commit :message:</h4><p>:date:</p></div>";
		data.forEach(item){
			var bind = template.replace(":message:",item.commit.message).replace(":message:",item.commit.commiter.date);
			container.append($(bind).fadeIn(1500);
		}
	});

})();