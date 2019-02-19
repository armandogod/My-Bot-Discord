const Discord = require('discord.js');
const botPik = new Discord.Client();

botPik.login('NDcwNDY1ODcyMzE4ODI0NDQ4.D02UmQ.61SMREPf1O6qdSaJ6Spr4kqgk0M')

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
	if (msg.content === "ทำอะไรอยู่"){
		msg.channel.send("ทำอะไรก็ได้กูไม่ได้ขอตังใคร")
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
	if (msg.content === "อรอุมาคือใครวะ"){
		msg.channel.send("กูก้ไม่รู้ว่าใคร แม่ไออายมันมั้ง")
	}
	if (msg.content === "แป้งคือใครวะ"){
		msg.channel.send("กูก้ไม่รู้ว่าใคร คนที่ไอนิวแอบชอบมั้ง")
	}	
	if (msg.content === "ออมคือใครวะ"){
		msg.channel.send("กูก้ไม่รู้ว่าใคร แฟนเก่าไอนิวมันมั้ง")
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
      msg.channel.send("คำสั่ง:อิอิ ปิีก ทำอะไรอยู่ แง๊นๆ เป็นเพื่อนจะดีกว่า ก้มาดิค้าบบ ขอโทษครับท่าน อรอุมาคือใครวะ แป้งคือใครวะ ออมคือใครวะ ก็ตกกะปิหนิ");
	}
})