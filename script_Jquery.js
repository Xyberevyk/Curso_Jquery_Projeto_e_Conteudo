/*$(seletor).ação();
$(function(){//lê o documento
	$('#azul').click(function(){//faz a função de click
		//$('h1').hide();//faz sumir 
		//$('h1').css("color", "red");//muda a cor
		//$('#unico').css("color", "red");
		$('p').css("background-color", "blue");//ou ao em vez de color colocar como background-color
		$('p').fadeOut('slow');//some suavimente
		$('p').delay(1000);
		$('p').fadeIn('slow');
	});
	$('#vermelho').click(function(){
		$('p').css("background-color", "red");
		$('#mensagem')
			.text("Cor alterada com sucesso")
			.css({color:'red', border:'1px solid red'})
			.delay(3000)
			.addClass('green');
			$('button').removeClass('red');
	});
});
<script>
function changeAzul(id)
{
  document.getElementById(id).style.color = "#0000FF";
}
function changeVermelho(id)
{
  document.getElementById(id).style.color = "#FF0000";
}
</script>

<div id="1">BIACE VIADÃO !!</div>

<button onclick="changeAzul('1'); return false;">Azul</button>
<button onclick="changeVermelho('1'); return false;">Vermelho</button>
*/



$(function(){
	$('#l1').click(function(){
		$('#i2').hide();
		$('#i3').hide();
		$('#i4').hide();
		$('#i1').show();
	});

	$('#l2').click(function(){
		$('#i1').hide();
		$('#i3').hide();
		$('#i4').hide();
		$('#i2').show();
	});

	$('#l3').click(function(){
		$('#i1').hide();
		$('#i2').hide();
		$('#i4').hide();
		$('#i3').show();
	});

	$('#l4').click(function(){
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').hide();
		$('#i4').show();
	});
});