Jquery.convertHikata-
=====================
Convert Alpha to Japanese while typing in textbox.
=======================
ConvertHikata ver 1.0 .
------
December 19 2014
-------
Convert language while Typing  
=======================
get ideas from google tranlse . how is it work to convert hiragana . this plugin can add textbox without google tranlse to convert alpha to hiragana and kata is simple.
<a href = "http://converthikata.freevnn.com/"><b>You can check Demo here</b></a></br>
Features
-------
<ul>
<li>Convert alpha to hiragana and katakana </li>
<li>Can write like textbox normal </li>
<li>Have button to switch hiragana and katakana</li> 
<li>Can write multi box orther name class</li>
</ul>
Notice 
------------
<ul>
<li>Dont forget add jquery and plugin <a href = "https://github.com/accursoft/caret">jQuery Caret</a></li>
</ul>
Documentation
-------
this is just frist code , i will update when have update . 
How to use 
-------
<p>you need add your class name or id name of your textbox in </p>
<pre>$('.yourclassname').bind('keyup keypress keydown' ,function()
	{ 
		$(this).convertHiKata($(this).val() , type , '.yournameclass');
	});
	</pre>
To switch hiragana and katakana , you can create button with value type = 'hira' and type = 'kata'</br>
<p>Html :</p> 
<pre>
	 type="hira" 
	 type="kata"
</pre>
<p>Jquery : </p>
<pre>
type = 'hira'; // please dont forget this value
	$('.system ul li').click(function(){
		if($(this).attr('type') == 'kata')
		{
			$(this).children().addClass('actived');
			$('.system ul li.hira img').removeClass('actived');
			type = 'kata';
		}
		else
		{
			$(this).children().addClass('actived');
			$('.system ul li.kata img').removeClass('actived');
			type = 'hira';
		}
	});
	</pre>
	Default will be type = 'hira' , please dont forget . 
Credits
-------
<p>first update from vuhongminh911@gmail.com (yoroshiku111yh)</p>
use help from <a hre="https://github.com/accursoft/caret">jQuery Caret</a>
<p>I'm will happy if this code helpful with you</p> 
For Contributors
------
I hope you like this code and make this become simple and faster toghether . Because this is just basic . 
thank you and sorry for my english . 


