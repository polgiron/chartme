<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">

	<title>Chart me</title>

	<!-- FAVICON -->
	<!-- <link rel="icon" href="favicon.ico"> -->

	<!-- RESPONSIVE -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	<!-- CSS -->
	<link rel="stylesheet" href="css/home.min.css">

	<!-- JS -->
	<script src="common/js/lib/font-awesome.js"></script>
	<script src="common/js/lib/jquery-2.1.1.min.js"></script>
	<script src="common/js/lib/raphael.min.js"></script>
	<!-- <script src="common/js/common.js"></script> -->
	<script src="js/home.js"></script>
</head>
<body>
	<!-- MAIN WRAPPER -->
	<div id="main-wrapper">
		
		<!-- HEADER -->
		<header>
			<a href="./">
				<h1>Chart me</h1>
			</a>
		</header>

		<!-- TEXT AREA WRAPPER -->
		<div id="textarea-wrapper">
			<textarea id="data"></textarea>
			<div id="button-wrapper">
				<button id="clear">
					<i class="fa fa-eraser"></i> Clear
				</button>
				<button id="run">
					<i class="fa fa-bar-chart"></i> Chart me!
				</button>
			</div>
		</div>

		<!-- CHART WRAPPER -->
		<div id="chart-wrapper"></div>
	</div>
</body>