/*Coppy right : vuhongminh911@gmail.com*/
(function ($) {
	$.fn.convertHiKata = function (value , type , content)
	{
		valueTextInput = value ; 
		Type = type ;
		Content = content;
		pos = $(Content).caret();
		Convert (valueTextInput , Type);
	};
	
	
	
	array_char = [];
	array_char2 = [];
	array_char3 = [];
	array_char4_a = [];
	array_char4_b = [];
	var StringCVAlpha = '';
	var StringCVJp = '';
	var StringCantCV = '';
	checkCantCV = 0;
	useThis = 0;
	special1 = 0;
	valueBegin = '';
	valueEnd = '';
	special2 = 0;
	pile1 =  0;
	var checkRight = '';
	var StringOld = '';
	var StringTop = '';
	var StringBot = ''; 
	var StringCVCopyPast = '';
	var name_regex = /[a-zA-Z,-]+/;
	array_CVJ = [{ char : 'a' , jp :'あ' } , { char : 'i' , jp :'い' } , { char : 'u' , jp :'う' } , { char : 'e' , jp :'え' } , { char : 'o' , jp :'お' }
				 , { char : 'ka' , jp :'か' } , { char : 'ki' , jp :'き' } , { char : 'ku' , jp :'く' } , { char : 'ke' , jp :'け' } , { char : 'ko' , jp :'こ' }
				 , { char : 'sa' , jp :'さ' } , { char : 'shi' , jp :'し' } , { char : 'si' , jp :'し' } , { char : 'su' , jp :'す' } , { char : 'se' , jp :'せ' } , { char : 'so' , jp :'そ' }
				 , { char : 'ta' , jp :'た' } , { char : 'chi' , jp :'ち' } , { char : 'tsu' , jp :'つ' } , { char : 'te' , jp :'て' } , { char : 'to' , jp :'と' }
				 , { char : 'na' , jp :'な' } , { char : 'ni' , jp :'に' } , { char : 'nu' , jp :'ぬ' } , { char : 'ne' , jp :'ね' } , { char : 'no' , jp :'の' }
				 , { char : 'ha' , jp :'は' } , { char : 'hi' , jp :'ひ' } , { char : 'fu' , jp :'ふ' } , { char : 'he' , jp :'へ' } , { char : 'ho' , jp :'ほ' }
				 , { char : 'ma' , jp :'ま' } , { char : 'mi' , jp :'み' } , { char : 'mu' , jp :'む' } , { char : 'me' , jp :'め' } , { char : 'mo' , jp :'も' }
				 , { char : 'ra' , jp :'ら' } , { char : 'ri' , jp :'り' } , { char : 'ru' , jp :'る' } , { char : 're' , jp :'れ' } , { char : 'ro' , jp :'ろ' }
				 , { char : 'wa' , jp :'わ' } , { char : 'wo' , jp :'を' } , { char : 'ya' , jp :'や' } , { char : 'yu' , jp :'ゆ' } , { char : 'yo' , jp :'よ' },{ char : 'nn' , jp :'ん' }
				 , { char : 'ga' , jp :'が' } , { char : 'gi' , jp :'ぎ' } , { char : 'gu' , jp :'ぐ' } , { char : 'ge' , jp :'げ' } , { char : 'go' , jp :'ご' }
				 , { char : 'za' , jp :'ざ' } , { char : 'zi' , jp :'じ' } , { char : 'zu' , jp :'ず' } , { char : 'ze' , jp :'ぜ' } , { char : 'zo' , jp :'ぞ' }
				 , { char : 'da' , jp :'だ' } , { char : 'di' , jp :'ぢ' } , { char : 'du' , jp :'づ' } , { char : 'de' , jp :'で' } , { char : 'do' , jp :'ど' }
				 , { char : 'ba' , jp :'ば' } , { char : 'bi' , jp :'び' } , { char : 'bu' , jp :'ぶ' } , { char : 'be' , jp :'べ' } , { char : 'bo' , jp :'ぼ' }
				 , { char : 'pa' , jp :'ぱ' } , { char : 'pi' , jp :'ぴ' } , { char : 'pu' , jp :'ぷ' } , { char : 'pe' , jp :'ぺ' } , { char : 'po' , jp :'ぽ' }
				 , { char : 'kyo' , jp :'きょ'}  , { char : 'kya' , jp :'きゃ'} , { char : 'kyu' , jp :'きゅ'}
				 , { char : 'ji' , jp :'じ' } , { char : 'ja' , jp :'じゃ' } , { char : 'ju' , jp :'じゅ' } , { char : 'jo' , jp :'じょ' }
				 , { char : 'cho' , jp :'ちょ' } , { char : 'cha' , jp :'ちゃ' } , {char : 'chu' , jp :'ちゅ' }
				 , { char : 'byo' , jp :'びょ' } , { char : 'bya' , jp :'びゃ' } , {char : 'byu' , jp :'びゅ' }
				 , { char : 'pyo' , jp :'ぴょ' } , { char : 'pya' , jp :'ぴゃ' } , {char : 'pyu' , jp :'ぴゅ' }
				 , { char : 'shu' , jp :'しゅ' } , { char : 'sha' , jp :'しゃ' } , {char : 'sho' , jp :'しょ' }
				 , { char : 'tt' , jp :'っ' } , { char : 'kk' , jp :'っ' } , {char : 'ss' , jp :'っ' }
				 , { char : 'pp' , jp :'っ' } , { char : 'bb' , jp :'っ' }]
	//
	array_KATA = [{ char : 'a' , jp :'ア' } , { char : 'i' , jp :'イ' } , { char : 'u' , jp :'ウ' } , { char : 'e' , jp :'エ' } , { char : 'o' , jp :'オ' }
				 , { char : 'ka' , jp :'カ' } , { char : 'ki' , jp :'キ' } , { char : 'ku' , jp :'ク' } , { char : 'ke' , jp :'ケ' } , { char : 'ko' , jp :'コ' }
				 , { char : 'sa' , jp :'サ' } , { char : 'shi' , jp :'シ' } , { char : 'si' , jp :'シ' } , { char : 'su' , jp :'ス' } , { char : 'se' , jp :'セ' } , { char : 'so' , jp :'ソ' }
				 , { char : 'ta' , jp :'タ' } , { char : 'chi' , jp :'チ' } , { char : 'tsu' , jp :'ツ' } , { char : 'te' , jp :'テ' } , { char : 'to' , jp :'ト' }
				 , { char : 'na' , jp :'ナ' } , { char : 'ni' , jp :'ニ' } , { char : 'nu' , jp :'ヌ' } , { char : 'ne' , jp :'ネ' } , { char : 'no' , jp :'ノ' }
				 , { char : 'ha' , jp :'ハ' } , { char : 'hi' , jp :'ヒ' } , { char : 'fu' , jp :'フ' } , { char : 'he' , jp :'ヘ' } , { char : 'ho' , jp :'ホ' }
				 , { char : 'ma' , jp :'マ' } , { char : 'mi' , jp :'ミ' } , { char : 'mu' , jp :'ム' } , { char : 'me' , jp :'メ' } , { char : 'mo' , jp :'モ' }
				 , { char : 'ra' , jp :'ラ' } , { char : 'ri' , jp :'リ' } , { char : 'ru' , jp :'ル' } , { char : 're' , jp :'レ' } , { char : 'ro' , jp :'ロ' }
				 , { char : 'wa' , jp :'ワ' } , { char : 'wo' , jp :'ヲ' } , { char : 'ya' , jp :'ヤ' } , { char : 'yu' , jp :'ユ' } , { char : 'yo' , jp :'ヨ ' },{ char : 'nn' , jp :'ン ' }
				 , { char : 'ga' , jp :'ガ' } , { char : 'gi' , jp :'ギ' } , { char : 'gu' , jp :'グ' } , { char : 'ge' , jp :'ゲ' } , { char : 'go' , jp :'ゴ' }
				 , { char : 'za' , jp :'ザ' } , { char : 'zi' , jp :'ジ' } , { char : 'zu' , jp :'ズ' } , { char : 'ze' , jp :'ゼ' } , { char : 'zo' , jp :'ゾ' }
				 , { char : 'da' , jp :'ダ' } , { char : 'di' , jp :'ヂ' } , { char : 'du' , jp :'ヅ' } , { char : 'de' , jp :'デ' } , { char : 'do' , jp :'ド' }
				 , { char : 'ba' , jp :'バ' } , { char : 'bi' , jp :'ビ' } , { char : 'bu' , jp :'ブ' } , { char : 'be' , jp :'ベ' } , { char : 'bo' , jp :'ボ' }
				 , { char : 'pa' , jp :'パ' } , { char : 'pi' , jp :'ピ' } , { char : 'pu' , jp :'プ' } , { char : 'pe' , jp :'ペ' } , { char : 'po' , jp :'ポ' }
				 , { char : 'kyo' , jp :'キョ'}  , { char : 'kya' , jp :'キャ'} , { char : 'kyu' , jp :'キュ'}
				 , { char : 'ji' , jp :'ジ' } , { char : 'ja' , jp :'ジャ' } , { char : 'ju' , jp :'ジュ' } , { char : 'jo' , jp :'ジョ' }
				 , { char : 'cho' , jp :'チョ' } , { char : 'cha' , jp :'チャ' } , {char : 'chu' , jp :'チュ' }
				 , { char : 'byo' , jp :'ビョ' } , { char : 'bya' , jp :'ビャ' } , {char : 'byu' , jp :'ビュ' }
				 , { char : 'pyo' , jp :'ピョ' } , { char : 'pya' , jp :'ピャ' } , {char : 'pyu' , jp :'ピュ' }
				 , { char : 'shu' , jp :'シュ' } , { char : 'sha' , jp :'シャ' } , {char : 'sho' , jp :'ショ' }
				 , { char : 'tt' , jp :'ッ' } , { char : 'kk' , jp :'ッ' } , {char : 'ss' , jp :'ッ' }
				 , { char : 'pp' , jp :'ッ' } , { char : 'bb' , jp :'ッ' }
				 ,{ char : '-' , jp :'ー' }]
	
	Convert = function(valueTextInput , type)
	{
		typeC = type;
		var StringCV = valueTextInput.trim();
		StringCV	 = valueTextInput.toLowerCase();
		StringCVCopyPast = StringCV ; 
		array_char = $.trim(StringCV).split("");
		if(StringCV.length  == 0 )
		{
			StringOld = '';
			StringCVAlpha = '';
		}	
		jQuery.each(array_char , function (i , val){
			 if(val != ' ')
			 {
					if( !val.match(name_regex)  && pile1 == 0) {	
						StringCVAlpha = StringCV.substr(i+1,StringCV.length);
						StringCVJp = StringCV.substr(0, i+1 );
						useThis = 1;
						
					}
					else if( StringCV != StringOld  && i < StringCV.length && i >= 0 && StringCV.length >= StringOld.length + 1 && StringOld != '' && StringCV.length > 4)
					{
						
						StringCVAlpha = '';
						jQuery.each(array_char , function (i3 , val3){
							if(val3.match(name_regex))
							{
								if( StringCV.search( (StringCVAlpha + val3) )  > -1 )
								{
									StringCVAlpha = StringCVAlpha + val3;
									pile1 = 1;
								}
							}
						});
						
						useThis = 1;
						if(StringCVAlpha.length +1 >= 2 && pile1 == 1)
						{
							special1 = 1;
						}
					}
					else if( StringCV != StringOld  && StringCV.length <= 4 && StringCV.length > 2  && i != StringCV.length - 1 && StringCV.length >= StringOld.length && StringOld != '')
					{	
						if( StringCV.length > 1)
						{
							StringCVAlpha = '';
							jQuery.each(array_char , function (i3 , val3){
								if(val3.match(name_regex))
								{
									if( StringCV.search( (StringCVAlpha + val3) )  > -1 )
									{
										StringCVAlpha = StringCVAlpha + val3;
										pile1 = 1;
									}
								}
							});
							
							useThis = 1;
							if(StringCVAlpha.length +1 >= 2 && pile1 == 1)
							{
								special1 = 1;
							}
						}
					}
			}
		});
		if( special1 == 1)
		{
			array_char2 = $.trim(StringCVAlpha).split(""); 
			jQuery.each(array_char2 , function (i2 , val2){ 
				
				if( i2 == 0)
					valueBegin = val2;
				if( i2 == array_char2.length - 1)
					valueEnd = val2; 
			});
			if(valueBegin != 0)
			{	var begin = StringCV.search(valueBegin); 
				StringTop = StringCV.substr(0, begin ); 
			}
			else
			{
				StringTop = '';
			}
			var end = StringCV.search(valueEnd); 
			StringBot = StringCV.substr(end + 1, StringCV.length );

			special2 = 1; 		
		}
		
		if( StringCVAlpha == '' && StringCVJp == '' && checkCantCV == 0 && StringCV.length > 0 && special1 == 0 ) 
		{

			array_char4_a = array_char4_b =  $.trim(StringCV).split("");
			
			if(array_char4_a.length == StringCV.length && array_char4_a.length > 1)
			{
				jQuery.each(array_char4_a , function (i4_a , val4_a){
					var dem = 0;
					
					checkRight = val4_a;
					jQuery.each(array_char4_b , function (i4_b , val4_b){
						if (dem < 3 && StringCantCV == '')
						{ 
							if(i4_a < i4_b)
							{								
								checkRight = checkRight + val4_b ;
								
								if(typeC == 'hira' && $.grep(array_CVJ , function(e){return e.char == checkRight}).length > 0  )
								{
									var vitri = StringCV.search(checkRight);
									StringCantCV = StringCV.substr(0 , vitri);
									StringCV = StringCV.substr(vitri , StringCV.length);
									dem = 3;
									return true;
								}
								else if (typeC == 'kata' && $.grep(array_KATA , function(e){return e.char == checkRight}).length > 0 )
								{
									var vitri = StringCV.search(checkRight);
									StringCantCV = StringCV.substr(0 , vitri);
									StringCV = StringCV.substr(vitri , StringCV.length);
									dem = 3;
									return true;
								}
							}
							else if(i4_b >= i4_a)
								dem++;
						}
						else if( dem == 3 && StringCantCV == '')
						{
							checkRight = '';
							
						}
					});
					if(dem == 3 && StringCantCV != '')
					{
						return true;
					}
				});

				checkCantCV = 1; 
			}
			else if (array_char4_a.length < StringCV.length && array_char4_a.length > 1)
			{
				
				jQuery.each(array_char4_a , function (i4_a , val4_a){ 
					if(StringCVAlpha.length != array_char4_a.length)
						StringCVAlpha = StringCVAlpha + val4_a;
				});
				
				var vitri = StringCV.search(StringCVAlpha);
				
				StringCantCV = StringCV.substr( 0 ,vitri);
				StringCV = StringCVAlpha;
			}
		}
		else if(StringCVJp != '') 
		{
			StringCantCV = ''; 
		}
		if(typeC == 'hira') 
		{
			if(useThis == 1)
				var CVDone =  $.grep(array_CVJ , function(e){return e.char == StringCVAlpha})
			else
				var CVDone =  $.grep(array_CVJ , function(e){return e.char == StringCV})
		}
		else if(typeC == 'kata')
		{
			if(useThis == 1)
				var CVDone =  $.grep(array_KATA , function(e){return e.char == StringCVAlpha})
			else
				var CVDone =  $.grep(array_KATA , function(e){return e.char == StringCV})
		}
		
		useThis = 0;
		if (CVDone.length != 0)
		{
				if(special2 == 0) 
					$(Content).val(StringCantCV.concat(StringCVJp , CVDone[0].jp));
				else
				{
					$(Content).val(StringTop.concat( CVDone[0].jp , StringBot));
					special2 = 0; 
					special1 = 0;
					$(Content).caret(pos);
				}
				StringOld =  document.getElementById("TextCV").value; 
			
			CVDone = '';
			pile1 = 0;
			StringCVAlpha = '';
		}
			
			StringCantCV = '';
			checkCantCV = 0; 
			StringCVJp = '';
			StringCV = '';
		return 0;
	}
})(jQuery)