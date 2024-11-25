const Discord = require('discord.js');
const botPik = new Discord.Client();

botPik.login('insert bot token')

botPik.on("ready", () => {
  console.log('ArmandoGOD ready!')
})

botPik.on("message", (msg) => {
	if (msg.content === "อิอิ"){
		msg.channel.send("ยังจำไม่เคยลืมเลือน คอยเตือนตัวเองเอาไว้ ที่เธอเรียกฉันลำใย ฉันเก็บเอาไว้ในใจเรื่อยมา")
	}
	if (msg.content === "ปิ๊ก"){
		msg.channel.send("กูไม่ใช่ปิ๊ก กูคือบอทที่แมวเดินผ่านคีย์บอร์ดเฉยๆ")
	}
	if (msg.content === "แง๊นๆ"){
		msg.channel.send("แง๊นพ่อมึงดิ")
	}
	if (msg.content === "เป็นเพื่อนจะดีกว่า"){
		msg.channel.send("เพื่อนพ่อมึงดิ")
	}
	if (msg.content === "ก้มาดิค้าบบ"){
		msg.channel.send("มาพ่อมึงดิ")
	}
	if (msg.content === "ขอโทษครับท่าน"){
		msg.channel.send("เดี๋ยวทุ่มด้วยโพเดียมเลย")
	}		
	if (msg.content === "ก็ตกกะปิหนิ"){
		msg.channel.send("ตกกะปิก็เหี้ยแล้ว")
	}	
	if (msg.content === "อุ้ม"){
		msg.channel.send("อุ้มพ่อมึงดิไอสัส ตลกเหรอ ไอเหี้ย!!")
	}	
	if (msg.content === "Im Sorry"){
		msg.channel.send("-p I'm Sorry - BOTCASH")
	}
	if (!msg.content.startsWith("/")) return;
  if (msg.content.slice(1).split(" ")[0] === "commands") {
      msg.channel.send("คำสั่ง:อิอิ ปิีก ทำอะไรอยู่ แง๊นๆ เป็นเพื่อนจะดีกว่า ก็มาดิค้าบบ ขอโทษครับท่าน ก็ตกกะปิหนิ");
	}
})
