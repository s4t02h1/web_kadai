
// exec1：CSSのスタイルを変更してみよう
$(function () {
	$("div").css("background-color", "green");
});
// exec2：タイミングをコントロールしてみよう
// on()メソッドは特定の出来事（イベント）が起こるタイミングに実行したい命令（イベントハンドラ）を設定するメソッド
// イベントの種類をイベントタイプという
$(function () {
	$("div").on('mouseover', function(){
		$("div").css("background-color", "#FC6");
	});

	$("div").on('mouseout', function(){
//		$("div").css("background-color", "green");
//		$("div").css('background-color', ''); //''は元に戻す
		$("div").css({
			color: '',
			backgroundColor: ''
		});
		
	});
});
// メソッドチェーンを使ってみる
// プログラムの処理速度が上がる
$(function () {
	$("div")
		.on('mouseover', function(){
			$("div").css("background-color", "#FC6");
		})
		.on('mouseout', function(){
			$("div").css("background-color", "#09C");
		});
});

// exec3：アニメーションさせてみよう
// 1500ミリ秒かけてアニメーションする
$(function () {
	$("div").on('click', function(){
		$("div").animate({
			opacity: 0,	// 0透明
			fontSize: '0px'	// 徐々に0pxになる
		  }, 1500
		);
	});
});
