// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require(`../../ᴍᴇᴇ6/catch`);
const {
  getDadjoke,
  getPunchLine,
  getRandomCHNJoke,
  getCategoryCHNJoke,
  matchChuckJoke,
  matchJoke,
  getRandomJoke,
  getRandomTrumpQuote,
  getFact,
} = require(`random-jokes`);
var Mee6Regex = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var Mee6f = /\/\^\[(.*)+\]\/\g/g.exec(Mee6Regex)[1];
// ⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡
module.exports = {
  name: `joke`,
  commandType: `Fun⚡`,
  description: `Get any random Jokes`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    //     if (ᴍᴇᴇ6.chatId === `120363025343298860@g.us`) {
    //       var str = ᴍᴇᴇ6.sender;
    //       var newString = str.substring(0, str.length - 15);
    //       return await υℓтяσηℓιєηт
    //         .sendMessage(
    //           ᴍᴇᴇ6.chatId,
    //           {
    //             url: ꜱɪɢɴ.ERROR,
    //           },
    //           MessageType.image,
    //           {
    //             mimetype: Mimetype.png,
    //             contextInfo: { mentionedJid: [ᴍᴇᴇ6.sender] },
    //             caption: `*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*
    // 𝐈 𝐚𝐦 𝐌𝐫𝐌𝐞𝐞𝟔🛸𝐋𝐨𝐨𝐤 𝐀𝐭 𝐌𝐞! 𝗠𝗼𝘀𝘁 𝗔𝗱𝘃𝗮𝗻𝗰𝗲 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗕𝗼𝘁 ⧪

    // *❗Dҽαɾ @${newString}, ᴀʟʟ ᴍᴇᴇ6 ʙᴏᴛꜱ ᴀʀᴇ ᴅɪꜱᴀʙʟᴇᴅ ɪɴ ᴛʜɪꜱ ɢʀᴏᴜᴘ*
    // 👇🏽‍𝗔𝗹𝗹𝗼𝘄𝗲𝗱-𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀
    //   *⬡${Mee6f}uptime*
    //   *⬡${Mee6f}ping*
    //   *⬡${Mee6f}help*
    //   *⬡${Mee6f}alive*
    //   *⬡${Mee6f}update*
    // *⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*`,
    //           }
    //         )
    //         .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    //     }
    try {
      const dadJoke = await getDadjoke();
      console.log(ᴍᴇᴇ6.sender);
      var str = ᴍᴇᴇ6.sender;
      var newString = str.substring(0, str.length - 15);
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `*` + dadJoke + `*\n@${newString}`,
          MessageType.text,
          {
            contextInfo: { mentionedJid: [ᴍᴇᴇ6.sender] },
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    } catch (err) {
      console.log(err);
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
