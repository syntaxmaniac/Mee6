// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const googleTTS = require(`google-tts-api`);
var Mee6Regex = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var Mee6f = /\/\^\[(.*)+\]\/\g/g.exec(Mee6Regex)[1];
// ⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡
module.exports = {
  name: `tts`,
  commandType: "Fun⚡",
  description: `Text To Speech.`,
  ᴍᴇᴇ6ʍօʀɛ: `Use  *${ꜱɪɢɴ.Mee6IX}tts <text>*  or  *${ꜱɪɢɴ.Mee6IX}tts <text> | <language_code>*  to convert text to speech.
You can also reply to a text message with syntax  *${ꜱɪɢɴ.Mee6IX}tr <language>*  to translate text.`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    var str = ᴍᴇᴇ6.sender;
    var newString = str.substring(0, str.length - 15);
    //     if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us") {
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
    if (Arc.length === 0) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ARC,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give text or language!*

*Usage Example*
*${ꜱɪɢɴ.Mee6IX}tts <text>*
*With language code:*
*${ꜱɪɢɴ.Mee6IX}tts <text> = <language_code>*`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        });
    }
    let text = ``;
    let langCode = `en`;
    for (var i = 0; i < Arc.length; i++) {
      if (Arc[i] == `=`) {
        langCode = Arc[i + 1];
        break;
      }
      text += Arc[i] + ` `;
    }
    if (text.length > 200) {
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `*Total characters should be less than 200.*\nTotal characters for current input were {}.`.format(
            text.length
          ),
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    } else {
      try {
        const url = googleTTS.getAudioUrl(text, {
          lang: langCode,
          slow: false,
          host: `https://translate.google.com`,
        });
        console.log(url);
        await υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: url,
            },
            MessageType.audio,
            {
              mimetype: Mimetype.mp4Audio,
            }
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      } catch (cᴇʀʀᴏʀ) {
        υℓтяσηℓιєηт.sendMessage(
          ᴍᴇᴇ6.chatId,
          `*🎮ᴍᴇᴇ6™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.Mee6IX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
