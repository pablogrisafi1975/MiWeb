<?php
//camelCase
//metodos draw dibujan, ningun otro dibuja
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<link rel="stylesheet" href="css/base.css" type="text/css"
	media="screen, projection" />
<link rel="stylesheet" href="css/styles.css" type="text/css"
	media="screen, projection" />
<title>P&aacute;gina personal de Pablo Grisafi</title>
</head>
<body>
	<div id="main">
		<div id="top">
			<div id="fotito">
				<img alt="foto chiquita" src="img/fotito.jpg" />
			</div>
			<div id="desc">
				<h1>P&aacute;gina personal de Pablo Andr&eacute;s Grisafi</h1>
				<br /> (Algo as&iacute; como una mezcla de un CV y una carta de
				presentaci&oacute;n para este milenio)
			</div>
		</div>




		<?php $menuSelected = drawMenu();
		echo '<div id = "content">';
		include $menuSelected[filename];
		echo '</div>'
		?>
		<div id = "footer">
			El dise&ntilde;o de esta p&aacute;gina es enteramente m&iacute;o, lo que muestra mi pobre
			capacidad est&eacute;tica. Pero el css utilizado se basa en
			<a href="http://thinkvitamin.com/design/setting-rather-than-resetting-default-styling/">base.css</a>
			de Thierry Koblentz.(Una excelente manera de comenzar un sitio m&aacute;s o menos cross-browser
			y con un aspecto al menos decente)<br/>
			Esta p&aacute;gina no contiene  ni una miserable l&iacute;nea de javascript. Los men&uacute;es
			se crean din&aacute;micamente gracias a la magia de <a href="http://www.php.net">PHP</a>.
			Parece andar nom&aacute;s.<br />
			Est&aacute; gentil y gratuitamentemente hosteada por <a href="http://x10hosting.com/">x10hosting</a>.<br/>
			x10hosting te da php, mysql y varias otras cosas m&aacute;s a cambio de que entres en su foro
			una vez cada 15 d&iacute;as. &#161;Eso es servicio!<br/>
			El favicon est&aacute; tomado de <a href= "http://stackoverflow.com">StackOverflow</a> (es la imagen que generaron para mi perfil; autom&aacute;ticamente) y
			convertido de formato gracias a <a href = "http://favicon.htmlkit.com/">FavIcon from Pics</a>
			<a href="http://validator.w3.org/check?uri=referer"><br/><img
      src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" height="31" width="88" /></a>
		</div>
	</div>
</body>
</html>





<?php
function drawMenu(){
	$menuRequested = array_key_exists('menu', $_GET) ? $_GET['menu'] : 'bienvenido';
	$menuItems = getMenuItems($menuRequested);

	echo '<ol id="menu">';
	foreach($menuItems as $menuItem){
		drawMenuItem($menuItem);
		if($menuItem['selected']){
			$menuSelected = $menuItem;
		}
	}
	echo '</ol>';
	return $menuSelected;
}

function drawMenuItem($menuItem){
	if($menuItem[selected]){
		echo '<li class="menuitemselected">';
		echo $menuItem['menulabel'];
		echo '</li>';
	}else{
		echo '<li class="menuitem">';
		echo '<a class="menuitemlink" href="index.php?menu='.$menuItem['menuname'].'" >';
		echo $menuItem['menulabel'];
		echo '</a>';
		echo '</li>';
	}
}

function getMenuItems($menuRequested){
	$list = array();
	$dir = opendir(".");
	$oneMenuIsSelected = false;
	while (($filename = readdir($dir)) !== false) {
		if(!is_dir($filename) && strStartsWith($filename, "menu_")){
			$menuname = getMenuName($filename);
			$menulabel = getMenuLabel($menuname);
			$menuItem = array("filename" => $filename, "menuname" => $menuname, "menulabel" => $menulabel);
			if($menuname == $menuRequested){
				$menuItem['selected'] = true;
				$oneMenuIsSelected = true;
			}else{
				$menuItem['selected'] = false;
			}
			//echo "filename: ".$menuItem['filename']."  menuname: ".$menuItem['menuname']."  menulabel: ".$menuItem['menulabel']."<br />";
			$list[] = $menuItem;
		}
	}
	if($oneMenuIsSelected == false){
		$list[0]['selected'] = true;
	}
	usort($list, "sort_by_filename");

	return $list;
}
// Define the custom sort function
function sort_by_filename($a,$b) {
	return $a['filename']>$b['filename'];
}

function getMenuName($filename){
	$noMenu = substr($filename, 8, strlen($filename) - 4 - 8);
	return str_replace("_", " ", $noMenu);
}

function getMenuLabel($menuname){
	return strtoupper(substr($menuname, 0, 1)).substr($menuname, 1);
}




function strStartsWith($haystack, $needle){
	$length = strlen($needle);
	return (substr($haystack, 0, $length) === $needle);
}

?>