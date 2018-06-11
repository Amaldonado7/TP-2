function comenzar(){
	let nombre = $('.nombre').val()
	if (nombre != null) {
  $('.tuNombre').html(nombre)
  $('.userName').hide()
	} 
}

$('.userName').on('keypress', function(e){
	if (e.keyCode==13) {
		comenzar()
	}
}) 

let img = $('.img')
let imagenes = ['images/cow.jpeg', 
								'images/cow.jpeg', 
								'images/cow.jpeg',
								'images/cow.jpeg',
								'images/pig.jpeg',
								'images/pig.jpeg',
								'images/pig.jpeg',
								'images/pig.jpeg',
								'images/sheep.jpeg',
								'images/sheep.jpeg',
								'images/sheep.jpeg',
								'images/sheep.jpeg',
]
imagenes = imagenes.sort(function() {
	return Math.random() - 0.5});


let turnoNumero = 20
let turno=[] 
let gano = []

$('.img').on('click',function(e){
	let indice = $(this).index() 
	let imghtml = $(this) 
	imghtml.addClass('girar')
	imghtml.attr('src', imagenes[indice]) 
	let imagenClickeada = imagenes[indice]

	if (turno.length == 1)  {
		if (indice != turno[0].posicion) {
			turno.push({imagen: imagenClickeada,
				posicion: indice})
		}	
	} else {
		turno.push({imagen: imagenClickeada,
				posicion: indice})
	} 


	let right1= $('.img').eq(turno[0].posicion)
	let right2= $('.img').eq(turno[1].posicion)
	let turno1 = turno[0].imagen
	let turno2 = turno[1].imagen
	setTimeout(function(){
    if (turno1 == turno2) {
			right1.attr('src', 'images/blackandwhite.jpg')
			right2.attr('src', 'images/blackandwhite.jpg')
			right1.addClass('nomas')
			right2.addClass('nomas')
			gano.push(turno1)
			gano.push(turno2)
			turnoNumero--
			if(turno.length == 2){
				turno = []
			}	
		}else{
			right1.attr('src', 'images/farm.jpg')
			right2.attr('src', 'images/farm.jpg')
			right1.removeClass('girar')
			right2.removeClass('girar')
			turnoNumero--
			if(turno.length == 2){
				turno = []
			}
		} 
	  $('.turnoNumero').html(turnoNumero)
		if (turnoNumero == 0) {
			$('#perdio').removeClass('noMostrar')
			$('#perdio').addClass('mostrar')
		}	
		if (gano.length == 12) {
			$('#gano').removeClass('noMostrar')
			$('#gano').addClass('mostrar')
		}
  }, 400); 
})

function jugarNuevamente(){
	location.reload(true);	
}

