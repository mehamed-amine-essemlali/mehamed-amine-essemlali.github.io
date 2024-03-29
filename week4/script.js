var names=new Array();
names[0]="Yasin";
names[1]="Jn";
names[2]="Jawad";
names[3]="ja3bo9";
names[4]="karim";
names[5]="farah";
names[6]="mjid";
names[7]="amine";
names[8]="bouchta";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}