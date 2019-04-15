// 変更する場所をhtmlで確認し、要素を取得する
let btn = document.getElementById('btn');
let result = document.getElementById('result')
let bground = document.getElementsByClassName('result')

// 配列を指定
let uranai = ['大吉', '吉','中吉','小吉','凶','大凶']  //結果の配列
let bgcolor = ['#EB4964','#FAD900','#9DC98E','#51C2D4','#BD76FF','#E64118']
let luckyColor =['Pink','Yellow','Green','Blue','Purple','Red']

// クルックしたらランダムにuranaiの配列が選択される
btn.addEventListener('click', function() {
	let num = Math.floor(Math.random() * uranai.length);
	// console.log(uranai[num]);

//クリックしたらランダムにbgcolorの配列が選択される
	let color = Math.floor(Math.random() * bgcolor.length);
	bground[0].style.backgroundColor = (bgcolor[color])

	console.log(color);   //colorの変数がランダムな数字で出力される
	console.log(bgcolor[color]);   //[]の中は何番目かを表す。ここではcolorでランダム設定している。bgcolorの中のcolorの配列をランダムで出力する
	console.log(luckyColor[color]);   //[]の中は何番目かを表す。ここではcolorでランダム設定している。luckyColorの中のcolorの配列をランダムで出力する
	console.log(`"ラッキーカラーは"${luckyColor[color]}"です"`)  //左の文字を文字列で出力

	result.innerHTML = (`${uranai[num]}!!<br>ラッキーカラーは<br>『${luckyColor[color]}』です`);   //テキストで出力する。textContentでは<br> が使えないので、innerHTMLを使う

	// bgcolor[num] = '#EB4964'
	// bgcolor[num] = 'Pink'

	// bgcolor[num] = '#FAD900'
	// bgcolor[num] = 'Yellow'

	// bgcolor[num] = '#9DC98E'
	// bgcolor[num] = 'Green'

	// bgcolor[num] = '#51C2D4'
	// bgcolor[num] = 'Blue'

	// bgcolor[num] = '#BD76FF'
	// bgcolor[num] = 'Purple'

	// bgcolor[num] = '#E64118'
	// bgcolor[num] = 'Red'

	// let num2 = Math.Floor(Math.random() * bgcolor.length);



});