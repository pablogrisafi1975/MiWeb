<h3>Las que si</h3>
<table class="socialnettable">
	<tbody>
		<tr>
			<th>Red y enlace al perfil</th>
			<th>Detalles</th>
		</tr>
		<?php
		drawSocialNetRow('linkedin', 'http://ar.linkedin.com/in/pablogrisafi1975',
		'Me parece que es la red laboral m�s importante y de hecho creo que consegu� al
		menos un trabajo gracias a ellos. Es la que siempre tengo actualizada, m�s o menos.');
		drawSocialNetRow('careers.stackoverflow', 'http://careers.stackoverflow.com/pablogrisafi1975',
		'Cuando llegu� a los 576 puntos en StackOverflow me mandaron un mail diciendo
		\'We\'re impressed by your java tag answers on Stack Overflow.
		In recognition of your generous spirit, we\'d like to invite you to create
		 a professional profile on Stack Overflow Careers 2.0.\'
		 �Como puedo decirle que no a Joel Spolsky  y Jeff Atwood?');
		?>
	</tbody>
</table>

<h3>Las que no</h3>
<table class="socialnettable">
	<tbody>
	<?php
		drawSocialNetRow('facebook', '#', 'Es demasiado social
			para mi gusto, ya soy un hombre grande, padre de familia.');
		drawSocialNetRow('Google+', '#', '�Si no tengo el original,
			por que voy a tener la imitaci�n?');
		drawSocialNetRow('Orkut', '#', 'No soy brasile�o.');
		drawSocialNetRow('Google buzz', '#', '�Qu� ##### es eso?');
		drawSocialNetRow('myspace', '#', 'No soy m�sico.');
		drawSocialNetRow('SecondLife', '#', '�todav�a existe esto?');
		drawSocialNetRow('hi5', '#', 'Soy mayor de 12 a�os.'); ?>

	</tbody>
</table>




<?php
function drawSocialNetRow($net, $url, $text){
	$netfilename = strtolower($net);
	$netfilename = str_replace("+", "plus", $netfilename);
	$netfilename = str_replace(" ", "", $netfilename);
	echo '<tr>';
	echo '<td><a href="'.$url.'"><img alt="'.$net.' logo" src="img/'.$netfilename.'.png" class="socialnetlogo" title="'.$net.'"/>'.'</a></td>';
	echo '<td>'.htmlentities($text).'</td>';

	echo '</tr>';


}?>
