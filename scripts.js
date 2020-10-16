start_sec =60;
sec = start_sec;
level = 1;
count_squares = 4;
start_alpha = 0.5;
alpha = start_alpha;
difficulty = 0.02;

function change_count(){
   count_squares= (1+level)*(1+level);
}	

function change_level(){
   elements = document.getElementsByClassName("level");
   elem = elements[0];	
   str = level.toString();
   elem.innerText=str; 
   level = level +1;
}	

function change_time(){
   elements = document.getElementsByClassName("time");
   elem = elements[0];	
   str = sec.toString();
   elem.innerText=str;   
   sec = sec -1;
   if (sec <0) clickHandler1(event);
}

function fill_table(){
   elements = document.getElementsByClassName("squares");
   table = elements[0];	
   table.innerHTML='';
   for(let i=0;i<=level;i++)
   {
	 table.append(document.createElement('tr')); 
   }   
   trs = document.getElementsByTagName('tr')
   for(let i=0;i<=level;i++)
   {
	  current = trs[i];
      for(let j=0;j<=level;j++)
      {
		current.append(document.createElement('td'));
		tds=current.childNodes;
		tds[j].append(document.createElement('button'));
	  }
   }  
}	

function clickHandler1(event){
	alert("Lose");
	level = 1;
	sec = start_sec;
	change_count();
	alpha = start_alpha;
	fill_table();
	fill_clicks();
	change_level();
}

function clickHandler2(event){
	change_count();
	fill_table();
	fill_clicks();
	change_level();
}	

function fill_clicks(){
	elements = document.getElementsByTagName('button');
	win_index = Math.trunc((Math.random()*100)%count_squares);
	r = Math.trunc((Math.random()*100)%256);
	g = Math.trunc((Math.random()*100)%256);
	b = Math.trunc((Math.random()*100)%256);
	for(let i=0;i<count_squares;i++)
	{
		if(i != win_index) {	
			elements[i].onclick = clickHandler1;
			elements[i].style.backgroundColor = 'rgba(' + r + ',' + g +','+ b +',1)';
		}	
		else{	
			elements[i].onclick = clickHandler2;
			elements[i].style.backgroundColor = 'rgba(' + r + ',' + g +','+ b +','+ alpha+')';
		}
	}
	alpha = alpha+difficulty;
}	

fill_table();

fill_clicks();

change_level();

setInterval(change_time,1000);

