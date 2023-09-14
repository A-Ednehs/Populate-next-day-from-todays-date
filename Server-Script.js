checkDate();


function checkDate(){
//var subtract_date2 = new GlideDateTime('2023-09-12 12:20:03');

var gdt = new GlideDateTime("2023-09-14 12:44:29");
gs.print(gdt.getDayOfWeekLocalTime());


if(gdt.getDayOfWeekLocalTime() != '4'){
for(var i = 1 ; i<=4 ; i++){

gdt.addDaysLocalTime(i);
    gs.print(gdt.getDayOfWeekLocalTime());
gs.print(gdt);
}

}
gs.print('--------------------------------');

var todayDateTime = new GlideDateTime("2023-09-18 12:44:29");

var integerValForToday = todayDateTime.getDayOfWeekLocalTime();

gs.print(integerValForToday);

var adderForMonday = 0;

if( integerValForToday == 2 || integerValForToday == 3 ){
    adderForMonday = 11 - integerValForToday;
}else{
    adderForMonday = 4 - integerValForToday;
}

todayDateTime.addDaysLocalTime(adderForMonday);
gs.print(todayDateTime.getLocalDate()); 

gs.print('--------------------------------');

var subtract_date = new GlideDateTime();
subtract_date.addDaysLocalTime(2);
gs.print('Add 2 days: '+ subtract_date);

var day = subtract_date.getDayOfWeekLocalTime()
gs.print(day);

if (day <= '2'){
  gs.print('this week');
}else{
    gs.print('next week');
}
}
